/**
 * HIMKIV Health & MedGuide - Dedicated Dosage Calculator Controller (js/calculator.js)
 * Real-time posology simulator for pediatric & adult weight-based dosing.
 */

document.addEventListener("DOMContentLoaded", () => {
  if (typeof CLINICAL_DATA === "undefined") {
    console.error("Clinical dataset could not be found.");
    return;
  }

  const refreshIcons = () => {
    if (typeof lucide !== "undefined" && lucide.createIcons) {
      lucide.createIcons();
    }
  };

  // Theme Toggle
  const themeToggleBtn = document.getElementById("theme-toggle-btn");
  const themeIcon = document.getElementById("theme-toggle-icon");
  const currentTheme = localStorage.getItem("himkiv_theme") || 
    (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");

  const applyTheme = (theme) => {
    localStorage.setItem("himkiv_theme", theme);
    const html = document.documentElement;
    if (theme === "dark") {
      html.classList.add("dark");
      if (themeIcon) themeIcon.setAttribute("data-lucide", "sun");
    } else {
      html.classList.remove("dark");
      if (themeIcon) themeIcon.setAttribute("data-lucide", "moon");
    }
    refreshIcons();
  };

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener("click", () => {
      const isDark = document.documentElement.classList.contains("dark");
      applyTheme(isDark ? "light" : "dark");
    });
  }
  applyTheme(currentTheme);

  // Mobile Menu
  const mobileMenuBtn = document.getElementById("mobile-menu-btn");
  const mobileMenuDrawer = document.getElementById("mobile-menu-drawer");
  const mobileMenuCloseBtn = document.getElementById("mobile-menu-close");

  if (mobileMenuBtn && mobileMenuDrawer) {
    mobileMenuBtn.addEventListener("click", () => {
      mobileMenuDrawer.classList.remove("hidden");
      document.body.style.overflow = "hidden";
    });
  }
  if (mobileMenuCloseBtn && mobileMenuDrawer) {
    mobileMenuCloseBtn.addEventListener("click", () => {
      mobileMenuDrawer.classList.add("hidden");
      document.body.style.overflow = "";
    });
  }
  if (mobileMenuDrawer) {
    mobileMenuDrawer.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        mobileMenuDrawer.classList.add("hidden");
        document.body.style.overflow = "";
      });
    });
  }

  // Calculator State
  const calcState = {
    saltId: "paracetamol",
    age: 8,
    weight: 24,
    weightUnit: "kg"
  };

  // DOM Elements
  const saltSelect = document.getElementById("calc-salt-select");
  const ageSlider = document.getElementById("calc-age-slider");
  const ageInput = document.getElementById("calc-age-num");
  const weightSlider = document.getElementById("calc-weight-slider");
  const weightInput = document.getElementById("calc-weight-num");
  const weightUnitToggle = document.getElementById("calc-weight-unit");
  const ageCategoryBadge = document.getElementById("calc-age-category");

  // Output Elements
  const compoundTitle = document.getElementById("calc-out-title");
  const compoundCategory = document.getElementById("calc-out-category");
  const singleDoseOut = document.getElementById("calc-out-dose");
  const scheduleOut = document.getElementById("calc-out-schedule");
  const ceilingOut = document.getElementById("calc-out-ceiling");
  const liquidCard = document.getElementById("calc-out-liquid-card");
  const liquidOut = document.getElementById("calc-out-liquid");
  const liquidDetails = document.getElementById("calc-out-liquid-details");
  const timingOut = document.getElementById("calc-out-timing");
  const brandsOut = document.getElementById("calc-out-brands");
  const formulaExplanation = document.getElementById("calc-out-formula");

  // Populate Salt Dropdown
  const populateSalts = () => {
    if (!saltSelect) return;
    saltSelect.innerHTML = "";
    Object.values(CLINICAL_DATA.salts).forEach(salt => {
      const opt = document.createElement("option");
      opt.value = salt.id;
      opt.textContent = `${salt.saltName} (${salt.therapeuticCategory})`;
      if (salt.id === calcState.saltId) opt.selected = true;
      saltSelect.appendChild(opt);
    });
  };

  const updateAgeCategoryBadge = (age) => {
    if (!ageCategoryBadge) return;
    const t = (k, f = "") => (window.himkivI18n ? window.himkivI18n.t(k, f) : (f || k));
    if (age < 1) {
      ageCategoryBadge.textContent = t("age_cat_infant", "Infant (< 1 yr)");
      ageCategoryBadge.className = "text-xs px-2.5 py-0.5 rounded-full bg-amber-100 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300 font-semibold";
    } else if (age < 12) {
      ageCategoryBadge.textContent = t("age_cat_pediatric", "Pediatric (1 - 11 yrs)");
      ageCategoryBadge.className = "text-xs px-2.5 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 font-semibold";
    } else if (age < 18) {
      ageCategoryBadge.textContent = t("age_cat_adolescent", "Adolescent (12 - 17 yrs)");
      ageCategoryBadge.className = "text-xs px-2.5 py-0.5 rounded-full bg-indigo-100 dark:bg-indigo-950/60 text-indigo-800 dark:text-indigo-300 font-semibold";
    } else if (age < 65) {
      ageCategoryBadge.textContent = t("age_cat_adult", "Adult (18 - 64 yrs)");
      ageCategoryBadge.className = "text-xs px-2.5 py-0.5 rounded-full bg-sky-100 dark:bg-sky-950/60 text-sky-800 dark:text-sky-300 font-semibold";
    } else {
      ageCategoryBadge.textContent = t("age_cat_geriatric", "Geriatric (65+ yrs)");
      ageCategoryBadge.className = "text-xs px-2.5 py-0.5 rounded-full bg-purple-100 dark:bg-purple-950/60 text-purple-800 dark:text-purple-300 font-semibold";
    }
  };

  const recalculate = () => {
    const salt = CLINICAL_DATA.salts[calcState.saltId];
    if (!salt) return;

    const age = calcState.age;
    const weight = calcState.weight;
    const isPediatric = age < 12 || weight < 40;

    updateAgeCategoryBadge(age);

    if (compoundTitle) compoundTitle.textContent = salt.saltName;
    if (compoundCategory) compoundCategory.textContent = `${salt.therapeuticCategory} • ${salt.chemicalClass}`;

    const t = (k, f = "") => (window.himkivI18n ? window.himkivI18n.t(k, f) : (f || k));

    if (isPediatric && salt.pediatricDosing.minMgPerKg > 0) {
      const minDose = Math.round(weight * salt.pediatricDosing.minMgPerKg);
      const maxDose = Math.round(weight * salt.pediatricDosing.maxMgPerKg);
      const max24h = Math.round(weight * salt.pediatricDosing.maxDailyCeilingPerKg);

      if (singleDoseOut) {
        singleDoseOut.innerHTML = minDose === maxDose 
          ? `<strong>${minDose} mg</strong>` 
          : `<strong>${minDose} – ${maxDose} mg</strong>`;
      }
      
      if (scheduleOut) scheduleOut.textContent = salt.pediatricDosing.frequency;
      if (ceilingOut) ceilingOut.innerHTML = `${t("calc_ceiling_label", "24h Safe Maximum:")} <strong>${max24h} mg/day</strong> (${salt.pediatricDosing.maxDailyCeilingPerKg} mg/kg/day)`;

      // Liquid formulation calculation
      if (salt.pediatricDosing.liquidFormulations && salt.pediatricDosing.liquidFormulations.length > 0) {
        const form = salt.pediatricDosing.liquidFormulations[0];
        const ml = Math.round((minDose / form.perMlMg) * 10) / 10;
        if (liquidOut) liquidOut.innerHTML = `${t("calc_administer", "Administer")} <strong>${ml} ml</strong>`;
        if (liquidDetails) liquidDetails.textContent = `Using ${form.name} (${form.strength}, approx. ${form.perMlMg} mg per ml).`;
        if (liquidCard) liquidCard.classList.remove("hidden");
      } else {
        if (liquidCard) liquidCard.classList.add("hidden");
      }

      if (formulaExplanation) {
        formulaExplanation.innerHTML = `Formula: <strong>${salt.pediatricDosing.formulaPerKg}</strong> &times; ${weight} kg = <strong>${minDose} mg</strong> single dose.`;
      }
    } else if (isPediatric && salt.pediatricDosing.minMgPerKg === 0) {
      if (singleDoseOut) singleDoseOut.innerHTML = `<span class="text-sm sm:text-base text-amber-600 dark:text-amber-300 font-semibold">${salt.pediatricDosing.formulaPerKg}</span>`;
      if (scheduleOut) scheduleOut.textContent = salt.pediatricDosing.frequency || "Consult Pediatrician";
      if (ceilingOut) ceilingOut.innerHTML = `<span class="text-amber-700 dark:text-amber-300 text-xs font-medium">${salt.pediatricDosing.clinicalNote}</span>`;
      if (liquidCard) liquidCard.classList.add("hidden");
      if (formulaExplanation) formulaExplanation.innerHTML = `<span class="text-amber-700 dark:text-amber-400 font-medium">${salt.pediatricDosing.clinicalNote}</span>`;
    } else {
      // Adult
      if (singleDoseOut) singleDoseOut.innerHTML = `<strong>${salt.adultDosing.standardSingleDose}</strong>`;
      if (scheduleOut) scheduleOut.textContent = salt.adultDosing.frequency;
      if (ceilingOut) ceilingOut.innerHTML = `24h Ceiling: <strong>${salt.adultDosing.maxDailyCeiling}</strong>`;
      if (liquidCard) liquidCard.classList.add("hidden");
      if (formulaExplanation) formulaExplanation.textContent = "Standard adult clinical dosage. Dose does not require linear mg/kg escalation in adult therapeutic ranges.";
    }

    if (timingOut) timingOut.textContent = salt.administration;

    if (brandsOut) {
      brandsOut.innerHTML = salt.brands.map(b => `
        <div class="px-3 py-1.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs flex items-center gap-2 shadow-2xs">
          <span class="font-bold text-slate-900 dark:text-white">${b.name}</span>
          <span class="text-[10px] text-slate-400 border-l border-slate-200 dark:border-slate-700 pl-1.5">${b.strength} &bull; ${b.company}</span>
        </div>
      `).join("");
    }

    refreshIcons();
  };

  // Event Listeners
  if (saltSelect) {
    saltSelect.addEventListener("change", (e) => {
      calcState.saltId = e.target.value;
      recalculate();
    });
  }

  if (ageSlider && ageInput) {
    ageSlider.addEventListener("input", (e) => {
      calcState.age = parseInt(e.target.value);
      ageInput.value = calcState.age;
      recalculate();
    });
    ageInput.addEventListener("input", (e) => {
      calcState.age = Math.max(0, Math.min(120, parseInt(e.target.value) || 0));
      ageSlider.value = calcState.age;
      recalculate();
    });
  }

  if (weightSlider && weightInput) {
    weightSlider.addEventListener("input", (e) => {
      calcState.weight = parseInt(e.target.value);
      if (calcState.weightUnit === "lbs") {
        weightInput.value = Math.round(calcState.weight * 2.20462 * 10) / 10;
      } else {
        weightInput.value = calcState.weight;
      }
      recalculate();
    });
    weightInput.addEventListener("input", (e) => {
      let val = parseFloat(e.target.value) || 0;
      if (calcState.weightUnit === "lbs") {
        calcState.weight = Math.round((val / 2.20462) * 10) / 10;
      } else {
        calcState.weight = val;
      }
      weightSlider.value = calcState.weight;
      recalculate();
    });
  }

  if (weightUnitToggle) {
    weightUnitToggle.addEventListener("click", () => {
      calcState.weightUnit = calcState.weightUnit === "kg" ? "lbs" : "kg";
      weightUnitToggle.textContent = calcState.weightUnit.toUpperCase();
      if (calcState.weightUnit === "lbs") {
        weightInput.value = Math.round(calcState.weight * 2.20462 * 10) / 10;
      } else {
        weightInput.value = calcState.weight;
      }
    });
  }

  window.addEventListener("himkiv:languageChanged", () => {
    populateSalts();
    recalculate();
  });

  populateSalts();
  recalculate();
});
