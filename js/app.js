/**
 * HIMKIV Health & MedGuide - Core Application Logic
 * Clinical Survey Engine, Weight/Age Dosage Algorithms,
 * Universal Drug & Salt Search Engine, and Interactive Sandbox.
 */

document.addEventListener("DOMContentLoaded", () => {
  // Ensure Clinical Data is loaded
  if (typeof CLINICAL_DATA === "undefined") {
    console.error("Clinical dataset could not be found.");
    return;
  }

  // State Management
  const state = {
    theme: localStorage.getItem("himkiv_theme") || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"),
    searchQuery: "",
    selectedCategory: "all",
    survey: {
      step: 1,
      selectedDiseaseId: null,
      age: 28,
      weight: 65,
      weightUnit: "kg",
      gender: "male",
      isPregnant: false,
      allergies: [],
      comorbidities: []
    },
    sandbox: {
      saltId: "paracetamol",
      age: 8,
      weight: 24
    },
    activeModalSalt: null
  };

  // Initialize Lucide Icons
  const refreshIcons = () => {
    if (typeof lucide !== "undefined" && lucide.createIcons) {
      lucide.createIcons();
    }
  };

  // --------------------------------------------------------------------------
  // Theme Management
  // --------------------------------------------------------------------------
  const applyTheme = (theme) => {
    state.theme = theme;
    localStorage.setItem("himkiv_theme", theme);
    const htmlEl = document.documentElement;
    const themeIcon = document.getElementById("theme-toggle-icon");

    if (theme === "dark") {
      htmlEl.classList.add("dark");
      if (themeIcon) themeIcon.setAttribute("data-lucide", "sun");
    } else {
      htmlEl.classList.remove("dark");
      if (themeIcon) themeIcon.setAttribute("data-lucide", "moon");
    }
    refreshIcons();
  };

  const themeToggleBtn = document.getElementById("theme-toggle-btn");
  if (themeToggleBtn) {
    themeToggleBtn.addEventListener("click", () => {
      applyTheme(state.theme === "dark" ? "light" : "dark");
    });
  }
  applyTheme(state.theme);

  // --------------------------------------------------------------------------
  // Clinical Survey Logic & Dosage Computation Engine
  // --------------------------------------------------------------------------
  const diseaseGridContainer = document.getElementById("survey-disease-grid");
  const diseaseSearchInput = document.getElementById("survey-disease-search");
  const surveySteps = document.querySelectorAll(".survey-step");
  const surveyStepIndicators = document.querySelectorAll(".survey-progress-step");

  // Render Step 1: Disease list
  const renderDiseaseChoices = (filter = "") => {
    if (!diseaseGridContainer) return;
    diseaseGridContainer.innerHTML = "";

    const filtered = CLINICAL_DATA.diseases.filter(d => {
      const matchName = d.name.toLowerCase().includes(filter.toLowerCase());
      const matchSymp = d.symptoms.some(s => s.toLowerCase().includes(filter.toLowerCase()));
      const matchCat = d.category.toLowerCase().includes(filter.toLowerCase());
      return matchName || matchSymp || matchCat;
    });

    if (filtered.length === 0) {
      diseaseGridContainer.innerHTML = `
        <div class="col-span-full py-8 text-center text-slate-500 dark:text-slate-400">
          <i data-lucide="search-x" class="w-8 h-8 mx-auto mb-2 opacity-60"></i>
          <p class="text-sm">No matching conditions found. Try broader terms like "fever", "cough", "pain", or "stomach".</p>
        </div>
      `;
      refreshIcons();
      return;
    }

    filtered.forEach(disease => {
      const isSelected = state.survey.selectedDiseaseId === disease.id;
      const card = document.createElement("button");
      card.type = "button";
      card.className = `p-4 rounded-xl border text-left transition-all relative flex flex-col justify-between ${
        isSelected
          ? "border-sky-600 bg-sky-50 dark:bg-sky-950/40 dark:border-sky-400 ring-2 ring-sky-500/20 shadow-md"
          : "border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-sky-300 dark:hover:border-slate-700"
      }`;

      card.innerHTML = `
        <div>
          <div class="flex items-start justify-between gap-2 mb-2">
            <span class="text-xs font-semibold px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
              ${disease.category}
            </span>
            ${isSelected ? '<span class="text-sky-600 dark:text-sky-400 flex items-center gap-1 text-xs font-semibold"><i data-lucide="check-circle-2" class="w-4 h-4"></i> Selected</span>' : ''}
          </div>
          <h4 class="font-heading font-semibold text-slate-900 dark:text-white text-base mb-1.5">${disease.name}</h4>
          <p class="text-xs text-slate-500 dark:text-slate-400 line-clamp-2 mb-3">${disease.description}</p>
        </div>
        <div class="mt-auto">
          <div class="text-[11px] font-medium text-slate-400 dark:text-slate-500 mb-1">Key Signs:</div>
          <div class="flex flex-wrap gap-1">
            ${disease.symptoms.slice(0, 3).map(s => `
              <span class="text-[11px] bg-slate-50 dark:bg-slate-800/80 text-slate-600 dark:text-slate-300 px-1.5 py-0.5 rounded">
                ${s}
              </span>
            `).join("")}
            ${disease.symptoms.length > 3 ? `<span class="text-[10px] text-slate-400">+${disease.symptoms.length - 3} more</span>` : ''}
          </div>
        </div>
      `;

      card.addEventListener("click", () => {
        state.survey.selectedDiseaseId = disease.id;
        renderDiseaseChoices(diseaseSearchInput ? diseaseSearchInput.value : "");
        const nextBtn = document.getElementById("survey-step-1-next");
        if (nextBtn) {
          nextBtn.removeAttribute("disabled");
          nextBtn.classList.remove("opacity-50", "cursor-not-allowed");
        }
      });

      diseaseGridContainer.appendChild(card);
    });

    refreshIcons();
  };

  if (diseaseSearchInput) {
    diseaseSearchInput.addEventListener("input", (e) => {
      renderDiseaseChoices(e.target.value);
    });
  }

  // Update Survey Step View
  const setSurveyStep = (stepNumber) => {
    state.survey.step = stepNumber;
    surveySteps.forEach((el, idx) => {
      if (idx + 1 === stepNumber) {
        el.classList.remove("hidden");
      } else {
        el.classList.add("hidden");
      }
    });

    surveyStepIndicators.forEach((ind, idx) => {
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

    refreshIcons();
  };

  // Step 1 Navigation
  const step1NextBtn = document.getElementById("survey-step-1-next");
  if (step1NextBtn) {
    step1NextBtn.addEventListener("click", () => {
      if (state.survey.selectedDiseaseId) {
        setSurveyStep(2);
      }
    });
  }

  // Step 2 Inputs bindings
  const ageInput = document.getElementById("survey-age-input");
  const weightInput = document.getElementById("survey-weight-input");
  const weightUnitToggle = document.getElementById("weight-unit-toggle");
  const genderInputs = document.querySelectorAll('input[name="survey-gender"]');
  const pregnantField = document.getElementById("pregnancy-field");
  const pregnantCheckbox = document.getElementById("survey-pregnant-check");

  if (ageInput) {
    ageInput.addEventListener("input", (e) => {
      state.survey.age = parseFloat(e.target.value) || 0;
      updateAgeBadge(state.survey.age);
    });
  }

  const updateAgeBadge = (age) => {
    const badge = document.getElementById("age-classification-badge");
    if (!badge) return;
    if (age < 1) {
      badge.textContent = "Infant (< 1 yr)";
      badge.className = "text-xs px-2 py-0.5 rounded bg-amber-100 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 font-medium";
    } else if (age < 12) {
      badge.textContent = "Pediatric (1 - 11 yrs)";
      badge.className = "text-xs px-2 py-0.5 rounded bg-sky-100 dark:bg-sky-950/60 text-sky-700 dark:text-sky-300 font-medium";
    } else if (age < 18) {
      badge.textContent = "Adolescent (12 - 17 yrs)";
      badge.className = "text-xs px-2 py-0.5 rounded bg-indigo-100 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 font-medium";
    } else if (age < 65) {
      badge.textContent = "Adult (18 - 64 yrs)";
      badge.className = "text-xs px-2 py-0.5 rounded bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 font-medium";
    } else {
      badge.textContent = "Geriatric (65+ yrs)";
      badge.className = "text-xs px-2 py-0.5 rounded bg-purple-100 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300 font-medium";
    }
  };

  if (weightInput) {
    weightInput.addEventListener("input", (e) => {
      let val = parseFloat(e.target.value) || 0;
      if (state.survey.weightUnit === "lbs") {
        state.survey.weight = Math.round((val / 2.20462) * 10) / 10;
      } else {
        state.survey.weight = val;
      }
    });
  }

  if (weightUnitToggle) {
    weightUnitToggle.addEventListener("click", () => {
      const currentUnit = state.survey.weightUnit;
      const newUnit = currentUnit === "kg" ? "lbs" : "kg";
      state.survey.weightUnit = newUnit;
      weightUnitToggle.textContent = newUnit.toUpperCase();

      if (weightInput) {
        if (newUnit === "lbs") {
          weightInput.value = Math.round(state.survey.weight * 2.20462 * 10) / 10;
        } else {
          weightInput.value = state.survey.weight;
        }
      }
    });
  }

  genderInputs.forEach(input => {
    input.addEventListener("change", (e) => {
      state.survey.gender = e.target.value;
      if (pregnantField) {
        if (state.survey.gender === "female" && state.survey.age >= 15 && state.survey.age <= 50) {
          pregnantField.classList.remove("hidden");
        } else {
          pregnantField.classList.add("hidden");
          state.survey.isPregnant = false;
          if (pregnantCheckbox) pregnantCheckbox.checked = false;
        }
      }
    });
  });

  if (pregnantCheckbox) {
    pregnantCheckbox.addEventListener("change", (e) => {
      state.survey.isPregnant = e.target.checked;
    });
  }

  // Allergy Checkboxes
  const allergyCheckboxes = document.querySelectorAll('input[name="survey-allergy"]');
  allergyCheckboxes.forEach(cb => {
    cb.addEventListener("change", () => {
      const checkedVals = Array.from(allergyCheckboxes)
        .filter(c => c.checked)
        .map(c => c.value);
      state.survey.allergies = checkedVals;
    });
  });

  // Comorbidity Checkboxes
  const comorbCheckboxes = document.querySelectorAll('input[name="survey-comorbidity"]');
  comorbCheckboxes.forEach(cb => {
    cb.addEventListener("change", () => {
      const checkedVals = Array.from(comorbCheckboxes)
        .filter(c => c.checked)
        .map(c => c.value);
      state.survey.comorbidities = checkedVals;
    });
  });

  // Step 2 Navigation
  const step2BackBtn = document.getElementById("survey-step-2-back");
  const step2NextBtn = document.getElementById("survey-step-2-next");
  if (step2BackBtn) {
    step2BackBtn.addEventListener("click", () => setSurveyStep(1));
  }
  if (step2NextBtn) {
    step2NextBtn.addEventListener("click", () => {
      // Validate inputs
      const age = state.survey.age;
      const weight = state.survey.weight;
      if (age < 0 || age > 125 || isNaN(age)) {
        alert("Please enter a valid patient age between 0 and 125 years.");
        return;
      }
      if (weight < 2 || weight > 250 || isNaN(weight)) {
        alert("Please enter a realistic body weight between 2 kg and 250 kg.");
        return;
      }
      setSurveyStep(3);
    });
  }

  // Step 3 Back & Reset
  const step3BackBtn = document.getElementById("survey-step-3-back");
  const step3RestartBtn = document.getElementById("survey-step-3-restart");
  const printReportBtn = document.getElementById("survey-print-report-btn");

  if (step3BackBtn) {
    step3BackBtn.addEventListener("click", () => setSurveyStep(2));
  }
  if (step3RestartBtn) {
    step3RestartBtn.addEventListener("click", () => {
      state.survey.step = 1;
      state.survey.selectedDiseaseId = null;
      renderDiseaseChoices();
      setSurveyStep(1);
    });
  }
  if (printReportBtn) {
    printReportBtn.addEventListener("click", () => {
      window.print();
    });
  }

  // --------------------------------------------------------------------------
  // Core Clinical Calculation: Weight/Age Dosage & Cross-Allergy Checking
  // --------------------------------------------------------------------------
  const calculateAndRenderResults = () => {
    const resultsContainer = document.getElementById("survey-results-content");
    if (!resultsContainer) return;

    const disease = CLINICAL_DATA.diseases.find(d => d.id === state.survey.selectedDiseaseId);
    if (!disease) return;

    const age = state.survey.age;
    const weight = state.survey.weight;
    const isPediatric = age < 12 || weight < 40;
    const isGeriatric = age >= 65;
    const allergies = state.survey.allergies;
    const comorbidities = state.survey.comorbidities;
    const isPregnant = state.survey.isPregnant;

    // Collect recommended salts
    const recommendedSalts = disease.firstLineSalts
      .map(saltId => CLINICAL_DATA.salts[saltId])
      .filter(Boolean);

    // Header summary card
    let html = `
      <!-- Assessment Profile Summary Banner -->
      <div class="bg-gradient-to-r from-sky-900 to-slate-900 text-white p-5 rounded-2xl mb-6 shadow-md">
        <div class="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div class="flex items-center gap-2 mb-1">
              <span class="px-2.5 py-0.5 rounded-full bg-sky-500/20 text-sky-200 border border-sky-400/30 text-xs font-semibold">
                Clinical Recommendation
              </span>
              <span class="text-xs text-slate-300">Target Condition:</span>
            </div>
            <h3 class="text-2xl font-heading font-bold text-white">${disease.name}</h3>
            <p class="text-xs text-slate-300 mt-1 max-w-2xl">${disease.description}</p>
          </div>
          <div class="flex items-center gap-4 bg-white/10 backdrop-blur-md px-4 py-3 rounded-xl border border-white/10 text-xs shrink-0">
            <div>
              <span class="text-slate-400 block text-[10px] uppercase tracking-wider font-semibold">Patient Profile</span>
              <span class="font-bold text-white text-sm">${age} yrs &bull; ${weight} kg</span>
            </div>
            <div class="h-8 w-px bg-white/20"></div>
            <div>
              <span class="text-slate-400 block text-[10px] uppercase tracking-wider font-semibold">Category</span>
              <span class="font-bold text-sky-300 text-sm">${isPediatric ? "Pediatric" : isGeriatric ? "Geriatric" : "Adult"}</span>
            </div>
          </div>
        </div>

        ${isPregnant ? `
          <div class="mt-4 p-3 rounded-xl bg-amber-500/20 border border-amber-400/40 text-amber-200 text-xs flex items-center gap-2">
            <i data-lucide="alert-triangle" class="w-4 h-4 shrink-0 text-amber-400"></i>
            <span><strong>Pregnancy Advisory Active:</strong> Fetal safety considerations applied. NSAIDs and ARBs (e.g. Telmisartan) are strictly avoided.</span>
          </div>
        ` : ''}

        ${allergies.length > 0 && !allergies.includes("none") ? `
          <div class="mt-2 p-3 rounded-xl bg-rose-500/20 border border-rose-400/40 text-rose-200 text-xs flex items-center gap-2">
            <i data-lucide="shield-alert" class="w-4 h-4 shrink-0 text-rose-400"></i>
            <span><strong>Allergy Watchlist:</strong> Patient reported hypersensitivity to: <strong>${allergies.join(", ").toUpperCase()}</strong>. Safe alternatives evaluated below.</span>
          </div>
        ` : ''}
      </div>

      <!-- Medicine & Salt Dosage Recommendations -->
      <div class="mb-8">
        <div class="flex items-center justify-between mb-4">
          <div>
            <h4 class="text-lg font-heading font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <i data-lucide="pill" class="w-5 h-5 text-sky-600 dark:text-sky-400"></i>
              Calculated Drug Salts & Dosage Regimens
            </h4>
            <p class="text-xs text-slate-500 dark:text-slate-400">Calculated according to clinical guidelines based on ${weight} kg body weight.</p>
          </div>
          <span class="text-xs font-semibold px-2.5 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300">
            ${recommendedSalts.length} Pharmacological Compounds
          </span>
        </div>

        <div class="space-y-4">
    `;

    // Process each salt
    recommendedSalts.forEach((salt, idx) => {
      // Check for allergy conflicts
      let hasAllergyConflict = false;
      let conflictReason = "";

      if (allergies.includes("penicillin") && (salt.allergyClass.includes("Penicillin") || salt.allergyClass.includes("Cephalosporin"))) {
        hasAllergyConflict = true;
        conflictReason = "Patient has Penicillin allergy. Risk of IgE cross-reactivity with this beta-lactam antibacterial compound.";
      }
      if (allergies.includes("nsaid") && salt.allergyClass.includes("NSAID")) {
        hasAllergyConflict = true;
        conflictReason = "Patient has reported NSAID allergy. Contraindicated due to bronchospasm / anaphylactoid risk.";
      }
      if (allergies.includes("sulfa") && salt.allergyClass.includes("Sulfa")) {
        hasAllergyConflict = true;
        conflictReason = "Patient has Sulfa drug allergy. Contraindicated with sulfonylureas.";
      }
      if (allergies.includes("macrolide") && salt.allergyClass.includes("Macrolide")) {
        hasAllergyConflict = true;
        conflictReason = "Patient has Macrolide hypersensitivity.";
      }

      // Check for pregnancy contraindication
      let pregnancyContraindicated = false;
      if (isPregnant && (salt.id === "ibuprofen" || salt.id === "telmisartan" || salt.id === "ciprofloxacin" || salt.id === "diclofenac-chlorzoxazone")) {
        pregnancyContraindicated = true;
      }

      // Check comorbidity cautions
      let comorbidityCautions = [];
      if (comorbidities.includes("liver") && (salt.id === "paracetamol" || salt.id === "diclofenac-chlorzoxazone")) {
        comorbidityCautions.push("Pre-existing Liver Disease: Dose reduction mandatory. Paracetamol max 2000mg/day.");
      }
      if (comorbidities.includes("kidney") && (salt.id === "ibuprofen" || salt.id === "metformin" || salt.id === "diclofenac-chlorzoxazone")) {
        comorbidityCautions.push("Renal Impairment: Nephrotoxic risk. Avoid NSAIDs or adjust creatinine clearance frequency.");
      }
      if (comorbidities.includes("ulcer") && (salt.id === "ibuprofen" || salt.id === "diclofenac-chlorzoxazone")) {
        comorbidityCautions.push("Peptic Ulcer Disease: High risk of gastrointestinal bleeding with NSAIDs.");
      }

      // Compute Dosage
      let calculatedDoseText = "";
      let calculatedVolumeText = "";
      let frequencyText = "";
      let maxThresholdText = "";

      if (isPediatric && salt.pediatricDosing.minMgPerKg > 0) {
        const minSingleMg = Math.round(weight * salt.pediatricDosing.minMgPerKg);
        const maxSingleMg = Math.round(weight * salt.pediatricDosing.maxMgPerKg);
        
        calculatedDoseText = minSingleMg === maxSingleMg 
          ? `<strong>${minSingleMg} mg</strong> per dose`
          : `<strong>${minSingleMg} mg – ${maxSingleMg} mg</strong> per dose`;
        
        frequencyText = salt.pediatricDosing.frequency;
        const maxDaily = Math.round(weight * salt.pediatricDosing.maxDailyCeilingPerKg);
        maxThresholdText = `Max safe 24-hr threshold: <strong>${maxDaily} mg/day</strong>`;

        // Calculate liquid syrup volume if formulation exists
        if (salt.pediatricDosing.liquidFormulations && salt.pediatricDosing.liquidFormulations.length > 0) {
          const preferredLiquid = salt.pediatricDosing.liquidFormulations[0];
          if (preferredLiquid.perMlMg > 0) {
            const mlNeeded = Math.round((minSingleMg / preferredLiquid.perMlMg) * 10) / 10;
            calculatedVolumeText = `Liquid measure: <strong>${mlNeeded} ml</strong> of ${preferredLiquid.name} (${preferredLiquid.strength})`;
          }
        }
      } else if (isPediatric && salt.pediatricDosing.minMgPerKg === 0) {
        calculatedDoseText = `<span class="text-amber-600 dark:text-amber-400 font-medium">${salt.pediatricDosing.formulaPerKg}</span>`;
        frequencyText = salt.pediatricDosing.frequency || "Under pediatric supervision";
        maxThresholdText = salt.pediatricDosing.clinicalNote;
      } else {
        // Adult
        calculatedDoseText = `<strong>${salt.adultDosing.standardSingleDose}</strong>`;
        frequencyText = salt.adultDosing.frequency;
        maxThresholdText = `24-hr Ceiling: <strong>${salt.adultDosing.maxDailyCeiling}</strong>`;
      }

      html += `
        <div class="border rounded-2xl p-5 transition-all ${
          hasAllergyConflict || pregnancyContraindicated
            ? "border-rose-300 dark:border-rose-900/60 bg-rose-50/50 dark:bg-rose-950/20"
            : "border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm"
        }">
          <div class="flex flex-col md:flex-row md:items-start justify-between gap-3 mb-4">
            <div>
              <div class="flex flex-wrap items-center gap-2 mb-1">
                <span class="text-xs font-bold px-2 py-0.5 rounded bg-sky-100 dark:bg-sky-950/80 text-sky-800 dark:text-sky-300">
                  ${salt.therapeuticCategory}
                </span>
                <span class="text-xs text-slate-500 dark:text-slate-400">
                  Chemical: ${salt.chemicalClass}
                </span>
                ${hasAllergyConflict ? '<span class="text-xs font-bold px-2 py-0.5 rounded bg-rose-600 text-white flex items-center gap-1"><i data-lucide="shield-alert" class="w-3.5 h-3.5"></i> ALLERGY CONFLICT</span>' : ''}
                ${pregnancyContraindicated ? '<span class="text-xs font-bold px-2 py-0.5 rounded bg-rose-600 text-white flex items-center gap-1"><i data-lucide="alert-octagon" class="w-3.5 h-3.5"></i> CONTRAINDICATED IN PREGNANCY</span>' : ''}
              </div>
              <h5 class="text-xl font-heading font-bold text-slate-900 dark:text-white">${salt.saltName}</h5>
            </div>

            <button type="button" class="view-salt-deepdive-btn text-xs font-semibold text-sky-600 dark:text-sky-400 hover:text-sky-700 dark:hover:text-sky-300 flex items-center gap-1 self-start py-1.5 px-3 rounded-lg border border-sky-200 dark:border-sky-800 hover:bg-sky-50 dark:hover:bg-sky-950/50 transition-colors" data-salt-id="${salt.id}">
              <i data-lucide="info" class="w-4 h-4"></i> Full Clinical Monograph
            </button>
          </div>

          ${hasAllergyConflict ? `
            <div class="mb-4 p-3 rounded-xl bg-rose-100 dark:bg-rose-900/40 text-rose-900 dark:text-rose-200 text-xs flex items-start gap-2">
              <i data-lucide="alert-circle" class="w-4 h-4 shrink-0 text-rose-600 mt-0.5"></i>
              <div>
                <strong>Warning:</strong> ${conflictReason} 
                <span class="block mt-0.5 font-medium text-rose-700 dark:text-rose-300">Consider substituting with non-reactive alternatives listed below.</span>
              </div>
            </div>
          ` : ''}

          ${pregnancyContraindicated ? `
            <div class="mb-4 p-3 rounded-xl bg-rose-100 dark:bg-rose-900/40 text-rose-900 dark:text-rose-200 text-xs flex items-start gap-2">
              <i data-lucide="alert-circle" class="w-4 h-4 shrink-0 text-rose-600 mt-0.5"></i>
              <div>
                <strong>Contraindicated:</strong> This medicine poses severe risk to fetal organ development. Do not use without emergency specialist obstetric approval.
              </div>
            </div>
          ` : ''}

          <!-- Dosage Box -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-3 p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800 mb-4 text-xs">
            <div>
              <span class="text-slate-400 dark:text-slate-500 block font-semibold uppercase text-[10px] tracking-wider mb-1">Calculated Dose</span>
              <div class="text-sm text-slate-800 dark:text-slate-100">${calculatedDoseText}</div>
              ${calculatedVolumeText ? `<div class="text-sky-600 dark:text-sky-400 font-medium text-[11px] mt-1">${calculatedVolumeText}</div>` : ''}
            </div>
            <div>
              <span class="text-slate-400 dark:text-slate-500 block font-semibold uppercase text-[10px] tracking-wider mb-1">Timing & Schedule</span>
              <div class="text-sm text-slate-800 dark:text-slate-100 font-medium">${frequencyText}</div>
              <div class="text-[11px] text-slate-500 dark:text-slate-400 mt-1">${salt.administration}</div>
            </div>
            <div>
              <span class="text-slate-400 dark:text-slate-500 block font-semibold uppercase text-[10px] tracking-wider mb-1">Safety Ceilings</span>
              <div class="text-[11px] text-slate-700 dark:text-slate-300">${maxThresholdText}</div>
              ${isGeriatric ? `<div class="text-purple-600 dark:text-purple-400 font-medium text-[10px] mt-1">${salt.adultDosing.elderlyRenalAdjustment}</div>` : ''}
            </div>
          </div>

          ${comorbidityCautions.length > 0 ? `
            <div class="mb-4 space-y-1.5">
              ${comorbidityCautions.map(c => `
                <div class="p-2.5 rounded-lg bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800/60 text-amber-800 dark:text-amber-200 text-xs flex items-center gap-2">
                  <i data-lucide="alert-triangle" class="w-3.5 h-3.5 shrink-0 text-amber-600"></i>
                  <span>${c}</span>
                </div>
              `).join("")}
            </div>
          ` : ''}

          <!-- Commercial Brands Showcase -->
          <div>
            <span class="text-slate-400 dark:text-slate-500 block text-[11px] font-semibold uppercase tracking-wider mb-2">
              Common Commercial Pharmacy Brands:
            </span>
            <div class="flex flex-wrap gap-2">
              ${salt.brands.map(b => `
                <div class="px-2.5 py-1.5 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs flex items-center gap-2 shadow-2xs">
                  <span class="font-bold text-slate-900 dark:text-white">${b.name}</span>
                  <span class="text-[10px] text-slate-400 border-l border-slate-200 dark:border-slate-700 pl-1.5">${b.strength} &bull; ${b.company}</span>
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
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <div class="p-5 rounded-2xl border border-rose-200 dark:border-rose-900/50 bg-rose-50/40 dark:bg-rose-950/20">
          <h4 class="font-heading font-bold text-rose-700 dark:text-rose-400 text-sm flex items-center gap-2 mb-3">
            <i data-lucide="alert-octagon" class="w-4 h-4"></i> Red Flag Symptoms (Seek Emergency ER Immediately)
          </h4>
          <ul class="space-y-2 text-xs text-rose-900 dark:text-rose-200">
            ${disease.emergencyFlags.map(flag => `
              <li class="flex items-start gap-2">
                <span class="w-1.5 h-1.5 rounded-full bg-rose-500 mt-1.5 shrink-0"></span>
                <span>${flag}</span>
              </li>
            `).join("")}
          </ul>
        </div>

        <div class="p-5 rounded-2xl border border-emerald-200 dark:border-emerald-900/50 bg-emerald-50/40 dark:bg-emerald-950/20">
          <h4 class="font-heading font-bold text-emerald-700 dark:text-emerald-400 text-sm flex items-center gap-2 mb-3">
            <i data-lucide="heart-pulse" class="w-4 h-4"></i> Clinical Self-Care & Hydration Protocol
          </h4>
          <p class="text-xs text-emerald-900 dark:text-emerald-200 leading-relaxed">
            ${disease.lifestyleGuidance}
          </p>
          <div class="mt-4 pt-3 border-t border-emerald-200 dark:border-emerald-900/40 text-[11px] text-emerald-800 dark:text-emerald-300 font-medium">
            Remember: Antipyretics and analgesics offer symptomatic relief. If fever or symptoms persist > 48 hours, diagnostic lab evaluation is advised.
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
  // Universal Medicine & Salt Search Engine
  // --------------------------------------------------------------------------
  const searchInput = document.getElementById("universal-med-search");
  const clearSearchBtn = document.getElementById("clear-search-btn");
  const categoryFilters = document.querySelectorAll(".med-category-filter");
  const searchResultsGrid = document.getElementById("search-results-grid");
  const searchResultCount = document.getElementById("search-result-count");

  const filterAndRenderMedicines = () => {
    if (!searchResultsGrid) return;
    const query = state.searchQuery.trim().toLowerCase();
    const category = state.selectedCategory;

    const allSalts = Object.values(CLINICAL_DATA.salts);

    const matches = allSalts.filter(salt => {
      // Category check
      if (category !== "all" && salt.categorySlug !== category) {
        return false;
      }

      if (!query) return true;

      // Match salt name
      if (salt.saltName.toLowerCase().includes(query)) return true;
      // Match therapeutic category
      if (salt.therapeuticCategory.toLowerCase().includes(query)) return true;
      // Match chemical class
      if (salt.chemicalClass.toLowerCase().includes(query)) return true;
      // Match commercial brands
      const brandMatch = salt.brands.some(b => b.name.toLowerCase().includes(query) || b.company.toLowerCase().includes(query));
      if (brandMatch) return true;
      // Match indications
      const indMatch = salt.indications.some(ind => ind.toLowerCase().includes(query));
      if (indMatch) return true;

      return false;
    });

    if (searchResultCount) {
      searchResultCount.textContent = `Showing ${matches.length} medicine compounds`;
    }

    searchResultsGrid.innerHTML = "";

    if (matches.length === 0) {
      searchResultsGrid.innerHTML = `
        <div class="col-span-full py-12 text-center text-slate-400 dark:text-slate-500">
          <i data-lucide="flask-conical-off" class="w-12 h-12 mx-auto mb-3 opacity-40"></i>
          <h4 class="text-base font-semibold text-slate-700 dark:text-slate-300">No medicines or drug salts found</h4>
          <p class="text-xs text-slate-500 dark:text-slate-400 mt-1 max-w-md mx-auto">
            Try searching for brand names like "Dolo", "Augmentin", "Allegra", "Pan-D", or generic chemical salts like "Paracetamol", "Pantoprazole", or problems like "Fever", "Acidity".
          </p>
        </div>
      `;
      refreshIcons();
      return;
    }

    matches.forEach(salt => {
      const card = document.createElement("div");
      card.className = "interactive-card border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 rounded-2xl shadow-sm flex flex-col justify-between";

      card.innerHTML = `
        <div>
          <div class="flex items-start justify-between gap-2 mb-2">
            <span class="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-sky-50 dark:bg-sky-950/80 text-sky-700 dark:text-sky-300 border border-sky-200 dark:border-sky-900/60">
              ${salt.therapeuticCategory}
            </span>
            <span class="text-[11px] text-slate-400 font-mono">
              ${salt.brands.length} Brands
            </span>
          </div>

          <h4 class="text-lg font-heading font-bold text-slate-900 dark:text-white mb-1">
            ${salt.saltName}
          </h4>
          <p class="text-xs text-slate-500 dark:text-slate-400 mb-3 line-clamp-1">
            Chemical: ${salt.chemicalClass}
          </p>

          <!-- Indication Badges -->
          <div class="mb-4">
            <span class="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block mb-1.5">Primary Indications:</span>
            <div class="space-y-1">
              ${salt.indications.slice(0, 2).map(ind => `
                <div class="text-xs text-slate-700 dark:text-slate-300 flex items-start gap-1.5">
                  <i data-lucide="check" class="w-3.5 h-3.5 text-emerald-500 mt-0.5 shrink-0"></i>
                  <span class="line-clamp-1">${ind}</span>
                </div>
              `).join("")}
            </div>
          </div>

          <!-- Quick Brand Preview -->
          <div class="mb-4 pt-3 border-t border-slate-100 dark:border-slate-800/80">
            <span class="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block mb-1.5">Market Brands:</span>
            <div class="flex flex-wrap gap-1.5">
              ${salt.brands.slice(0, 3).map(b => `
                <span class="text-[11px] bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 px-2 py-0.5 rounded font-medium">
                  ${b.name}
                </span>
              `).join("")}
              ${salt.brands.length > 3 ? `<span class="text-[10px] text-slate-400 self-center">+${salt.brands.length - 3}</span>` : ''}
            </div>
          </div>
        </div>

        <div class="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between gap-2 mt-auto">
          <div class="text-xs text-slate-500 dark:text-slate-400">
            <span class="block font-medium text-slate-700 dark:text-slate-300">Adult: ${salt.adultDosing.standardSingleDose.split(" ")[0]} ${salt.adultDosing.standardSingleDose.split(" ")[1] || ""}</span>
          </div>
          <button type="button" class="view-med-modal-btn touch-target px-3 py-1.5 rounded-xl bg-sky-50 hover:bg-sky-100 dark:bg-sky-950/60 dark:hover:bg-sky-900/60 text-sky-700 dark:text-sky-300 text-xs font-semibold flex items-center gap-1.5 transition-colors" data-salt-id="${salt.id}">
            <span>Details & Dose</span>
            <i data-lucide="arrow-right" class="w-3.5 h-3.5"></i>
          </button>
        </div>
      `;

      searchResultsGrid.appendChild(card);
    });

    // Attach click triggers
    document.querySelectorAll(".view-med-modal-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        const id = btn.getAttribute("data-salt-id");
        openSaltModal(id);
      });
    });

    refreshIcons();
  };

  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      state.searchQuery = e.target.value;
      if (clearSearchBtn) {
        if (state.searchQuery) clearSearchBtn.classList.remove("hidden");
        else clearSearchBtn.classList.add("hidden");
      }
      filterAndRenderMedicines();
    });
  }

  if (clearSearchBtn) {
    clearSearchBtn.addEventListener("click", () => {
      searchInput.value = "";
      state.searchQuery = "";
      clearSearchBtn.classList.add("hidden");
      filterAndRenderMedicines();
      searchInput.focus();
    });
  }

  categoryFilters.forEach(btn => {
    btn.addEventListener("click", () => {
      categoryFilters.forEach(b => {
        b.classList.remove("bg-sky-600", "text-white", "shadow-sm");
        b.classList.add("bg-white", "dark:bg-slate-900", "text-slate-600", "dark:text-slate-300", "border-slate-200", "dark:border-slate-800");
      });
      btn.classList.remove("bg-white", "dark:bg-slate-900", "text-slate-600", "dark:text-slate-300", "border-slate-200", "dark:border-slate-800");
      btn.classList.add("bg-sky-600", "text-white", "shadow-sm");

      state.selectedCategory = btn.getAttribute("data-category");
      filterAndRenderMedicines();
    });
  });

  // --------------------------------------------------------------------------
  // Deep-Dive Modal Drawer Controller with Embedded Sandbox
  // --------------------------------------------------------------------------
  const saltModal = document.getElementById("salt-detail-modal");
  const modalCloseBtn = document.getElementById("modal-close-btn");
  const modalContentContainer = document.getElementById("modal-dynamic-content");

  const openSaltModal = (saltId) => {
    const salt = CLINICAL_DATA.salts[saltId];
    if (!salt || !saltModal || !modalContentContainer) return;

    state.activeModalSalt = salt;

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

    let sideEffectsCommon = salt.sideEffects.common.map(se => `
      <span class="text-xs px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-medium">
        ${se}
      </span>
    `).join("");

    let sideEffectsSerious = salt.sideEffects.serious.map(se => `
      <span class="text-xs px-2.5 py-1 rounded-lg bg-rose-50 dark:bg-rose-950/60 text-rose-700 dark:text-rose-300 font-medium border border-rose-200 dark:border-rose-900/40">
        ${se}
      </span>
    `).join("");

    let contraindicationsHtml = salt.contraindications.map(ci => `
      <li class="flex items-start gap-2 text-xs text-rose-900 dark:text-rose-200">
        <i data-lucide="x-circle" class="w-4 h-4 text-rose-500 shrink-0 mt-0.5"></i>
        <span>${ci}</span>
      </li>
    `).join("");

    modalContentContainer.innerHTML = `
      <div class="mb-6">
        <div class="flex flex-wrap items-center gap-2 mb-2">
          <span class="text-xs font-bold px-2.5 py-0.5 rounded-full bg-sky-100 dark:bg-sky-950/80 text-sky-800 dark:text-sky-300">
            ${salt.therapeuticCategory}
          </span>
          <span class="text-xs text-slate-500 dark:text-slate-400">
            Chemical Class: ${salt.chemicalClass}
          </span>
          ${salt.allergyClass !== "None" ? `<span class="text-xs font-semibold px-2 py-0.5 rounded bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300">${salt.allergyClass}</span>` : ''}
        </div>
        <h3 class="text-2xl font-heading font-bold text-slate-900 dark:text-white">${salt.saltName}</h3>
      </div>

      <!-- Quick Interactive Dose Sandbox inside Modal -->
      <div class="p-4 rounded-2xl bg-gradient-to-br from-sky-50 to-indigo-50 dark:from-sky-950/40 dark:to-slate-900 border border-sky-100 dark:border-sky-900/60 mb-6">
        <div class="flex items-center justify-between mb-3">
          <h4 class="font-heading font-bold text-sm text-sky-900 dark:text-sky-200 flex items-center gap-1.5">
            <i data-lucide="calculator" class="w-4 h-4 text-sky-600"></i>
            Live Dose Calculator for ${salt.saltName.split(" ")[0]}
          </h4>
          <span class="text-[11px] text-slate-500 dark:text-slate-400">Drag sliders to test dose</span>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
          <div>
            <div class="flex justify-between text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
              <span>Patient Age:</span>
              <span id="modal-calc-age-label" class="font-bold text-sky-600">8 yrs</span>
            </div>
            <input type="range" id="modal-calc-age-slider" min="1" max="90" value="8" class="w-full">
          </div>
          <div>
            <div class="flex justify-between text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
              <span>Weight:</span>
              <span id="modal-calc-weight-label" class="font-bold text-sky-600">25 kg</span>
            </div>
            <input type="range" id="modal-calc-weight-slider" min="3" max="120" value="25" class="w-full">
          </div>
        </div>

        <div id="modal-calc-result-box" class="p-3 rounded-xl bg-white dark:bg-slate-900 border border-sky-200 dark:border-sky-900 text-xs">
          <!-- Populated by JS -->
        </div>
      </div>

      <!-- Indications & Problems used for -->
      <div class="mb-6">
        <h4 class="text-sm font-heading font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-2.5 flex items-center gap-2">
          <i data-lucide="stethoscope" class="w-4 h-4 text-sky-600"></i> In Which Problems & Diseases It Is Used:
        </h4>
        <ul class="space-y-2 bg-slate-50 dark:bg-slate-800/40 p-4 rounded-xl border border-slate-200 dark:border-slate-800">
          ${indicationsHtml}
        </ul>
      </div>

      <!-- Mechanism of Action -->
      <div class="mb-6">
        <h4 class="text-sm font-heading font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-2.5 flex items-center gap-2">
          <i data-lucide="activity" class="w-4 h-4 text-emerald-600"></i> Mechanism of Action (How It Works):
        </h4>
        <div class="text-xs text-slate-700 dark:text-slate-300 leading-relaxed bg-slate-50 dark:bg-slate-800/40 p-4 rounded-xl border border-slate-200 dark:border-slate-800">
          ${salt.mechanism}
        </div>
      </div>

      <!-- Commercial Brand Formulations -->
      <div class="mb-6">
        <h4 class="text-sm font-heading font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-2.5 flex items-center gap-2">
          <i data-lucide="building-2" class="w-4 h-4 text-indigo-600"></i> Commercial Brands & Strengths:
        </h4>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          ${brandsHtml}
        </div>
      </div>

      <!-- Side Effects & Warnings -->
      <div class="mb-6">
        <h4 class="text-sm font-heading font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-2.5 flex items-center gap-2">
          <i data-lucide="alert-triangle" class="w-4 h-4 text-amber-500"></i> Possible Side Effects:
        </h4>
        <div class="space-y-3">
          <div>
            <span class="text-[11px] text-slate-400 font-semibold block mb-1.5">Common / Mild:</span>
            <div class="flex flex-wrap gap-1.5">
              ${sideEffectsCommon}
            </div>
          </div>
          <div>
            <span class="text-[11px] text-rose-500 font-semibold block mb-1.5">Serious (Stop & Consult Doctor):</span>
            <div class="flex flex-wrap gap-1.5">
              ${sideEffectsSerious}
            </div>
          </div>
        </div>
      </div>

      <!-- Contraindications -->
      <div class="mb-6">
        <h4 class="text-sm font-heading font-bold text-rose-700 dark:text-rose-400 uppercase tracking-wider mb-2.5 flex items-center gap-2">
          <i data-lucide="shield-x" class="w-4 h-4 text-rose-600"></i> Contraindications (When NOT to Use):
        </h4>
        <ul class="space-y-2 bg-rose-50/50 dark:bg-rose-950/20 p-4 rounded-xl border border-rose-200 dark:border-rose-900/40">
          ${contraindicationsHtml}
        </ul>
      </div>
    `;

    saltModal.classList.remove("hidden");
    document.body.style.overflow = "hidden";

    // Setup interactive calculator inside modal
    const modalAgeSlider = document.getElementById("modal-calc-age-slider");
    const modalWeightSlider = document.getElementById("modal-calc-weight-slider");
    const modalAgeLabel = document.getElementById("modal-calc-age-label");
    const modalWeightLabel = document.getElementById("modal-calc-weight-label");
    const modalResultBox = document.getElementById("modal-calc-result-box");

    const updateModalDose = () => {
      if (!modalAgeSlider || !modalWeightSlider || !modalResultBox) return;
      const age = parseInt(modalAgeSlider.value);
      const weight = parseInt(modalWeightSlider.value);
      modalAgeLabel.textContent = `${age} yrs`;
      modalWeightLabel.textContent = `${weight} kg`;

      const isPed = age < 12 || weight < 40;
      let resultHtml = "";

      if (isPed && salt.pediatricDosing.minMgPerKg > 0) {
        const minMg = Math.round(weight * salt.pediatricDosing.minMgPerKg);
        const maxMg = Math.round(weight * salt.pediatricDosing.maxMgPerKg);
        const maxDay = Math.round(weight * salt.pediatricDosing.maxDailyCeilingPerKg);

        let syrupText = "";
        if (salt.pediatricDosing.liquidFormulations && salt.pediatricDosing.liquidFormulations.length > 0) {
          const form = salt.pediatricDosing.liquidFormulations[0];
          const ml = Math.round((minMg / form.perMlMg) * 10) / 10;
          syrupText = `<div class="text-sky-700 dark:text-sky-300 font-semibold mt-1">Liquid measure: ${ml} ml of ${form.name} (${form.strength})</div>`;
        }

        resultHtml = `
          <div class="font-bold text-slate-900 dark:text-white">
            Pediatric Dose: ${minMg === maxMg ? `${minMg} mg` : `${minMg} mg – ${maxMg} mg`} per dose
          </div>
          <div class="text-slate-500 dark:text-slate-400 mt-0.5">${salt.pediatricDosing.frequency}</div>
          ${syrupText}
          <div class="text-[11px] text-slate-400 mt-1">24h Safe Maximum: ${maxDay} mg/day</div>
        `;
      } else {
        resultHtml = `
          <div class="font-bold text-slate-900 dark:text-white">
            Adult Standard Dose: ${salt.adultDosing.standardSingleDose}
          </div>
          <div class="text-slate-500 dark:text-slate-400 mt-0.5">${salt.adultDosing.frequency}</div>
          <div class="text-[11px] text-slate-400 mt-1">24h Ceiling: ${salt.adultDosing.maxDailyCeiling}</div>
        `;
      }

      modalResultBox.innerHTML = resultHtml;
    };

    if (modalAgeSlider) modalAgeSlider.addEventListener("input", updateModalDose);
    if (modalWeightSlider) modalWeightSlider.addEventListener("input", updateModalDose);
    updateModalDose();

    refreshIcons();
  };

  const closeSaltModal = () => {
    if (!saltModal) return;
    saltModal.classList.add("hidden");
    document.body.style.overflow = "";
    state.activeModalSalt = null;
  };

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener("click", closeSaltModal);
  }
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

  // --------------------------------------------------------------------------
  // Homepage Dosage Sandbox Controller
  // --------------------------------------------------------------------------
  const sandboxSaltSelect = document.getElementById("sandbox-salt-select");
  const sandboxAgeSlider = document.getElementById("sandbox-age-slider");
  const sandboxWeightSlider = document.getElementById("sandbox-weight-slider");
  const sandboxAgeVal = document.getElementById("sandbox-age-val");
  const sandboxWeightVal = document.getElementById("sandbox-weight-val");
  const sandboxDoseOutput = document.getElementById("sandbox-dose-output");
  const sandboxScheduleOutput = document.getElementById("sandbox-schedule-output");
  const sandboxLiquidOutput = document.getElementById("sandbox-liquid-output");
  const sandboxMaxOutput = document.getElementById("sandbox-max-output");
  const sandboxBrandsOutput = document.getElementById("sandbox-brands-output");

  const populateSandboxSalts = () => {
    if (!sandboxSaltSelect) return;
    sandboxSaltSelect.innerHTML = "";
    Object.values(CLINICAL_DATA.salts).forEach(salt => {
      const opt = document.createElement("option");
      opt.value = salt.id;
      opt.textContent = `${salt.saltName} (${salt.therapeuticCategory})`;
      if (salt.id === state.sandbox.saltId) opt.selected = true;
      sandboxSaltSelect.appendChild(opt);
    });
  };

  const updateSandboxCalculation = () => {
    if (!sandboxDoseOutput) return;

    const salt = CLINICAL_DATA.salts[state.sandbox.saltId];
    if (!salt) return;

    const age = state.sandbox.age;
    const weight = state.sandbox.weight;
    const isPediatric = age < 12 || weight < 40;

    if (sandboxAgeVal) sandboxAgeVal.textContent = `${age} yrs`;
    if (sandboxWeightVal) sandboxWeightVal.textContent = `${weight} kg`;

    if (isPediatric && salt.pediatricDosing.minMgPerKg > 0) {
      const minDose = Math.round(weight * salt.pediatricDosing.minMgPerKg);
      const maxDose = Math.round(weight * salt.pediatricDosing.maxMgPerKg);
      const max24h = Math.round(weight * salt.pediatricDosing.maxDailyCeilingPerKg);

      sandboxDoseOutput.innerHTML = minDose === maxDose 
        ? `<strong>${minDose} mg</strong>` 
        : `<strong>${minDose} – ${maxDose} mg</strong>`;
      
      sandboxScheduleOutput.textContent = salt.pediatricDosing.frequency;
      sandboxMaxOutput.innerHTML = `Max 24h: <strong>${max24h} mg</strong>`;

      if (salt.pediatricDosing.liquidFormulations && salt.pediatricDosing.liquidFormulations.length > 0) {
        const form = salt.pediatricDosing.liquidFormulations[0];
        const ml = Math.round((minDose / form.perMlMg) * 10) / 10;
        sandboxLiquidOutput.innerHTML = `Give <strong>${ml} ml</strong> of ${form.strength}`;
        sandboxLiquidOutput.parentElement.classList.remove("hidden");
      } else {
        sandboxLiquidOutput.parentElement.classList.add("hidden");
      }
    } else if (isPediatric && salt.pediatricDosing.minMgPerKg === 0) {
      sandboxDoseOutput.innerHTML = `<span class="text-sm">${salt.pediatricDosing.formulaPerKg}</span>`;
      sandboxScheduleOutput.textContent = salt.pediatricDosing.frequency || "See doctor";
      sandboxMaxOutput.textContent = salt.pediatricDosing.clinicalNote;
      sandboxLiquidOutput.parentElement.classList.add("hidden");
    } else {
      sandboxDoseOutput.innerHTML = `<strong>${salt.adultDosing.standardSingleDose}</strong>`;
      sandboxScheduleOutput.textContent = salt.adultDosing.frequency;
      sandboxMaxOutput.innerHTML = `Max 24h: <strong>${salt.adultDosing.maxDailyCeiling}</strong>`;
      sandboxLiquidOutput.parentElement.classList.add("hidden");
    }

    if (sandboxBrandsOutput) {
      sandboxBrandsOutput.innerHTML = salt.brands.slice(0, 3).map(b => `
        <span class="text-xs px-2.5 py-1 rounded-md bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-medium">
          ${b.name} (${b.strength})
        </span>
      `).join("");
    }
  };

  if (sandboxSaltSelect) {
    sandboxSaltSelect.addEventListener("change", (e) => {
      state.sandbox.saltId = e.target.value;
      updateSandboxCalculation();
    });
  }
  if (sandboxAgeSlider) {
    sandboxAgeSlider.addEventListener("input", (e) => {
      state.sandbox.age = parseInt(e.target.value);
      updateSandboxCalculation();
    });
  }
  if (sandboxWeightSlider) {
    sandboxWeightSlider.addEventListener("input", (e) => {
      state.sandbox.weight = parseInt(e.target.value);
      updateSandboxCalculation();
    });
  }

  // --------------------------------------------------------------------------
  // Initial Bootstrapping
  // --------------------------------------------------------------------------
  renderDiseaseChoices();
  filterAndRenderMedicines();
  populateSandboxSalts();
  updateSandboxCalculation();
  updateAgeBadge(state.survey.age);
  refreshIcons();
});
