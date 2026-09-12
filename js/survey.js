/**
 * HIMKIV Health & MedGuide - Clinical Survey Controller (js/survey.js)
 * Manages 3-step clinical reference intake, condition discovery,
 * dynamic category tabs, 6-item incremental pagination, vitals,
 * allergies cross-checking, and educational posology report.
 * Integrates HKare Reference Dataset (120 conditions, 18 categories).
 */

document.addEventListener("DOMContentLoaded", () => {
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
    currentPageLimit: 6,
    itemsPerPage: 6,
    severity: "moderate",
    duration: "1-3-days",
    selectedSymptoms: [],
    age: 28,
    weight: 65,
    weightUnit: "kg",
    gender: "male",
    isPregnant: false,
    allergies: [],
    comorbidities: []
  };

  const refreshIcons = () => {
    if (typeof lucide !== "undefined" && lucide.createIcons) {
      lucide.createIcons();
    }
  };

  const t = (k, f = "") => (window.himkivI18n ? window.himkivI18n.t(k, f) : (f || k));

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
  // Step 1: Render Conditions Grid with Filtering & Dynamic Category Tabs
  // --------------------------------------------------------------------------
  const diseaseGridContainer = document.getElementById("survey-disease-grid");
  const diseaseSearchInput = document.getElementById("survey-disease-search");
  const categoryTabsContainer = document.getElementById("survey-category-tabs");
  const countLabel = document.getElementById("survey-count-label");
  const showMoreBtn = document.getElementById("survey-show-more-btn");
  const step1NextBtn = document.getElementById("survey-step-1-next");

  // Dynamic Category Tabs Population
  const renderCategoryTabs = () => {
    if (!categoryTabsContainer) return;
    const categories = CLINICAL_DATA.categories || [];
    if (categories.length === 0) return;

    categoryTabsContainer.innerHTML = "";

    categories.forEach(cat => {
      const isSel = state.selectedCategory === cat.id;
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = `survey-cat-tab touch-target px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
        isSel
          ? "bg-sky-600 text-white shadow-xs"
          : "bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:border-sky-400"
      }`;
      btn.setAttribute("data-category", cat.id);
      if (cat.i18nKey) {
        btn.setAttribute("data-i18n", cat.i18nKey);
      }
      btn.textContent = t(cat.i18nKey, cat.name);

      btn.addEventListener("click", () => {
        state.selectedCategory = cat.id;
        state.currentPageLimit = 6;
        renderCategoryTabs();
        renderDiseaseChoices();
      });

      categoryTabsContainer.appendChild(btn);
    });
  };

  const renderDiseaseChoices = () => {
    if (!diseaseGridContainer) return;
    diseaseGridContainer.innerHTML = "";

    const query = state.searchFilter.trim().toLowerCase();
    const category = state.selectedCategory;
    const allDiseases = CLINICAL_DATA.diseases || [];

    // Filter by Category
    let filtered = allDiseases.filter(d => {
      if (category === "all") return true;
      const dCatSlug = (d.categorySlug || d.categoryId || "").toLowerCase();
      const dCat = (d.category || "").toLowerCase();
      return dCatSlug === category || dCat === category;
    });

    // Search Query Filter
    if (query) {
      filtered = filtered.filter(d => {
        const matchName = (d.name || "").toLowerCase().includes(query);
        const matchIcd = (d.icd11Code || "").toLowerCase().includes(query);
        const matchSymp = (d.symptoms || []).some(s => s.toLowerCase().includes(query));
        const matchCat = (d.category || "").toLowerCase().includes(query);
        const matchDesc = (d.description || "").toLowerCase().includes(query);
        return matchName || matchIcd || matchSymp || matchCat || matchDesc;
      });
    }

    const totalMatches = filtered.length;
    const visibleList = filtered.slice(0, state.currentPageLimit);

    // Update Pagination Count and Button
    if (countLabel) {
      countLabel.textContent = `${t("med_showing", "Showing")} ${visibleList.length} ${t("med_of", "of")} ${totalMatches} ${t("conditions_label", "conditions")}`;
    }

    if (showMoreBtn) {
      if (state.currentPageLimit < totalMatches) {
        showMoreBtn.classList.remove("hidden");
        showMoreBtn.style.display = "inline-flex";
      } else {
        showMoreBtn.classList.add("hidden");
        showMoreBtn.style.display = "none";
      }
    }

    if (totalMatches === 0) {
      diseaseGridContainer.innerHTML = `
        <div class="col-span-full py-12 text-center text-slate-500 dark:text-slate-400">
          <i data-lucide="search-x" class="w-10 h-10 mx-auto mb-3 opacity-50 text-slate-400"></i>
          <h4 class="font-heading font-semibold text-slate-700 dark:text-slate-300 text-sm">${t("no_conditions_found", "No clinical conditions found")}</h4>
          <p class="text-xs text-slate-400 mt-1">${t("no_conditions_desc", "Try searching broader symptoms like 'fever', 'cough', 'pain', or reset category filters.")}</p>
        </div>
      `;
      refreshIcons();
      return;
    }

    visibleList.forEach(disease => {
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
            <div class="flex flex-wrap items-center gap-1.5">
              <span class="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-sky-100 dark:bg-sky-950 text-sky-700 dark:text-sky-300 border border-sky-200 dark:border-sky-800">
                ICD-11: ${disease.icd11Code || "WHO"}
              </span>
              <span class="text-[10px] text-slate-500 dark:text-slate-400 font-medium px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800">
                ${disease.category}
              </span>
            </div>
            ${isSelected 
              ? `<span class="text-sky-600 dark:text-sky-400 flex items-center gap-1 text-xs font-bold shrink-0"><i data-lucide="check-circle-2" class="w-4 h-4"></i> ${t("btn_selected", "Selected")}</span>` 
              : `<span class="text-[11px] font-medium text-slate-400 shrink-0">${t("btn_click_to_select", "Click to Select")}</span>`}
          </div>
          
          <h4 class="font-heading font-bold text-slate-900 dark:text-white text-base mb-1.5">${disease.name}</h4>
          <p class="text-xs text-slate-500 dark:text-slate-400 line-clamp-2 mb-3 leading-relaxed">${disease.description}</p>
        </div>

        <div class="mt-auto pt-3 border-t border-slate-100 dark:border-slate-800/80">
          <div class="flex items-center justify-between mb-1.5 text-[11px]">
            <span class="font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider">${t("clinical_signs_label", "Clinical Signs:")}</span>
            ${disease.emergencyFlags && disease.emergencyFlags.length > 0 
              ? `<span class="text-rose-600 dark:text-rose-400 font-bold text-[10px] flex items-center gap-1"><i data-lucide="alert-triangle" class="w-3 h-3"></i> ${t("emergency_flags_label", "Emergency Flags")}</span>` 
              : ''}
          </div>
          <div class="flex flex-wrap gap-1">
            ${(disease.symptoms || []).slice(0, 3).map(s => `
              <span class="text-[11px] bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 px-2 py-0.5 rounded-md border border-slate-200/60 dark:border-slate-700/60">
                ${s}
              </span>
            `).join("")}
            ${(disease.symptoms || []).length > 3 ? `<span class="text-[10px] text-slate-400 self-center pl-1">+${disease.symptoms.length - 3} more</span>` : ''}
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

  // Search input listener
  if (diseaseSearchInput) {
    diseaseSearchInput.addEventListener("input", (e) => {
      state.searchFilter = e.target.value;
      state.currentPageLimit = 6;
      renderDiseaseChoices();
    });
  }

  // Show More (+6) button listener
  if (showMoreBtn) {
    showMoreBtn.addEventListener("click", () => {
      state.currentPageLimit += 6;
      renderDiseaseChoices();
    });
  }

  // Check URL parameters for auto-selection (e.g. survey.html?condition=influenza)
  const urlParams = new URLSearchParams(window.location.search);
  const conditionParam = urlParams.get("condition");
  if (conditionParam && (CLINICAL_DATA.diseases || []).some(d => d.id === conditionParam)) {
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

    if (stepNumber === 2) {
      populateStep2ConditionData();
    }

    if (stepNumber === 3) {
      calculateAndRenderResults();
    }

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
      badge.textContent = t("age_cat_infant", "Infant (< 1 yr)");
      badge.className = "text-xs px-2.5 py-0.5 rounded-full bg-amber-100 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300 font-semibold";
    } else if (age < 12) {
      badge.textContent = t("age_cat_pediatric", "Pediatric (1 - 11 yrs)");
      badge.className = "text-xs px-2.5 py-0.5 rounded-full bg-sky-100 dark:bg-sky-950/60 text-sky-800 dark:text-sky-300 font-semibold";
    } else if (age < 18) {
      badge.textContent = t("age_cat_adolescent", "Adolescent (12 - 17 yrs)");
      badge.className = "text-xs px-2.5 py-0.5 rounded-full bg-indigo-100 dark:bg-indigo-950/60 text-indigo-800 dark:text-indigo-300 font-semibold";
    } else if (age < 65) {
      badge.textContent = t("age_cat_adult", "Adult (18 - 64 yrs)");
      badge.className = "text-xs px-2.5 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 font-semibold";
    } else {
      badge.textContent = t("age_cat_geriatric", "Geriatric (65+ yrs)");
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

  // --------------------------------------------------------------------------
  // Step 2: Target Condition Confirmation, Symptoms Checklist & Triage
  // --------------------------------------------------------------------------
  const updateEmergencyTriageBanner = () => {
    const flagsContainer = document.getElementById("survey-condition-flags-container");
    if (!flagsContainer) return;
    const disease = (CLINICAL_DATA.diseases || []).find(d => d.id === state.selectedDiseaseId);
    if (!disease) return;

    const isCritical = state.severity === "critical";
    const isSevere = state.severity === "severe";
    const hasFlags = disease.emergencyFlags && disease.emergencyFlags.length > 0;

    if (isCritical || isSevere) {
      flagsContainer.classList.remove("hidden");
      flagsContainer.innerHTML = `
        <div class="p-4 rounded-2xl border-2 border-rose-500 bg-rose-50 dark:bg-rose-950/40 text-rose-900 dark:text-rose-200">
          <div class="flex items-start gap-3">
            <div class="w-9 h-9 rounded-xl bg-rose-600 text-white flex items-center justify-center shrink-0 shadow-md">
              <i data-lucide="alert-octagon" class="w-5 h-5"></i>
            </div>
            <div class="text-xs">
              <div class="flex flex-wrap items-center gap-2 mb-1">
                <span class="font-heading font-extrabold text-rose-700 dark:text-rose-300 text-sm uppercase tracking-wide">
                  Deterministic Emergency Medical Triage Triggered
                </span>
                <span class="text-[10px] font-bold px-2 py-0.5 rounded bg-rose-600 text-white">IMMEDIATE ATTENTION</span>
              </div>
              <p class="leading-relaxed mb-2 font-medium">
                ${isCritical 
                  ? "Patient clinical presentation or reported severity matches acute emergency triage criteria. Self-medication is strongly contraindicated. Call emergency ambulance (112 / 911) or proceed immediately to an emergency hospital department."
                  : "Severe illness profile detected. Clinical consultation with a certified healthcare practitioner is strongly recommended before initiating outpatient posology."}
              </p>
              ${hasFlags ? `
                <div class="pt-2 border-t border-rose-200 dark:border-rose-900/60">
                  <span class="text-[11px] font-bold uppercase tracking-wider block mb-1">Emergency Red Flags for ${disease.name}:</span>
                  <ul class="space-y-1 text-[11px] list-disc list-inside">
                    ${disease.emergencyFlags.map(f => `<li>${f}</li>`).join("")}
                  </ul>
                </div>
              ` : ''}
              <div class="mt-3 flex flex-wrap items-center gap-2">
                <a href="tel:112" class="px-3 py-1.5 rounded-lg bg-rose-600 hover:bg-rose-700 text-white font-bold flex items-center gap-1.5 shadow-xs">
                  <i data-lucide="phone-call" class="w-3.5 h-3.5"></i> Call Emergency (112 / 911)
                </a>
                <a href="tel:18002221222" class="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-white font-semibold flex items-center gap-1.5">
                  <i data-lucide="shield-alert" class="w-3.5 h-3.5"></i> Poison Control (1800-222-1222)
                </a>
              </div>
            </div>
          </div>
        </div>
      `;
    } else {
      flagsContainer.classList.add("hidden");
      flagsContainer.innerHTML = "";
    }
    refreshIcons();
  };

  const populateStep2ConditionData = () => {
    const summaryContainer = document.getElementById("survey-step2-condition-summary");
    if (!summaryContainer) return;
    const disease = (CLINICAL_DATA.diseases || []).find(d => d.id === state.selectedDiseaseId);
    if (!disease) return;

    state.selectedSymptoms = [...(disease.symptoms || [])];

    summaryContainer.innerHTML = `
      <div class="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-4">
        <div>
          <div class="flex flex-wrap items-center gap-2 mb-1.5">
            <span class="text-xs font-bold px-2.5 py-0.5 rounded-full bg-sky-600 text-white shadow-2xs">
              Selected Target Condition
            </span>
            <span class="text-xs font-mono font-bold px-2 py-0.5 rounded bg-sky-100 dark:bg-sky-950 text-sky-700 dark:text-sky-300 border border-sky-200 dark:border-sky-800">
              WHO ICD-11: ${disease.icd11Code || "Unspecified"}
            </span>
            <span class="text-xs text-slate-500 dark:text-slate-400 font-medium">• ${disease.category}</span>
          </div>
          <h3 class="text-xl sm:text-2xl font-heading font-extrabold text-slate-900 dark:text-white">${disease.name}</h3>
          <p class="text-xs text-slate-600 dark:text-slate-300 mt-1 max-w-2xl leading-relaxed">${disease.description}</p>
        </div>
        <button type="button" id="survey-step2-change-condition" class="touch-target text-xs font-semibold text-sky-600 dark:text-sky-400 hover:text-sky-700 flex items-center gap-1 shrink-0 p-2 rounded-xl hover:bg-sky-100/50 dark:hover:bg-slate-800 transition-colors cursor-pointer">
          <i data-lucide="rotate-ccw" class="w-3.5 h-3.5"></i> Change Condition
        </button>
      </div>

      <!-- Progressive Symptoms Checklist -->
      <div class="pt-3 border-t border-sky-200/60 dark:border-sky-800/60">
        <label class="text-xs font-bold text-slate-800 dark:text-slate-200 flex items-center gap-1.5 mb-2">
          <i data-lucide="check-square" class="w-4 h-4 text-sky-600"></i>
          Check Symptoms Currently Present:
        </label>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 text-xs">
          ${(disease.symptoms || []).map((symp) => `
            <label class="flex items-center gap-2 p-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 cursor-pointer hover:border-sky-400 transition-all">
              <input type="checkbox" class="survey-symptom-checkbox rounded text-sky-600 focus:ring-sky-500" value="${symp}" checked>
              <span class="text-slate-700 dark:text-slate-200">${symp}</span>
            </label>
          `).join("")}
        </div>
      </div>
    `;

    // Symptom checkboxes listener
    summaryContainer.querySelectorAll(".survey-symptom-checkbox").forEach(cb => {
      cb.addEventListener("change", () => {
        state.selectedSymptoms = Array.from(summaryContainer.querySelectorAll(".survey-symptom-checkbox"))
          .filter(c => c.checked)
          .map(c => c.value);
      });
    });

    const changeBtn = document.getElementById("survey-step2-change-condition");
    if (changeBtn) {
      changeBtn.addEventListener("click", () => setSurveyStep(1));
    }

    updateEmergencyTriageBanner();
    refreshIcons();
  };

  // Severity Radio Listeners & Visual Feedback
  const severityRadios = document.querySelectorAll('input[name="survey-severity"]');
  const severityCards = document.querySelectorAll(".severity-card");

  severityRadios.forEach(radio => {
    radio.addEventListener("change", (e) => {
      state.severity = e.target.value;
      severityCards.forEach(card => {
        const val = card.getAttribute("data-severity");
        if (val === state.severity) {
          card.classList.add("border-2", "border-sky-500", "bg-sky-50/50", "dark:bg-sky-950/30");
        } else {
          card.classList.remove("border-2", "border-sky-500", "bg-sky-50/50", "dark:bg-sky-950/30");
        }
      });
      updateEmergencyTriageBanner();
    });
  });

  // Duration Radio Listeners
  const durationRadios = document.querySelectorAll('input[name="survey-duration"]');
  durationRadios.forEach(radio => {
    radio.addEventListener("change", (e) => {
      state.duration = e.target.value;
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
  // Step 3: Clinical Posology & Reference Report Generation
  // --------------------------------------------------------------------------
  const calculateAndRenderResults = () => {
    const resultsContainer = document.getElementById("survey-results-content");
    if (!resultsContainer) return;

    const disease = (CLINICAL_DATA.diseases || []).find(d => d.id === state.selectedDiseaseId);
    if (!disease) return;

    const age = state.age;
    const weight = state.weight;
    const isPediatric = age < 12 || weight < 40;
    const isGeriatric = age >= 65;
    const allergies = state.allergies;
    const comorbidities = state.comorbidities;
    const isPregnant = state.isPregnant;

    // Find all medicines associated with this condition
    const allMeds = CLINICAL_DATA.medicineReferences || [];
    let linkedMeds = allMeds.filter(m => 
      m.conditionId === disease.id || 
      m.condition.toLowerCase() === disease.name.toLowerCase() ||
      (disease.medicineIds || []).includes(m.id)
    );

    // Fallback to legacy salts if no HKare medicines
    if (linkedMeds.length === 0 && disease.firstLineSalts) {
      linkedMeds = disease.firstLineSalts.map(sId => {
        const s = CLINICAL_DATA.salts[sId];
        if (!s) return null;
        return {
          id: s.id,
          activeIngredient: s.saltName,
          medicineClass: s.chemicalClass,
          generalMedicalRole: s.mechanism || "Evidence-based pharmacology",
          safetyNote: s.pregnancyCaution || "Clinician supervision recommended",
          source: "WHO EML"
        };
      }).filter(Boolean);
    }

    const isCritical = state.severity === "critical";
    const isSevere = state.severity === "severe";

    let html = `
      <!-- Educational Clinical Posology Disclaimer -->
      <div class="mb-6 p-4 rounded-2xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 text-amber-900 dark:text-amber-200 text-xs flex items-start gap-3">
        <i data-lucide="shield-alert" class="w-5 h-5 text-amber-600 shrink-0 mt-0.5"></i>
        <div>
          <strong>Educational Reference Posology:</strong> Calibrated according to WHO Model Formulary and international pharmacopoeias (BNF). This summary is intended strictly for clinical reference and educational guidance. It does NOT constitute an automated prescription or formal medical diagnosis. Always consult a licensed physician or clinical pharmacist before administering therapeutic agents.
        </div>
      </div>

      ${isCritical || isSevere ? `
        <!-- High-Priority Emergency Triage Notice in Report -->
        <div class="mb-6 p-5 rounded-3xl border-2 border-rose-500 bg-rose-50 dark:bg-rose-950/30 text-rose-900 dark:text-rose-200 shadow-md">
          <div class="flex items-start gap-3">
            <div class="w-10 h-10 rounded-2xl bg-rose-600 text-white flex items-center justify-center shrink-0 shadow-sm">
              <i data-lucide="alert-octagon" class="w-6 h-6"></i>
            </div>
            <div>
              <div class="flex items-center gap-2 mb-1">
                <h4 class="font-heading font-extrabold text-sm text-rose-700 dark:text-rose-300 uppercase tracking-wide">
                  Emergency Medical Triage Advisory
                </h4>
                <span class="text-[10px] font-bold px-2 py-0.5 rounded bg-rose-600 text-white">RED FLAG TIER</span>
              </div>
              <p class="text-xs leading-relaxed font-medium mb-3">
                ${isCritical 
                  ? "This case matches deterministic emergency triage red flags. Self-medication carries extreme safety risks. Seek hospital ER care or call emergency ambulance (112 / 911) immediately."
                  : "Severe clinical presentation noted. Clinical examination and laboratory workup are advised prior to initiating pharmacological regimens."}
              </p>
              <div class="flex flex-wrap items-center gap-3 text-xs">
                <a href="tel:112" class="px-3 py-1.5 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-bold inline-flex items-center gap-1.5 shadow-xs">
                  <i data-lucide="phone-call" class="w-3.5 h-3.5"></i> Call Emergency (112 / 911)
                </a>
                <a href="tel:18002221222" class="px-3 py-1.5 rounded-xl bg-slate-800 text-white font-semibold inline-flex items-center gap-1.5">
                  <i data-lucide="shield-alert" class="w-3.5 h-3.5"></i> Poison Control (1800-222-1222)
                </a>
              </div>
            </div>
          </div>
        </div>
      ` : ''}

      <!-- Assessment Profile Summary Banner -->
      <div class="bg-gradient-to-r from-sky-900 to-slate-900 text-white p-6 rounded-3xl mb-8 shadow-md">
        <div class="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div class="flex flex-wrap items-center gap-2 mb-1.5">
              <span class="px-2.5 py-0.5 rounded-full bg-sky-500/25 text-sky-200 border border-sky-400/30 text-xs font-bold">
                Clinical Reference Summary
              </span>
              <span class="text-xs font-mono font-bold px-2 py-0.5 rounded bg-white/10 text-sky-200 border border-white/20">
                ICD-11: ${disease.icd11Code || "WHO"}
              </span>
              <span class="text-xs px-2 py-0.5 rounded bg-white/10 text-slate-200 font-semibold uppercase tracking-wider">
                Severity: ${state.severity}
              </span>
              <span class="text-xs px-2 py-0.5 rounded bg-white/10 text-slate-200">
                Episode: ${state.duration.replace(/-/g, ' ')}
              </span>
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
            <span><strong>Pregnancy Safety Protocol:</strong> Strict fetal safety standards applied. Non-steroidal anti-inflammatories and contraindicated teratogens must be avoided.</span>
          </div>
        ` : ''}

        ${allergies.length > 0 && !allergies.includes("none") ? `
          <div class="mt-2.5 p-3.5 rounded-xl bg-rose-500/20 border border-rose-400/40 text-rose-200 text-xs flex items-center gap-2.5">
            <i data-lucide="shield-alert" class="w-4 h-4 shrink-0 text-rose-400"></i>
            <span><strong>Allergy Watchlist:</strong> Patient flagged hypersensitivity to: <strong>${allergies.join(", ").toUpperCase()}</strong>. Cross-reacting regimens contraindicated.</span>
          </div>
        ` : ''}

        ${state.selectedSymptoms && state.selectedSymptoms.length > 0 ? `
          <div class="mt-4 pt-3 border-t border-white/10 text-xs flex flex-wrap items-center gap-1.5">
            <span class="text-slate-400 text-[11px] font-semibold uppercase tracking-wider mr-1">Reported Symptoms:</span>
            ${state.selectedSymptoms.map(s => `
              <span class="px-2 py-0.5 rounded-md bg-white/10 text-white text-[11px]">${s}</span>
            `).join("")}
          </div>
        ` : ''}
      </div>

      <!-- Associated Medicine Reference Cards -->
      <div class="mb-10">
        <div class="flex items-center justify-between mb-5">
          <div>
            <h4 class="text-lg sm:text-xl font-heading font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <i data-lucide="pill" class="w-5 h-5 text-sky-600 dark:text-sky-400"></i>
              Verified Medicine References for ${disease.name}
            </h4>
            <p class="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              Standard therapeutic classes and active ingredients referenced in the HKare clinical matrix.
            </p>
          </div>
          <span class="text-xs font-semibold px-3 py-1 rounded-full bg-sky-100 dark:bg-sky-950/60 text-sky-700 dark:text-sky-300 shrink-0">
            ${linkedMeds.length} Clinical Reference${linkedMeds.length === 1 ? '' : 's'}
          </span>
        </div>

        <div class="space-y-4">
    `;

    // Render each associated medicine reference
    linkedMeds.forEach(med => {
      // Check for matching verified monograph
      const cleanName = med.activeIngredient.split("/")[0].split("+")[0].replace(/\(.*\)/, "").trim().toLowerCase();
      const verifiedSalt = Object.values(CLINICAL_DATA.salts || {}).find(s => 
        s.saltName.toLowerCase().includes(cleanName) || cleanName.includes(s.id)
      );

      html += `
        <div class="p-6 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xs hover:border-sky-400 transition-all">
          <div class="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-3">
            <div>
              <div class="flex flex-wrap items-center gap-2 mb-1.5">
                <span class="text-xs font-bold px-2.5 py-0.5 rounded-full bg-sky-100 dark:bg-sky-950/80 text-sky-800 dark:text-sky-300">
                  ${med.medicineClass}
                </span>
                <span class="text-xs text-slate-400 font-mono">
                  ${disease.name}
                </span>
              </div>
              <h5 class="text-xl font-heading font-bold text-slate-900 dark:text-white">${med.activeIngredient}</h5>
            </div>
            <span class="text-xs font-semibold px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 shrink-0">
              HKare Reference
            </span>
          </div>

          <!-- General Medical Role -->
          <div class="mb-3">
            <span class="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block mb-1">
              General Medical Role:
            </span>
            <p class="text-xs text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
              ${med.generalMedicalRole}
            </p>
          </div>

          <!-- Clinical Safety Guidance (Amber Alert Box) -->
          <div class="mb-4 p-3.5 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800/60 text-amber-900 dark:text-amber-200 text-xs">
            <div class="flex items-center gap-1.5 mb-1 font-bold text-[11px] uppercase tracking-wide text-amber-800 dark:text-amber-300">
              <i data-lucide="shield-alert" class="w-3.5 h-3.5 text-amber-600 shrink-0"></i>
              <span>HKare Clinical Safety & Caution:</span>
            </div>
            <p class="text-xs leading-relaxed font-semibold pl-5">${med.safetyNote}</p>
          </div>

          <!-- Verified Monograph Details if Available -->
          ${verifiedSalt ? `
            <div class="pt-3 border-t border-slate-100 dark:border-slate-800 text-xs grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div>
                <span class="text-[10px] text-slate-400 block uppercase tracking-wider font-semibold">Standard Adult Dose</span>
                <span class="font-bold text-slate-800 dark:text-slate-200">${verifiedSalt.adultDosing.standardSingleDose}</span>
              </div>
              <div>
                <span class="text-[10px] text-slate-400 block uppercase tracking-wider font-semibold">24h Safe Ceiling</span>
                <span class="font-bold text-slate-800 dark:text-slate-200">${verifiedSalt.adultDosing.maxDailyCeiling}</span>
              </div>
              <div>
                <span class="text-[10px] text-slate-400 block uppercase tracking-wider font-semibold">Pediatric Formula</span>
                <span class="font-bold text-sky-600 dark:text-sky-400">${verifiedSalt.pediatricDosing ? verifiedSalt.pediatricDosing.formulaPerKg : 'Consult pediatrician'}</span>
              </div>
            </div>
          ` : ''}

          <div class="mt-3 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
            <span>Source: <strong>HKare Reference Dataset</strong></span>
            <span>Dataset File: <code>HKare_Common_Disease_Medicine_Reference(1).csv</code></span>
          </div>
        </div>
      `;
    });

    html += `
        </div>
      </div>
    `;

    resultsContainer.innerHTML = html;
    refreshIcons();
  };

  // Language Change Listener
  window.addEventListener("himkiv:languageChanged", () => {
    renderCategoryTabs();
    renderDiseaseChoices();
  });

  // Initialize
  renderCategoryTabs();
  renderDiseaseChoices();
});
