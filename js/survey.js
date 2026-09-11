/**
 * HIMKIV Health & MedGuide - Clinical Survey Controller (js/survey.js)
 * Manages 3-step diagnostic assessment, demographic profiling,
 * weight-based posology calculations, allergy cross-checking,
 * URL parameter auto-population, and print report export.
 */

document.addEventListener("DOMContentLoaded", () => {
  // Ensure Clinical Data is loaded
  if (typeof CLINICAL_DATA === "undefined") {
    console.error("Clinical dataset could not be found.");
    return;
  }

  // State Management for Survey
  const state = {
    step: 1,
    selectedDiseaseId: null,
    selectedCategory: "all",
    searchFilter: "",
    age: 28,
    weight: 65,
    weightUnit: "kg",
    gender: "male",
    isPregnant: false,
    allergies: [],
    comorbidities: []
  };

  // Refresh Lucide SVG icons
  const refreshIcons = () => {
    if (typeof lucide !== "undefined" && lucide.createIcons) {
      lucide.createIcons();
    }
  };

  // --------------------------------------------------------------------------
  // Theme Toggle (Dark / Light Mode)
  // --------------------------------------------------------------------------
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

  // --------------------------------------------------------------------------
  // Mobile Navigation Drawer Toggle
  // --------------------------------------------------------------------------
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

  // --------------------------------------------------------------------------
  // Step 1: Render Conditions Grid with Filtering & Category Tabs
  // --------------------------------------------------------------------------
  const diseaseGridContainer = document.getElementById("survey-disease-grid");
  const diseaseSearchInput = document.getElementById("survey-disease-search");
  const categoryTabs = document.querySelectorAll(".survey-cat-tab");
  const step1NextBtn = document.getElementById("survey-step-1-next");

  const renderDiseaseChoices = () => {
    if (!diseaseGridContainer) return;
    diseaseGridContainer.innerHTML = "";

    const query = state.searchFilter.trim().toLowerCase();
    const category = state.selectedCategory;

    const filtered = CLINICAL_DATA.diseases.filter(d => {
      // Category check
      if (category !== "all") {
        const catMap = {
          "general": "General / Infectious",
          "respiratory": ["Respiratory & Allergy", "Respiratory", "Infectious Disease"],
          "gastro": "Gastrointestinal",
          "chronic": ["Endocrinology & Metabolic", "Cardiovascular"],
          "ortho": "Orthopedics & Rheumatology"
        };
        const expected = catMap[category];
        if (Array.isArray(expected)) {
          if (!expected.includes(d.category)) return false;
        } else if (expected && d.category !== expected) {
          return false;
        }
      }

      if (!query) return true;

      const matchName = d.name.toLowerCase().includes(query);
      const matchSymp = d.symptoms.some(s => s.toLowerCase().includes(query));
      const matchCat = d.category.toLowerCase().includes(query);
      const matchDesc = d.description.toLowerCase().includes(query);
      return matchName || matchSymp || matchCat || matchDesc;
    });

    if (filtered.length === 0) {
      diseaseGridContainer.innerHTML = `
        <div class="col-span-full py-12 text-center text-slate-500 dark:text-slate-400">
          <i data-lucide="search-x" class="w-10 h-10 mx-auto mb-3 opacity-50"></i>
          <h4 class="font-heading font-semibold text-slate-700 dark:text-slate-300 text-sm">No clinical conditions found</h4>
          <p class="text-xs text-slate-400 mt-1">Try broader terms like "fever", "cough", "acid", "pain", or clear filters.</p>
        </div>
      `;
      refreshIcons();
      return;
    }

    filtered.forEach(disease => {
      const isSelected = state.selectedDiseaseId === disease.id;
      const card = document.createElement("button");
      card.type = "button";
      card.className = `p-4 sm:p-5 rounded-2xl border text-left transition-all relative flex flex-col justify-between cursor-pointer ${
        isSelected
          ? "border-sky-600 bg-sky-50 dark:bg-sky-950/50 dark:border-sky-400 ring-2 ring-sky-500/25 shadow-md"
          : "border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-sky-300 dark:hover:border-slate-700 shadow-2xs hover:shadow-sm"
      }`;

      card.innerHTML = `
        <div>
          <div class="flex items-start justify-between gap-2 mb-2">
            <span class="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
              ${disease.category}
            </span>
            ${isSelected 
              ? '<span class="text-sky-600 dark:text-sky-400 flex items-center gap-1 text-xs font-bold"><i data-lucide="check-circle-2" class="w-4 h-4"></i> Selected</span>' 
              : '<span class="text-[11px] font-medium text-slate-400">Click to Select</span>'}
          </div>
          
          <h4 class="font-heading font-bold text-slate-900 dark:text-white text-base mb-1.5">${disease.name}</h4>
          <p class="text-xs text-slate-500 dark:text-slate-400 line-clamp-2 mb-3 leading-relaxed">${disease.description}</p>
        </div>

        <div class="mt-auto pt-3 border-t border-slate-100 dark:border-slate-800/80">
          <div class="text-[11px] font-semibold text-slate-400 dark:text-slate-500 mb-1.5 uppercase tracking-wider">Common Clinical Signs:</div>
          <div class="flex flex-wrap gap-1">
            ${disease.symptoms.slice(0, 3).map(s => `
              <span class="text-[11px] bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 px-2 py-0.5 rounded-md border border-slate-200/60 dark:border-slate-700/60">
                ${s}
              </span>
            `).join("")}
            ${disease.symptoms.length > 3 ? `<span class="text-[10px] text-slate-400 self-center pl-1">+${disease.symptoms.length - 3} more</span>` : ''}
          </div>
        </div>
      `;

      card.addEventListener("click", () => {
        state.selectedDiseaseId = disease.id;
        renderDiseaseChoices();
        if (step1NextBtn) {
          step1NextBtn.removeAttribute("disabled");
          step1NextBtn.classList.remove("opacity-50", "cursor-not-allowed");
          step1NextBtn.classList.add("shadow-md", "hover:shadow-lg");
        }
      });

      diseaseGridContainer.appendChild(card);
    });

    refreshIcons();
  };

  if (diseaseSearchInput) {
    diseaseSearchInput.addEventListener("input", (e) => {
      state.searchFilter = e.target.value;
      renderDiseaseChoices();
    });
  }

  categoryTabs.forEach(tab => {
    tab.addEventListener("click", () => {
      categoryTabs.forEach(t => {
        t.classList.remove("bg-sky-600", "text-white", "shadow-sm");
        t.classList.add("bg-white", "dark:bg-slate-900", "text-slate-600", "dark:text-slate-300", "border-slate-200", "dark:border-slate-800");
      });
      tab.classList.remove("bg-white", "dark:bg-slate-900", "text-slate-600", "dark:text-slate-300", "border-slate-200", "dark:border-slate-800");
      tab.classList.add("bg-sky-600", "text-white", "shadow-sm");

      state.selectedCategory = tab.getAttribute("data-category");
      renderDiseaseChoices();
    });
  });

  // Check URL parameters for auto-selection (e.g. survey.html?condition=fever-bodyache)
  const urlParams = new URLSearchParams(window.location.search);
  const conditionParam = urlParams.get("condition");
  if (conditionParam && CLINICAL_DATA.diseases.some(d => d.id === conditionParam)) {
    state.selectedDiseaseId = conditionParam;
    if (step1NextBtn) {
      step1NextBtn.removeAttribute("disabled");
      step1NextBtn.classList.remove("opacity-50", "cursor-not-allowed");
    }
  }

  // --------------------------------------------------------------------------
  // Step Navigation Engine
  // --------------------------------------------------------------------------
  const surveySteps = document.querySelectorAll(".survey-step");
  const stepIndicators = document.querySelectorAll(".survey-progress-step");

  const setSurveyStep = (stepNumber) => {
    state.step = stepNumber;
    surveySteps.forEach((el, idx) => {
      if (idx + 1 === stepNumber) {
        el.classList.remove("hidden");
      } else {
        el.classList.add("hidden");
      }
    });

    stepIndicators.forEach((ind, idx) => {
      const circle = ind.querySelector(".step-circle");
      const label = ind.querySelector(".step-label");
      if (idx + 1 === stepNumber) {
        circle.className = "step-circle w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm bg-sky-600 text-white shadow-md ring-4 ring-sky-100 dark:ring-sky-950";
        label.className = "step-label text-xs font-semibold text-sky-600 dark:text-sky-400 mt-1 hidden sm:block";
      } else if (idx + 1 < stepNumber) {
        circle.className = "step-circle w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm bg-emerald-600 text-white";
        circle.innerHTML = '<i data-lucide="check" class="w-4 h-4"></i>';
        label.className = "step-label text-xs font-medium text-emerald-600 dark:text-emerald-400 mt-1 hidden sm:block";
      } else {
        circle.className = "step-circle w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm bg-slate-200 dark:bg-slate-800 text-slate-500 dark:text-slate-400";
        circle.innerText = idx + 1;
        label.className = "step-label text-xs font-medium text-slate-400 dark:text-slate-500 mt-1 hidden sm:block";
      }
    });

    if (stepNumber === 3) {
      calculateAndRenderResults();
    }

    // Scroll smoothly to top of survey container
    const surveyContainer = document.getElementById("survey-main-container");
    if (surveyContainer) {
      surveyContainer.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    refreshIcons();
  };

  if (step1NextBtn) {
    step1NextBtn.addEventListener("click", () => {
      if (state.selectedDiseaseId) {
        setSurveyStep(2);
      }
    });
  }

  // --------------------------------------------------------------------------
  // Step 2: Patient Demographics & Vitals Bindings
  // --------------------------------------------------------------------------
  const ageInput = document.getElementById("survey-age-input");
  const weightInput = document.getElementById("survey-weight-input");
  const weightUnitToggle = document.getElementById("weight-unit-toggle");
  const genderInputs = document.querySelectorAll('input[name="survey-gender"]');
  const pregnantField = document.getElementById("pregnancy-field");
  const pregnantCheckbox = document.getElementById("survey-pregnant-check");

  const updateAgeBadge = (age) => {
    const badge = document.getElementById("age-classification-badge");
    if (!badge) return;
    if (age < 1) {
      badge.textContent = "Infant (< 1 yr)";
      badge.className = "text-xs px-2.5 py-0.5 rounded-full bg-amber-100 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300 font-semibold";
    } else if (age < 12) {
      badge.textContent = "Pediatric (1 - 11 yrs)";
      badge.className = "text-xs px-2.5 py-0.5 rounded-full bg-sky-100 dark:bg-sky-950/60 text-sky-800 dark:text-sky-300 font-semibold";
    } else if (age < 18) {
      badge.textContent = "Adolescent (12 - 17 yrs)";
      badge.className = "text-xs px-2.5 py-0.5 rounded-full bg-indigo-100 dark:bg-indigo-950/60 text-indigo-800 dark:text-indigo-300 font-semibold";
    } else if (age < 65) {
      badge.textContent = "Adult (18 - 64 yrs)";
      badge.className = "text-xs px-2.5 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 font-semibold";
    } else {
      badge.textContent = "Geriatric (65+ yrs)";
      badge.className = "text-xs px-2.5 py-0.5 rounded-full bg-purple-100 dark:bg-purple-950/60 text-purple-800 dark:text-purple-300 font-semibold";
    }
  };

  if (ageInput) {
    ageInput.addEventListener("input", (e) => {
      state.age = parseFloat(e.target.value) || 0;
      updateAgeBadge(state.age);
      checkPregnancyFieldVisibility();
    });
  }

  if (weightInput) {
    weightInput.addEventListener("input", (e) => {
      let val = parseFloat(e.target.value) || 0;
      if (state.weightUnit === "lbs") {
        state.weight = Math.round((val / 2.20462) * 10) / 10;
      } else {
        state.weight = val;
      }
    });
  }

  if (weightUnitToggle) {
    weightUnitToggle.addEventListener("click", () => {
      const currentUnit = state.weightUnit;
      const newUnit = currentUnit === "kg" ? "lbs" : "kg";
      state.weightUnit = newUnit;
      weightUnitToggle.textContent = newUnit.toUpperCase();

      if (weightInput) {
        if (newUnit === "lbs") {
          weightInput.value = Math.round(state.weight * 2.20462 * 10) / 10;
        } else {
          weightInput.value = state.weight;
        }
      }
    });
  }

  const checkPregnancyFieldVisibility = () => {
    if (!pregnantField) return;
    if (state.gender === "female" && state.age >= 15 && state.age <= 50) {
      pregnantField.classList.remove("hidden");
    } else {
      pregnantField.classList.add("hidden");
      state.isPregnant = false;
      if (pregnantCheckbox) pregnantCheckbox.checked = false;
    }
  };

  genderInputs.forEach(input => {
    input.addEventListener("change", (e) => {
      state.gender = e.target.value;
      checkPregnancyFieldVisibility();
    });
  });

  if (pregnantCheckbox) {
    pregnantCheckbox.addEventListener("change", (e) => {
      state.isPregnant = e.target.checked;
    });
  }

  // Allergy Checkboxes
  const allergyCheckboxes = document.querySelectorAll('input[name="survey-allergy"]');
  allergyCheckboxes.forEach(cb => {
    cb.addEventListener("change", () => {
      state.allergies = Array.from(allergyCheckboxes)
        .filter(c => c.checked)
        .map(c => c.value);
    });
  });

  // Comorbidity Checkboxes
  const comorbCheckboxes = document.querySelectorAll('input[name="survey-comorbidity"]');
  comorbCheckboxes.forEach(cb => {
    cb.addEventListener("change", () => {
      state.comorbidities = Array.from(comorbCheckboxes)
        .filter(c => c.checked)
        .map(c => c.value);
    });
  });

  // Step 2 Navigation Buttons
  const step2BackBtn = document.getElementById("survey-step-2-back");
  const step2NextBtn = document.getElementById("survey-step-2-next");

  if (step2BackBtn) {
    step2BackBtn.addEventListener("click", () => setSurveyStep(1));
  }

  if (step2NextBtn) {
    step2NextBtn.addEventListener("click", () => {
      const age = state.age;
      const weight = state.weight;
      if (age < 0 || age > 125 || isNaN(age)) {
        alert("Please provide a valid patient age between 0 and 125 years.");
        return;
      }
      if (weight < 2 || weight > 250 || isNaN(weight)) {
        alert("Please provide a realistic body weight between 2 kg and 250 kg.");
        return;
      }
      setSurveyStep(3);
    });
  }

  // Step 3 Actions (Back, Restart, Print)
  const step3BackBtn = document.getElementById("survey-step-3-back");
  const step3RestartBtn = document.getElementById("survey-step-3-restart");
  const printReportBtn = document.getElementById("survey-print-report-btn");

  if (step3BackBtn) {
    step3BackBtn.addEventListener("click", () => setSurveyStep(2));
  }
  if (step3RestartBtn) {
    step3RestartBtn.addEventListener("click", () => {
      state.step = 1;
      state.selectedDiseaseId = null;
      renderDiseaseChoices();
      if (step1NextBtn) {
        step1NextBtn.setAttribute("disabled", "true");
        step1NextBtn.classList.add("opacity-50", "cursor-not-allowed");
      }
      setSurveyStep(1);
    });
  }
  if (printReportBtn) {
    printReportBtn.addEventListener("click", () => {
      window.print();
    });
  }

  // --------------------------------------------------------------------------
  // Step 3: Pharmacological Posology Calculation Algorithm
  // --------------------------------------------------------------------------
  const calculateAndRenderResults = () => {
    const resultsContainer = document.getElementById("survey-results-content");
    if (!resultsContainer) return;

    const disease = CLINICAL_DATA.diseases.find(d => d.id === state.selectedDiseaseId);
    if (!disease) return;

    const age = state.age;
    const weight = state.weight;
    const isPediatric = age < 12 || weight < 40;
    const isGeriatric = age >= 65;
    const allergies = state.allergies;
    const comorbidities = state.comorbidities;
    const isPregnant = state.isPregnant;

    const recommendedSalts = disease.firstLineSalts
      .map(saltId => CLINICAL_DATA.salts[saltId])
      .filter(Boolean);

    let html = `
      <!-- Assessment Profile Summary Banner -->
      <div class="bg-gradient-to-r from-sky-900 to-slate-900 text-white p-6 rounded-3xl mb-8 shadow-md">
        <div class="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div class="flex items-center gap-2 mb-1.5">
              <span class="px-2.5 py-0.5 rounded-full bg-sky-500/25 text-sky-200 border border-sky-400/30 text-xs font-bold">
                Clinical Prescription Summary
              </span>
              <span class="text-xs text-slate-300">Target Condition:</span>
            </div>
            <h3 class="text-2xl sm:text-3xl font-heading font-extrabold text-white">${disease.name}</h3>
            <p class="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl leading-relaxed">${disease.description}</p>
          </div>
          
          <div class="flex items-center gap-4 bg-white/10 backdrop-blur-md px-5 py-3.5 rounded-2xl border border-white/10 text-xs shrink-0 self-start md:self-auto">
            <div>
              <span class="text-slate-400 block text-[10px] uppercase tracking-wider font-semibold">Patient Profile</span>
              <span class="font-bold text-white text-sm sm:text-base">${age} yrs &bull; ${weight} kg</span>
            </div>
            <div class="h-8 w-px bg-white/20"></div>
            <div>
              <span class="text-slate-400 block text-[10px] uppercase tracking-wider font-semibold">Class</span>
              <span class="font-bold text-sky-300 text-sm sm:text-base">${isPediatric ? "Pediatric" : isGeriatric ? "Geriatric" : "Adult"}</span>
            </div>
          </div>
        </div>

        ${isPregnant ? `
          <div class="mt-4 p-3.5 rounded-xl bg-amber-500/20 border border-amber-400/40 text-amber-200 text-xs flex items-center gap-2.5">
            <i data-lucide="alert-triangle" class="w-4 h-4 shrink-0 text-amber-400"></i>
            <span><strong>Pregnancy Protocol Active:</strong> Strict fetal safety criteria applied. NSAIDs and ARBs are contraindicated; only Category B/safe antipyretics are authorized.</span>
          </div>
        ` : ''}

        ${allergies.length > 0 && !allergies.includes("none") ? `
          <div class="mt-2.5 p-3.5 rounded-xl bg-rose-500/20 border border-rose-400/40 text-rose-200 text-xs flex items-center gap-2.5">
            <i data-lucide="shield-alert" class="w-4 h-4 shrink-0 text-rose-400"></i>
            <span><strong>Allergy Watchlist:</strong> Patient flagged hypersensitivity to: <strong>${allergies.join(", ").toUpperCase()}</strong>. Safe alternatives evaluated below.</span>
          </div>
        ` : ''}
      </div>

      <!-- Drug Salts Posology Breakdown -->
      <div class="mb-10">
        <div class="flex items-center justify-between mb-5">
          <div>
            <h4 class="text-lg sm:text-xl font-heading font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <i data-lucide="pill" class="w-5 h-5 text-sky-600 dark:text-sky-400"></i>
              Calculated Drug Salts & Dosage Regimens
            </h4>
            <p class="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              Calculated according to pharmacokinetic reference standards for ${weight} kg body mass.
            </p>
          </div>
          <span class="text-xs font-semibold px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 shrink-0">
            ${recommendedSalts.length} Pharmacological Compounds
          </span>
        </div>

        <div class="space-y-5">
    `;

    // Process each salt
    recommendedSalts.forEach(salt => {
      let hasAllergyConflict = false;
      let conflictReason = "";

      if (allergies.includes("penicillin") && (salt.allergyClass.includes("Penicillin") || salt.allergyClass.includes("Cephalosporin"))) {
        hasAllergyConflict = true;
        conflictReason = "Patient has declared Penicillin hypersensitivity. High risk of anaphylactoid reaction with beta-lactams.";
      }
      if (allergies.includes("nsaid") && salt.allergyClass.includes("NSAID")) {
        hasAllergyConflict = true;
        conflictReason = "Patient has NSAID allergy. Contraindicated due to bronchospasm / severe urticaria risk.";
      }
      if (allergies.includes("sulfa") && salt.allergyClass.includes("Sulfa")) {
        hasAllergyConflict = true;
        conflictReason = "Patient has Sulfa hypersensitivity.";
      }
      if (allergies.includes("macrolide") && salt.allergyClass.includes("Macrolide")) {
        hasAllergyConflict = true;
        conflictReason = "Patient has Macrolide hypersensitivity.";
      }

      let pregnancyContraindicated = false;
      if (isPregnant && (salt.id === "ibuprofen" || salt.id === "telmisartan" || salt.id === "ciprofloxacin" || salt.id === "diclofenac-chlorzoxazone")) {
        pregnancyContraindicated = true;
      }

      let comorbidityCautions = [];
      if (comorbidities.includes("liver") && (salt.id === "paracetamol" || salt.id === "diclofenac-chlorzoxazone")) {
        comorbidityCautions.push("Liver Disease Caution: Hepatic metabolism reduced. Paracetamol daily ceiling capped at 2000mg.");
      }
      if (comorbidities.includes("kidney") && (salt.id === "ibuprofen" || salt.id === "metformin" || salt.id === "diclofenac-chlorzoxazone")) {
        comorbidityCautions.push("Renal Impairment: Nephrotoxic risk. NSAIDs should be avoided; hydration critical.");
      }
      if (comorbidities.includes("ulcer") && (salt.id === "ibuprofen" || salt.id === "diclofenac-chlorzoxazone")) {
        comorbidityCautions.push("Peptic Ulcer Warning: High mucosal erosion risk. Combine with proton pump inhibitors if unavoidable.");
      }

      let calculatedDoseText = "";
      let calculatedVolumeText = "";
      let frequencyText = "";
      let maxThresholdText = "";

      if (isPediatric && salt.pediatricDosing.minMgPerKg > 0) {
        const minSingleMg = Math.round(weight * salt.pediatricDosing.minMgPerKg);
        const maxSingleMg = Math.round(weight * salt.pediatricDosing.maxMgPerKg);
        
        calculatedDoseText = minSingleMg === maxSingleMg 
          ? `<strong>${minSingleMg} mg</strong> per dose`
          : `<strong>${minSingleMg} – ${maxSingleMg} mg</strong> per dose`;
        
        frequencyText = salt.pediatricDosing.frequency;
        const maxDaily = Math.round(weight * salt.pediatricDosing.maxDailyCeilingPerKg);
        maxThresholdText = `Max safe 24-hr threshold: <strong>${maxDaily} mg/day</strong>`;

        if (salt.pediatricDosing.liquidFormulations && salt.pediatricDosing.liquidFormulations.length > 0) {
          const preferredLiquid = salt.pediatricDosing.liquidFormulations[0];
          if (preferredLiquid.perMlMg > 0) {
            const mlNeeded = Math.round((minSingleMg / preferredLiquid.perMlMg) * 10) / 10;
            calculatedVolumeText = `Liquid measure: <strong>${mlNeeded} ml</strong> of ${preferredLiquid.name} (${preferredLiquid.strength})`;
          }
        }
      } else if (isPediatric && salt.pediatricDosing.minMgPerKg === 0) {
        calculatedDoseText = `<span class="text-amber-600 dark:text-amber-400 font-medium">${salt.pediatricDosing.formulaPerKg}</span>`;
        frequencyText = salt.pediatricDosing.frequency || "Under specialist supervision";
        maxThresholdText = salt.pediatricDosing.clinicalNote;
      } else {
        calculatedDoseText = `<strong>${salt.adultDosing.standardSingleDose}</strong>`;
        frequencyText = salt.adultDosing.frequency;
        maxThresholdText = `24-hr Ceiling: <strong>${salt.adultDosing.maxDailyCeiling}</strong>`;
      }

      html += `
        <div class="border rounded-3xl p-5 sm:p-6 transition-all ${
          hasAllergyConflict || pregnancyContraindicated
            ? "border-rose-300 dark:border-rose-900/60 bg-rose-50/50 dark:bg-rose-950/20"
            : "border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm"
        }">
          <div class="flex flex-col md:flex-row md:items-start justify-between gap-3 mb-4">
            <div>
              <div class="flex flex-wrap items-center gap-2 mb-1.5">
                <span class="text-xs font-bold px-2.5 py-0.5 rounded-full bg-sky-100 dark:bg-sky-950/80 text-sky-800 dark:text-sky-300">
                  ${salt.therapeuticCategory}
                </span>
                <span class="text-xs text-slate-500 dark:text-slate-400">
                  Class: ${salt.chemicalClass}
                </span>
                ${hasAllergyConflict ? '<span class="text-xs font-bold px-2 py-0.5 rounded-full bg-rose-600 text-white flex items-center gap-1"><i data-lucide="shield-alert" class="w-3.5 h-3.5"></i> ALLERGY CONFLICT</span>' : ''}
                ${pregnancyContraindicated ? '<span class="text-xs font-bold px-2 py-0.5 rounded-full bg-rose-600 text-white flex items-center gap-1"><i data-lucide="alert-octagon" class="w-3.5 h-3.5"></i> PREGNANCY CONTRAINDICATION</span>' : ''}
              </div>
              <h5 class="text-xl sm:text-2xl font-heading font-bold text-slate-900 dark:text-white">${salt.saltName}</h5>
            </div>

            <button type="button" class="view-salt-deepdive-btn text-xs font-semibold text-sky-600 dark:text-sky-400 hover:text-sky-700 dark:hover:text-sky-300 flex items-center gap-1 self-start py-1.5 px-3.5 rounded-xl border border-sky-200 dark:border-sky-800 hover:bg-sky-50 dark:hover:bg-sky-950/50 transition-colors" data-salt-id="${salt.id}">
              <i data-lucide="book-open" class="w-4 h-4"></i> Full Monograph
            </button>
          </div>

          ${hasAllergyConflict ? `
            <div class="mb-4 p-3.5 rounded-xl bg-rose-100 dark:bg-rose-900/40 text-rose-900 dark:text-rose-200 text-xs flex items-start gap-2.5">
              <i data-lucide="alert-circle" class="w-4 h-4 shrink-0 text-rose-600 mt-0.5"></i>
              <div>
                <strong>Hypersensitivity Warning:</strong> ${conflictReason}
                <span class="block mt-0.5 font-medium text-rose-800 dark:text-rose-300">Consult your physician to use non-penicillin alternatives (e.g. Azithromycin).</span>
              </div>
            </div>
          ` : ''}

          ${pregnancyContraindicated ? `
            <div class="mb-4 p-3.5 rounded-xl bg-rose-100 dark:bg-rose-900/40 text-rose-900 dark:text-rose-200 text-xs flex items-start gap-2.5">
              <i data-lucide="alert-circle" class="w-4 h-4 shrink-0 text-rose-600 mt-0.5"></i>
              <div>
                <strong>Contraindicated in Pregnancy:</strong> This compound presents significant risk of fetal harm. Do not administer without specialist obstetric authorization.
              </div>
            </div>
          ` : ''}

          <!-- Posology Grid -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-3.5 p-4 sm:p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800 mb-4 text-xs">
            <div>
              <span class="text-slate-400 dark:text-slate-500 block font-semibold uppercase text-[10px] tracking-wider mb-1">Calculated Single Dose</span>
              <div class="text-sm sm:text-base text-slate-800 dark:text-slate-100">${calculatedDoseText}</div>
              ${calculatedVolumeText ? `<div class="text-sky-600 dark:text-sky-400 font-semibold text-xs mt-1">${calculatedVolumeText}</div>` : ''}
            </div>
            <div>
              <span class="text-slate-400 dark:text-slate-500 block font-semibold uppercase text-[10px] tracking-wider mb-1">Dosing Schedule & Timing</span>
              <div class="text-xs sm:text-sm text-slate-800 dark:text-slate-100 font-medium">${frequencyText}</div>
              <div class="text-[11px] text-slate-500 dark:text-slate-400 mt-1">${salt.administration}</div>
            </div>
            <div>
              <span class="text-slate-400 dark:text-slate-500 block font-semibold uppercase text-[10px] tracking-wider mb-1">Safety Thresholds</span>
              <div class="text-xs text-slate-700 dark:text-slate-300">${maxThresholdText}</div>
              ${isGeriatric ? `<div class="text-purple-600 dark:text-purple-400 font-medium text-[11px] mt-1">${salt.adultDosing.elderlyRenalAdjustment}</div>` : ''}
            </div>
          </div>

          ${comorbidityCautions.length > 0 ? `
            <div class="mb-4 space-y-1.5">
              ${comorbidityCautions.map(c => `
                <div class="p-2.5 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800/60 text-amber-800 dark:text-amber-200 text-xs flex items-center gap-2">
                  <i data-lucide="alert-triangle" class="w-4 h-4 shrink-0 text-amber-600"></i>
                  <span>${c}</span>
                </div>
              `).join("")}
            </div>
          ` : ''}

          <!-- Commercial Pharmacy Brands -->
          <div>
            <span class="text-slate-400 dark:text-slate-500 block text-[11px] font-semibold uppercase tracking-wider mb-2">
              Common Commercial Pharmacy Brands Containing This Salt:
            </span>
            <div class="flex flex-wrap gap-2">
              ${salt.brands.map(b => `
                <div class="px-3 py-1.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs flex items-center gap-2 shadow-2xs">
                  <span class="font-bold text-slate-900 dark:text-white">${b.name}</span>
                  <span class="text-[10px] text-slate-400 border-l border-slate-200 dark:border-slate-700 pl-2">${b.strength} &bull; ${b.company}</span>
                </div>
              `).join("")}
            </div>
          </div>
        </div>
      `;
    });

    html += `
        </div>
      </div>

      <!-- Red Flag Warnings & Lifestyle Guidance -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        <div class="p-6 rounded-3xl border border-rose-200 dark:border-rose-900/50 bg-rose-50/40 dark:bg-rose-950/20">
          <h4 class="font-heading font-bold text-rose-700 dark:text-rose-400 text-sm sm:text-base flex items-center gap-2 mb-3">
            <i data-lucide="alert-octagon" class="w-5 h-5"></i> Red Flag Symptoms (Seek Emergency ER Immediately)
          </h4>
          <ul class="space-y-2.5 text-xs text-rose-900 dark:text-rose-200">
            ${disease.emergencyFlags.map(flag => `
              <li class="flex items-start gap-2">
                <span class="w-1.5 h-1.5 rounded-full bg-rose-500 mt-1.5 shrink-0"></span>
                <span>${flag}</span>
              </li>
            `).join("")}
          </ul>
        </div>

        <div class="p-6 rounded-3xl border border-emerald-200 dark:border-emerald-900/50 bg-emerald-50/40 dark:bg-emerald-950/20">
          <h4 class="font-heading font-bold text-emerald-700 dark:text-emerald-400 text-sm sm:text-base flex items-center gap-2 mb-3">
            <i data-lucide="heart-pulse" class="w-5 h-5"></i> Clinical Self-Care & Hydration Protocol
          </h4>
          <p class="text-xs text-emerald-900 dark:text-emerald-200 leading-relaxed mb-3">
            ${disease.lifestyleGuidance}
          </p>
          <div class="pt-3 border-t border-emerald-200 dark:border-emerald-900/40 text-[11px] text-emerald-800 dark:text-emerald-300 font-medium">
            Note: All dosages provide symptomatic relief. If fever or acute symptoms persist over 48 hours, seek certified in-person diagnostic evaluation.
          </div>
        </div>
      </div>
    `;

    resultsContainer.innerHTML = html;

    // Attach deepdive buttons
    document.querySelectorAll(".view-salt-deepdive-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        const saltId = btn.getAttribute("data-salt-id");
        openSaltModal(saltId);
      });
    });

    refreshIcons();
  };

  // --------------------------------------------------------------------------
  // Monograph Modal Support on Survey Page
  // --------------------------------------------------------------------------
  const saltModal = document.getElementById("salt-detail-modal");
  const modalCloseBtn = document.getElementById("modal-close-btn");
  const modalContentContainer = document.getElementById("modal-dynamic-content");

  const openSaltModal = (saltId) => {
    const salt = CLINICAL_DATA.salts[saltId];
    if (!salt || !saltModal || !modalContentContainer) return;

    let brandsHtml = salt.brands.map(b => `
      <div class="p-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 flex items-center justify-between">
        <div>
          <span class="font-heading font-bold text-slate-900 dark:text-white text-sm">${b.name}</span>
          <span class="text-xs text-slate-500 dark:text-slate-400 block">${b.company}</span>
        </div>
        <span class="text-xs px-2 py-0.5 rounded bg-sky-50 dark:bg-sky-950/80 text-sky-700 dark:text-sky-300 font-mono font-medium">
          ${b.strength}
        </span>
      </div>
    `).join("");

    let indicationsHtml = salt.indications.map(ind => `
      <li class="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
        <i data-lucide="check-circle" class="w-4 h-4 text-emerald-500 shrink-0 mt-0.5"></i>
        <span>${ind}</span>
      </li>
    `).join("");

    modalContentContainer.innerHTML = `
      <div class="mb-5">
        <div class="flex flex-wrap items-center gap-2 mb-2">
          <span class="text-xs font-bold px-2.5 py-0.5 rounded-full bg-sky-100 dark:bg-sky-950/80 text-sky-800 dark:text-sky-300">
            ${salt.therapeuticCategory}
          </span>
          <span class="text-xs text-slate-500 dark:text-slate-400">Class: ${salt.chemicalClass}</span>
        </div>
        <h3 class="text-2xl font-heading font-bold text-slate-900 dark:text-white">${salt.saltName}</h3>
      </div>

      <div class="mb-5">
        <h4 class="text-xs font-heading font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-2 flex items-center gap-2">
          <i data-lucide="stethoscope" class="w-4 h-4 text-sky-600"></i> Indications (What it is used for):
        </h4>
        <ul class="space-y-1.5 bg-slate-50 dark:bg-slate-800/40 p-3.5 rounded-xl border border-slate-200 dark:border-slate-800">
          ${indicationsHtml}
        </ul>
      </div>

      <div class="mb-5">
        <h4 class="text-xs font-heading font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-2 flex items-center gap-2">
          <i data-lucide="activity" class="w-4 h-4 text-emerald-600"></i> Mechanism of Action:
        </h4>
        <div class="text-xs text-slate-700 dark:text-slate-300 leading-relaxed bg-slate-50 dark:bg-slate-800/40 p-3.5 rounded-xl border border-slate-200 dark:border-slate-800">
          ${salt.mechanism}
        </div>
      </div>

      <div class="mb-5">
        <h4 class="text-xs font-heading font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-2 flex items-center gap-2">
          <i data-lucide="building-2" class="w-4 h-4 text-indigo-600"></i> Commercial Brands:
        </h4>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
          ${brandsHtml}
        </div>
      </div>
    `;

    saltModal.classList.remove("hidden");
    document.body.style.overflow = "hidden";
    refreshIcons();
  };

  const closeSaltModal = () => {
    if (!saltModal) return;
    saltModal.classList.add("hidden");
    document.body.style.overflow = "";
  };

  if (modalCloseBtn) modalCloseBtn.addEventListener("click", closeSaltModal);
  if (saltModal) {
    saltModal.addEventListener("click", (e) => {
      if (e.target === saltModal) closeSaltModal();
    });
  }
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && saltModal && !saltModal.classList.contains("hidden")) {
      closeSaltModal();
    }
  });

  // Initial bootstrap
  renderDiseaseChoices();
  updateAgeBadge(state.age);
  refreshIcons();
});
