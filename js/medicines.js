/**
 * HIMKIV Health & MedGuide - Medicine Directory Controller (js/medicines.js)
 * Manages Pharmacological Search Engine, Category Filtering,
 * Priority Ranking, 6-Item Incremental Pagination, and Clinical Reference Modal.
 * Integrates HKare Reference Dataset (131 rows, 18 categories).
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

  const t = (k, f = "") => f || k;

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
  // Data Source Preparation (HKare Dataset + Verified Monographs)
  // --------------------------------------------------------------------------
  const getMedicineRecords = () => {
    let baseMeds = [];
    if (CLINICAL_DATA.medicineReferences && CLINICAL_DATA.medicineReferences.length > 0) {
      baseMeds = [...CLINICAL_DATA.medicineReferences];
    } else {
      baseMeds = Object.values(CLINICAL_DATA.salts || {}).map(salt => ({
        id: salt.id,
        activeIngredient: salt.saltName,
        medicineClass: salt.chemicalClass,
        condition: salt.indications ? salt.indications[0] : "General",
        category: salt.therapeuticCategory,
        categorySlug: salt.categorySlug || "general",
        generalMedicalRole: salt.mechanism || "Evidence-based pharmacology",
        safetyNote: salt.pregnancyCaution || "Clinician guidance recommended",
        source: "WHO Model List of Essential Medicines",
        sourceType: "WHO EML"
      }));
    }

    // Merge custom medicines added via Admin Console (Instant Client Sync)
    try {
      const custom = JSON.parse(localStorage.getItem('himkiv_custom_medicines') || '[]');
      custom.forEach(cm => {
        const idx = baseMeds.findIndex(m => m.id === cm.id || (m.activeIngredient && cm.activeIngredient && m.activeIngredient.toLowerCase() === cm.activeIngredient.toLowerCase()));
        if (idx !== -1) baseMeds[idx] = { ...baseMeds[idx], ...cm };
        else baseMeds.unshift(cm);
      });
    } catch (e) {}

    return baseMeds;
  };

  // --------------------------------------------------------------------------
  // Search & Filter State
  // --------------------------------------------------------------------------
  const searchInput = document.getElementById("directory-search-input");
  const clearSearchBtn = document.getElementById("clear-directory-search");
  const sortSelect = document.getElementById("dir-sort-select");
  const resultsGrid = document.getElementById("directory-results-grid");
  const resultCountLabel = document.getElementById("directory-count-label");
  const resultCountLabelBottom = document.getElementById("directory-count-label-bottom");
  const showMoreBtn = document.getElementById("directory-show-more-btn");
  const categoryFilterContainer = document.getElementById("dir-category-filter-container");

  // 6-Items Incremental Pagination State
  let currentPageLimit = 6;
  const itemsPerPage = 6;

  // Read URL query parameter (e.g. medicines.html?q=oseltamivir&category=infectious)
  const urlParams = new URLSearchParams(window.location.search);
  let currentQuery = (urlParams.get("q") || "").trim().toLowerCase();
  let currentCategory = (urlParams.get("category") || "all").toLowerCase();
  let currentSort = "az";

  if (searchInput && currentQuery) {
    searchInput.value = currentQuery;
    if (clearSearchBtn) clearSearchBtn.classList.remove("hidden");
  }

  // --------------------------------------------------------------------------
  // Category Matching & Filter Setup
  // --------------------------------------------------------------------------
  const matchesCategory = (item, cat) => {
    if (!cat || cat === "all") return true;
    const cSlug = (item.categorySlug || "").toLowerCase();
    const cName = (item.category || "").toLowerCase();
    const cond = (item.condition || "").toLowerCase();
    const mClass = (item.medicineClass || "").toLowerCase();
    const active = (item.activeIngredient || "").toLowerCase();
    const brands = (item.brandNames || "").toLowerCase();

    switch (cat) {
      case "cardiovascular":
        return cSlug === "cardiovascular" || cName.includes("cardio") || cName.includes("heart") ||
               mClass.includes("cardio") || mClass.includes("antiplatelet") || mClass.includes("anticoagulant") ||
               mClass.includes("thrombolytic") || mClass.includes("statin") || mClass.includes("beta blocker") ||
               mClass.includes("ace inhibitor") || mClass.includes("arb") || mClass.includes("calcium-channel") ||
               mClass.includes("antianginal") || mClass.includes("nitrate") || mClass.includes("diuretic") ||
               mClass.includes("glycoside") || mClass.includes("antiarrhythmic") ||
               cond.includes("coronary") || cond.includes("heart") || cond.includes("angina") || cond.includes("myocardial") ||
               cond.includes("atherosclerosis") || cond.includes("cardiovascular") || cond.includes("hypertension") ||
               cond.includes("stroke") || cond.includes("ischemic") || cond.includes("tia") ||
               cond.includes("atrial fibrillation") || cond.includes("thrombosis") || cond.includes("cholesterol");

      case "cardiac-bp":
        return cSlug === "cardiovascular" || cName.includes("cardio") || cond.includes("hypertension") ||
               cond.includes("blood pressure") || cond.includes("preeclampsia") || mClass.includes("antihypertensive") ||
               mClass.includes("calcium-channel") || mClass.includes("ace inhibitor") || mClass.includes("arb") ||
               mClass.includes("beta blocker") || mClass.includes("diuretic");

      case "pain-fever":
        return cSlug === "pain" || cSlug === "emergency-supportive" || cName.includes("pain") ||
               mClass.includes("analgesic") || mClass.includes("antipyretic") || mClass.includes("nsaid") ||
               mClass.includes("muscle relaxant") ||
               cond.includes("fever") || cond.includes("pain") || cond.includes("headache") || cond.includes("migraine") ||
               cond.includes("osteoarthritis") || cond.includes("arthritis") || cond.includes("gout");

      case "antibiotics":
        return mClass.includes("antibiotic") || mClass.includes("antibacterial") || mClass.includes("antimicrobial") ||
               mClass.includes("penicillin") || mClass.includes("cephalosporin") || mClass.includes("macrolide") ||
               mClass.includes("fluoroquinolone") || mClass.includes("tetracycline") || mClass.includes("carbapenem") ||
               mClass.includes("aminoglycoside") || mClass.includes("nitroimidazole") ||
               (cSlug === "infectious" && !mClass.includes("antiviral") && !mClass.includes("antifungal") && !mClass.includes("antimalarial") && !mClass.includes("anthelmintic"));

      case "acidity-gerd":
        return cSlug === "gastrointestinal" || cName.includes("gastro") || cond.includes("gerd") ||
               cond.includes("acid") || cond.includes("reflux") || cond.includes("ulcer") || cond.includes("dyspepsia") ||
               cond.includes("gastritis") || cond.includes("gas") || cond.includes("bloating") || cond.includes("flatulence") ||
               mClass.includes("ppi") || mClass.includes("proton pump") || mClass.includes("antacid") ||
               mClass.includes("h2 blocker") || mClass.includes("antiemetic") || mClass.includes("antiflatulent") ||
               mClass.includes("digestive");

      case "allergy-cold":
        return cond.includes("cold") || cond.includes("cough") || cond.includes("allergy") || cond.includes("allergic") ||
               cond.includes("rhinitis") || cond.includes("bronchitis") || cond.includes("asthma") ||
               mClass.includes("antihistamine") || mClass.includes("decongestant") || mClass.includes("bronchodilator") ||
               mClass.includes("expectorant") || mClass.includes("leukotriene") || mClass.includes("mast cell");

      case "diabetes":
        return cSlug === "endocrine" || cName.includes("endocrine") || cond.includes("diabetes") ||
               cond.includes("hyperglycemia") || cond.includes("obesity") || cond.includes("thyroid") ||
               mClass.includes("antidiabetic") || mClass.includes("biguanide") || mClass.includes("sulfonylurea") ||
               mClass.includes("sglt2") || mClass.includes("dpp-4") || mClass.includes("insulin") ||
               mClass.includes("glp-1");

      case "mental-neuro":
        return cSlug === "mental-health" || cSlug === "neurological" || cName.includes("mental") || cName.includes("neuro") ||
               cond.includes("depression") || cond.includes("anxiety") || cond.includes("schizophrenia") ||
               cond.includes("bipolar") || cond.includes("epilepsy") || cond.includes("parkinson") ||
               cond.includes("alzheimer") || cond.includes("migraine") || cond.includes("insomnia") ||
               mClass.includes("antidepressant") || mClass.includes("antipsychotic") || mClass.includes("mood stabilizer") ||
               mClass.includes("anticonvulsant") || mClass.includes("antiepileptic") || mClass.includes("dopaminergic") ||
               mClass.includes("cholinesterase") || mClass.includes("triptan") || mClass.includes("anxiolytic");

      case "oncology":
        return cSlug === "oncology" || cName.includes("cancer") || cName.includes("oncol") ||
               cond.includes("cancer") || cond.includes("carcinoma") || cond.includes("breast") ||
               cond.includes("lung cancer") || cond.includes("prostate") || cond.includes("colon") ||
               cond.includes("leukemia") || cond.includes("lymphoma") || cond.includes("tumor") ||
               mClass.includes("chemotherapy") || mClass.includes("antineoplastic") || mClass.includes("alkylating") ||
               mClass.includes("antimetabolite") || mClass.includes("aromatase") || mClass.includes("serm") ||
               mClass.includes("monoclonal") || mClass.includes("tyrosine kinase") || mClass.includes("cytotoxic");

      case "kidney-urinary":
        return cSlug === "kidney-urinary" || cName.includes("kidney") || cName.includes("urinary") || cName.includes("renal") ||
               cond.includes("kidney") || cond.includes("ckd") || cond.includes("nephritis") ||
               cond.includes("stone") || cond.includes("uti") || cond.includes("urinary") || cond.includes("glomerulo") ||
               mClass.includes("alkalinizer") || mClass.includes("phosphate") || mClass.includes("renal");

      case "skin-autoimmune":
        return cSlug === "dermatological" || cSlug === "autoimmune" || cSlug === "musculoskeletal" ||
               cName.includes("skin") || cName.includes("dermatol") || cName.includes("autoimmune") ||
               cond.includes("eczema") || cond.includes("psoriasis") || cond.includes("acne") ||
               cond.includes("vitiligo") || cond.includes("lupus") || cond.includes("rheumatoid") ||
               cond.includes("multiple sclerosis") || cond.includes("sclerosis") || cond.includes("arthritis") ||
               mClass.includes("topical retinoid") || mClass.includes("keratolytic") || mClass.includes("corticosteroid") ||
               mClass.includes("psoralen") || mClass.includes("dmard") || mClass.includes("immunosuppressive") ||
               mClass.includes("immunomodulator");

      case "respiratory-lungs":
        return cSlug === "respiratory" || cName.includes("respiratory") || cName.includes("lung") ||
               cond.includes("asthma") || cond.includes("copd") || cond.includes("pneumonia") ||
               cond.includes("fibrosis") || cond.includes("bronchitis") || cond.includes("tuberculosis") ||
               mClass.includes("bronchodilator") || mClass.includes("inhaled corticosteroid") ||
               mClass.includes("antifibrotic") || mClass.includes("expectorant") || mClass.includes("antitubercular");

      default:
        return cSlug === cat || cName === cat || cond.toLowerCase().includes(cat);
    }
  };

  const updateCategoryFilterStyles = () => {
    if (!categoryFilterContainer) return;
    const buttons = categoryFilterContainer.querySelectorAll(".dir-cat-filter");
    buttons.forEach(btn => {
      const cat = btn.getAttribute("data-category");
      if (cat === currentCategory) {
        btn.className = "dir-cat-filter touch-target px-3.5 py-1.5 rounded-full text-xs font-semibold bg-indigo-600 text-white shadow-xs transition-all cursor-pointer";
      } else {
        btn.className = "dir-cat-filter touch-target px-3.5 py-1.5 rounded-full text-xs font-semibold bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:border-indigo-400 transition-all cursor-pointer";
      }
    });
  };

  const setupCategoryFilters = () => {
    if (!categoryFilterContainer) return;
    const buttons = categoryFilterContainer.querySelectorAll(".dir-cat-filter");
    buttons.forEach(btn => {
      btn.addEventListener("click", () => {
        currentCategory = btn.getAttribute("data-category") || "all";
        currentPageLimit = 6;
        updateCategoryFilterStyles();
        filterAndRenderDirectory();
      });
    });
    updateCategoryFilterStyles();
  };

  // --------------------------------------------------------------------------
  // Priority Search & Filter Engine
  // Priority Order:
  // 1. Exact condition match
  // 2. Exact active ingredient/salt match
  // 3. Exact medicine class match
  // 4. Partial condition match
  // 5. Partial active ingredient match
  // 6. Partial medicine class match
  // 7. Category match
  // 8. General medical role / safety note match
  // --------------------------------------------------------------------------
  const filterAndRenderDirectory = () => {
    if (!resultsGrid) return;
    const allRecords = getMedicineRecords();

    // 1. Filter by category
    let filtered = allRecords.filter(item => {
      return matchesCategory(item, currentCategory);
    });

    // 2. Search & Score
    if (currentQuery) {
      let q = currentQuery.trim().toLowerCase();
      if (q.includes("losse")) q = q.replace(/losse/g, "loose");
      const scored = [];

      filtered.forEach(item => {
        const cond = (item.condition || "").toLowerCase();
        const condIds = Array.isArray(item.conditionIds) ? item.conditionIds.join(" ").toLowerCase() : "";
        const active = (item.activeIngredient || "").toLowerCase();
        const brands = (item.brandNames || "").toLowerCase();
        const dosage = (item.dosageGuideline || "").toLowerCase();
        const mClass = (item.medicineClass || "").toLowerCase();
        const cat = (item.category || "").toLowerCase();
        const role = (item.generalMedicalRole || "").toLowerCase();
        const safety = (item.safetyNote || "").toLowerCase();

        let score = 0;

        // Exact & Leading matches
        if (brands === q) score = Math.max(score, 115);
        else if (active === q || active.startsWith(q + " ") || active.startsWith(q + "(") || active.startsWith(q + "/")) score = Math.max(score, 110);
        else if (cond === q || condIds === q || condIds.split(" ").includes(q)) score = Math.max(score, 100);
        else if (active.startsWith(q)) score = Math.max(score, 98);
        else if (brands.startsWith(q) || brands.includes(", " + q)) score = Math.max(score, 95);
        else if (brands.includes(q)) score = Math.max(score, 90);
        else if (cond.startsWith(q) || cond.includes(" " + q) || condIds.includes(q.replace(/\s+/g, "-"))) score = Math.max(score, 85);
        else if (active.includes(" " + q) || active.includes("+" + q) || active.includes("+ " + q)) score = Math.max(score, 75);
        else if (mClass === q) score = Math.max(score, 80);
        // Word token matching for multi-word queries (e.g. "stomach pain", "sore throat", "fever pain")
        const qWords = q.replace(/[^\w\s]/g, " ").split(/\s+/).filter(w => w.length > 2 && !["and", "the", "for", "with"].includes(w));
        if (qWords.length > 1) {
          const allInCond = qWords.every(w => cond.includes(w) || condIds.includes(w));
          if (allInCond) score = Math.max(score, 80);
          const allInBrandOrActive = qWords.every(w => brands.includes(w) || active.includes(w));
          if (allInBrandOrActive) score = Math.max(score, 85);
        }
        // Partial substring matches
        else if (cond.includes(q) || condIds.includes(q)) score = Math.max(score, 65);
        else if (active.includes(q)) score = Math.max(score, 60);
        else if (mClass.includes(q)) score = Math.max(score, 50);
        else if (dosage.includes(q)) score = Math.max(score, 40);
        else if (cat.includes(q)) score = Math.max(score, 35);
        else if (role.includes(q)) score = Math.max(score, 25);
        else if (safety.includes(q)) score = Math.max(score, 15);

        if (score > 0) {
          scored.push({ item, score });
        }
      });

      // Sort by score descending
      scored.sort((a, b) => {
        if (b.score !== a.score) return b.score - a.score;
        return a.item.activeIngredient.localeCompare(b.item.activeIngredient);
      });

      filtered = scored.map(s => s.item);
    } else {
      // Sorting when no search query
      if (currentSort === "az") {
        filtered.sort((a, b) => a.activeIngredient.localeCompare(b.activeIngredient));
      } else if (currentSort === "za") {
        filtered.sort((a, b) => b.activeIngredient.localeCompare(a.activeIngredient));
      } else if (currentSort === "condition") {
        filtered.sort((a, b) => (a.condition || "").localeCompare(b.condition || ""));
      } else if (currentSort === "brands") {
        filtered.sort((a, b) => (b.brandNames || "").length - (a.brandNames || "").length);
      }
    }

    const totalMatches = filtered.length;
    const visibleMatches = filtered.slice(0, currentPageLimit);
    const countText = `Showing ${visibleMatches.length} of ${totalMatches} medicines`;

    if (resultCountLabel) {
      resultCountLabel.textContent = countText;
    }
    if (resultCountLabelBottom) {
      resultCountLabelBottom.textContent = countText;
    }

    // Show More (+6) Button Visibility
    if (showMoreBtn) {
      if (currentPageLimit < totalMatches) {
        showMoreBtn.classList.remove("hidden");
        showMoreBtn.style.display = "inline-flex";
      } else {
        showMoreBtn.classList.add("hidden");
        showMoreBtn.style.display = "none";
      }
    }

    resultsGrid.innerHTML = "";

    if (totalMatches === 0) {
      resultsGrid.innerHTML = `
        <div class="col-span-full py-16 text-center text-slate-400 dark:text-slate-500">
          <i data-lucide="flask-conical-off" class="w-12 h-12 mx-auto mb-3 opacity-40 text-slate-400"></i>
          <h3 class="text-base font-heading font-bold text-slate-700 dark:text-slate-300">No matching medicines found</h3>
          <p class="text-xs text-slate-500 dark:text-slate-400 mt-1 max-w-md mx-auto">
            Try searching for another brand name, active salt, or condition (e.g. 'Oseltamivir', 'Influenza', 'Paracetamol', 'Dengue', 'Dolo', 'Augmentin').
          </p>
        </div>
      `;
      refreshIcons();
      return;
    }

    visibleMatches.forEach(med => {
      const card = document.createElement("div");
      card.className = "interactive-card border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 rounded-3xl shadow-xs flex flex-col justify-between hover:border-indigo-400 dark:hover:border-indigo-700 transition-all cursor-pointer";
      card.addEventListener("click", () => {
        openMedicineModal(med.id);
      });

      card.innerHTML = `
        <div>
          <div class="flex items-start justify-between gap-2 mb-3">
            <span class="text-xs font-bold px-2.5 py-0.5 rounded-full bg-indigo-50 dark:bg-indigo-950/80 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-900/60">
              ${med.medicineClass}
            </span>
            <span class="text-xs text-slate-500 dark:text-slate-400 font-mono font-medium">
              ${med.category}
            </span>
          </div>

          <h3 class="text-xl font-heading font-bold text-slate-900 dark:text-white mb-1 leading-snug">
            ${med.activeIngredient}
          </h3>
          <p class="text-xs text-slate-600 dark:text-slate-400 mb-3 line-clamp-1">
            <strong class="text-slate-700 dark:text-slate-300 font-semibold">Related Condition:</strong> 
            <span class="text-indigo-600 dark:text-indigo-400 font-medium">${med.condition}</span>
          </p>

          <!-- Commercial Market Brand Names -->
          ${med.brandNames ? `
            <div class="mb-3 p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-800 text-xs">
              <span class="text-[10px] font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider block mb-0.5 flex items-center gap-1">
                <i data-lucide="tag" class="w-3 h-3"></i> Commercial Market Brands:
              </span>
              <p class="font-bold text-slate-900 dark:text-white text-xs leading-normal">
                ${med.brandNames}
              </p>
            </div>
          ` : ''}

          <!-- General Medical Role (Indications / Kis Kaam Aati Hai) -->
          <div class="mb-3">
            <span class="text-[10px] font-semibold text-slate-400 uppercase tracking-wider block mb-1">
              Indications / Therapeutic Use:
            </span>
            <p class="text-xs text-slate-700 dark:text-slate-300 leading-relaxed font-medium line-clamp-3">
              ${med.generalMedicalRole}
            </p>
          </div>

          <!-- Recommended Posology & Dosage (Kitni Dose Leni Hai) -->
          ${med.dosageGuideline ? `
            <div class="mb-3 p-2.5 rounded-xl bg-indigo-50/70 dark:bg-indigo-950/40 border border-indigo-100 dark:border-indigo-900/50 text-xs">
              <span class="text-[10px] font-bold text-indigo-700 dark:text-indigo-300 uppercase tracking-wider block mb-1 flex items-center gap-1">
                <i data-lucide="clock" class="w-3 h-3"></i> Recommended Dosage Guideline:
              </span>
              <p class="text-xs font-semibold text-slate-800 dark:text-slate-200 leading-normal">
                ${med.dosageGuideline}
              </p>
            </div>
          ` : ''}

          <!-- Clinical Safety Note (High Priority Amber Alert) -->
          <div class="mb-4 p-3 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800/60 text-amber-900 dark:text-amber-200 text-xs">
            <div class="flex items-center gap-1.5 mb-1 font-bold text-[11px] uppercase tracking-wide text-amber-800 dark:text-amber-300">
              <i data-lucide="shield-alert" class="w-3.5 h-3.5 text-amber-600 shrink-0"></i>
              <span>Clinical Safety Guidance:</span>
            </div>
            <p class="text-[11px] leading-relaxed font-medium pl-5">${med.safetyNote}</p>
          </div>
        </div>

        <!-- Card Footer -->
        <div class="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between gap-3 mt-auto">
          <div class="text-xs">
            <span class="text-[10px] text-slate-400 font-semibold block uppercase tracking-wider">Source</span>
            <span class="font-semibold text-slate-600 dark:text-slate-400 text-[11px]">HKare Reference Dataset</span>
          </div>
          
          <button type="button" class="view-med-modal-btn touch-target px-4 py-2 rounded-xl bg-indigo-50 hover:bg-indigo-100 dark:bg-indigo-950/60 dark:hover:bg-indigo-900/60 text-indigo-700 dark:text-indigo-300 text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer" data-med-id="${med.id}">
            <span>Inspect Reference</span>
            <i data-lucide="arrow-right" class="w-3.5 h-3.5"></i>
          </button>
        </div>
      `;

      resultsGrid.appendChild(card);
    });

    // Attach modal open handlers
    document.querySelectorAll(".view-med-modal-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        const id = btn.getAttribute("data-med-id");
        openMedicineModal(id);
      });
    });

    refreshIcons();
  };

  // --------------------------------------------------------------------------
  // Search and Sort Event Listeners
  // --------------------------------------------------------------------------
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      currentQuery = e.target.value.trim().toLowerCase();
      currentPageLimit = 6;
      if (clearSearchBtn) {
        if (currentQuery) clearSearchBtn.classList.remove("hidden");
        else clearSearchBtn.classList.add("hidden");
      }
      filterAndRenderDirectory();
    });
  }

  if (clearSearchBtn) {
    clearSearchBtn.addEventListener("click", () => {
      searchInput.value = "";
      currentQuery = "";
      currentPageLimit = 6;
      clearSearchBtn.classList.add("hidden");
      filterAndRenderDirectory();
      searchInput.focus();
    });
  }

  if (sortSelect) {
    sortSelect.addEventListener("change", (e) => {
      currentSort = e.target.value;
      currentPageLimit = 6;
      filterAndRenderDirectory();
    });
  }

  // Show More (+6) button listener
  if (showMoreBtn) {
    showMoreBtn.addEventListener("click", () => {
      currentPageLimit += 6;
      filterAndRenderDirectory();
    });
  }

  // --------------------------------------------------------------------------
  // Clinical Reference Monograph Modal
  // --------------------------------------------------------------------------
  const saltModal = document.getElementById("salt-detail-modal");
  const modalCloseBtn = document.getElementById("modal-close-btn");
  const modalContentContainer = document.getElementById("modal-dynamic-content");

  const openMedicineModal = (medId) => {
    const allRecords = getMedicineRecords();
    const med = allRecords.find(m => m.id === medId);
    if (!med || !saltModal || !modalContentContainer) return;

    // Check if matching condition has ICD-11 metadata
    const conditionObj = (CLINICAL_DATA.diseases || []).find(d => 
      d.name.toLowerCase() === (med.condition || "").toLowerCase()
    );

    // Check if verified pharmacology monograph exists in CLINICAL_DATA.salts
    const cleanSaltName = med.activeIngredient.split("/")[0].split("+")[0].replace(/\(.*\)/, "").trim().toLowerCase();
    const verifiedSalt = Object.values(CLINICAL_DATA.salts || {}).find(s => 
      s.saltName.toLowerCase().includes(cleanSaltName) || cleanSaltName.includes(s.id)
    );

    modalContentContainer.innerHTML = `
      <div class="mb-5">
        <div class="flex flex-wrap items-center gap-2 mb-2">
          <span class="text-xs font-bold px-2.5 py-0.5 rounded-full bg-indigo-100 dark:bg-indigo-950/80 text-indigo-800 dark:text-indigo-300">
            ${med.medicineClass}
          </span>
          <span class="text-xs text-slate-500 dark:text-slate-400 font-medium">${med.category}</span>
          ${conditionObj && conditionObj.icd11Code ? `
            <span class="text-xs font-mono font-bold px-2 py-0.5 rounded bg-sky-100 dark:bg-sky-950 text-sky-700 dark:text-sky-300 border border-sky-200 dark:border-sky-800">
              WHO ICD-11: ${conditionObj.icd11Code}
            </span>
          ` : ''}
        </div>
        <h3 class="text-2xl font-heading font-extrabold text-slate-900 dark:text-white">${med.activeIngredient}</h3>
      </div>

      <!-- Commercial Market Brand Names (Trade Names) -->
      ${med.brandNames ? `
        <div class="mb-5 p-4 rounded-2xl bg-indigo-50/70 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-900/60">
          <h4 class="text-xs font-heading font-bold text-indigo-900 dark:text-indigo-200 uppercase tracking-wider mb-2 flex items-center gap-2">
            <i data-lucide="tag" class="w-4 h-4 text-indigo-600"></i> Commercial Market Brands & Formulations:
          </h4>
          <p class="text-sm font-bold text-slate-900 dark:text-white leading-relaxed">
            ${med.brandNames}
          </p>
        </div>
      ` : ''}

      <!-- Standard Educational Posology & Dosage Guideline (Kitni Dose Leni Hai) -->
      ${med.dosageGuideline ? `
        <div class="mb-5 p-4 rounded-2xl bg-sky-50 dark:bg-sky-950/40 border border-sky-200 dark:border-sky-800">
          <h4 class="text-xs font-heading font-bold text-sky-900 dark:text-sky-200 uppercase tracking-wider mb-2 flex items-center gap-2">
            <i data-lucide="clock" class="w-4 h-4 text-sky-600"></i> Recommended Posology & Dosage Guideline:
          </h4>
          <p class="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-100 leading-relaxed">
            ${med.dosageGuideline}
          </p>
        </div>
      ` : ''}

      <!-- Clinical Safety Notice Banner (High Priority) -->
      <div class="mb-6 p-4 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-300 dark:border-amber-800 text-amber-900 dark:text-amber-200 text-xs">
        <div class="flex items-center gap-2 mb-1.5 font-bold uppercase tracking-wide text-amber-800 dark:text-amber-300">
          <i data-lucide="shield-alert" class="w-4 h-4 text-amber-600 shrink-0"></i>
          <span>Clinical Safety Guidance:</span>
        </div>
        <p class="text-xs leading-relaxed font-semibold pl-6">${med.safetyNote}</p>
      </div>

      <!-- Primary Indication & Related Problem (Kis Kaam Aati Hai) -->
      <div class="mb-5 p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800">
        <h4 class="text-xs font-heading font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-2 flex items-center gap-2">
          <i data-lucide="stethoscope" class="w-4 h-4 text-indigo-600"></i> Related Clinical Condition & Indications:
        </h4>
        <p class="text-sm font-bold text-indigo-700 dark:text-indigo-300 mb-1">${med.condition}</p>
        <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">${med.generalMedicalRole}</p>
        ${conditionObj && conditionObj.description ? `
          <p class="text-xs text-slate-500 dark:text-slate-400 mt-2 pt-2 border-t border-slate-200 dark:border-slate-700/60 leading-relaxed">
            ${conditionObj.description}
          </p>
        ` : ''}
      </div>

      <!-- Verified Pharmacology Details if Available -->
      ${verifiedSalt ? `
        <div class="mb-5 p-4 rounded-2xl bg-indigo-50/50 dark:bg-indigo-950/30 border border-indigo-200 dark:border-indigo-900/60">
          <div class="flex items-center justify-between mb-2">
            <h4 class="text-xs font-heading font-bold text-indigo-900 dark:text-indigo-200 uppercase tracking-wider flex items-center gap-2">
              <i data-lucide="flask-conical" class="w-4 h-4 text-indigo-600"></i> Verified Reference Posology Standards
            </h4>
            <a href="dosage-calculator.html" class="text-xs font-bold text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 flex items-center gap-1">
              Calculator <i data-lucide="arrow-up-right" class="w-3.5 h-3.5"></i>
            </a>
          </div>
          <div class="text-xs space-y-1.5 text-slate-700 dark:text-slate-300">
            <div><strong>Adult Single Dose:</strong> ${verifiedSalt.adultDosing.standardSingleDose}</div>
            <div><strong>Frequency:</strong> ${verifiedSalt.adultDosing.frequency}</div>
            <div><strong>Daily Maximum Ceiling:</strong> ${verifiedSalt.adultDosing.maxDailyCeiling}</div>
            ${verifiedSalt.pediatricDosing && verifiedSalt.pediatricDosing.minMgPerKg > 0 ? `
              <div class="pt-1.5 border-t border-indigo-100 dark:border-indigo-900/40">
                <strong>Pediatric Weight Ratio:</strong> ${verifiedSalt.pediatricDosing.formulaPerKg}
              </div>
            ` : ''}
          </div>
        </div>
      ` : ''}

      <!-- Where to Buy Online & Compare Prices (Affiliate Commerce Links) -->
      ${(() => {
        const brandNamesList = (med.brandNames || "").split(",").map(b => b.trim()).filter(Boolean);
        const primarySearchBrand = brandNamesList[0] || med.activeIngredient;
        const encodedBrand = encodeURIComponent(primarySearchBrand);

        const aff1mg = (med.affiliateLinks && med.affiliateLinks.find(a => a.platform && a.platform.includes('1mg'))) || {
          platform: 'Tata 1mg',
          url: `https://www.1mg.com/search/all?name=${encodedBrand}`,
          discount: 'Up to 20% OFF'
        };

        const affApollo = (med.affiliateLinks && med.affiliateLinks.find(a => a.platform && a.platform.includes('Apollo'))) || {
          platform: 'Apollo Pharmacy',
          url: `https://www.apollopharmacy.in/search-medicines/${encodedBrand}`,
          discount: 'Verified Authentic'
        };

        const affNetmeds = (med.affiliateLinks && med.affiliateLinks.find(a => a.platform && a.platform.includes('Netmeds'))) || {
          platform: 'Netmeds',
          url: `https://www.netmeds.com/catalogsearch/result/${encodedBrand}/all`,
          discount: 'Quick Delivery'
        };

        return `
          <div class="mb-5 p-4 rounded-2xl bg-gradient-to-br from-teal-50/80 via-emerald-50/40 to-slate-50 dark:from-slate-800/80 dark:via-teal-950/30 dark:to-slate-900 border border-teal-200/80 dark:border-teal-800/60">
            <div class="flex items-center justify-between mb-2.5">
              <h4 class="text-xs font-heading font-bold text-teal-950 dark:text-teal-200 uppercase tracking-wider flex items-center gap-1.5">
                <i data-lucide="shopping-bag" class="w-4 h-4 text-teal-600 dark:text-teal-400"></i>
                <span>Where to Buy Online &bull; Compare Prices</span>
              </h4>
              <span class="text-[10px] px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 font-bold border border-emerald-200 dark:border-emerald-800">
                Verified Pharmacies
              </span>
            </div>
            <p class="text-xs text-slate-600 dark:text-slate-400 mb-3 leading-relaxed">
              Compare prices and order genuine formulations of <strong class="text-slate-800 dark:text-slate-200">${primarySearchBrand}</strong> through certified digital pharmacies:
            </p>
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
              <!-- Tata 1mg -->
              <a href="${aff1mg.url}" target="_blank" rel="noopener noreferrer" class="group p-3 rounded-xl bg-white dark:bg-slate-800 border border-red-200/80 dark:border-red-900/50 hover:border-red-400 dark:hover:border-red-600 hover:shadow-sm transition-all flex flex-col justify-between">
                <div class="flex items-center justify-between mb-1.5">
                  <span class="text-xs font-bold text-red-600 dark:text-red-400 flex items-center gap-1">
                    <i data-lucide="shopping-cart" class="w-3.5 h-3.5"></i> Tata 1mg
                  </span>
                  <i data-lucide="external-link" class="w-3 h-3 text-slate-400 group-hover:text-red-500 transition-colors"></i>
                </div>
                <div class="text-[11px] text-slate-500 dark:text-slate-400">Buy ${primarySearchBrand}</div>
                <div class="mt-2 text-[10px] font-bold text-emerald-600 dark:text-emerald-400">${aff1mg.discount || 'Best Offer'}</div>
              </a>

              <!-- Apollo Pharmacy -->
              <a href="${affApollo.url}" target="_blank" rel="noopener noreferrer" class="group p-3 rounded-xl bg-white dark:bg-slate-800 border border-emerald-200/80 dark:border-emerald-900/50 hover:border-emerald-400 dark:hover:border-emerald-600 hover:shadow-sm transition-all flex flex-col justify-between">
                <div class="flex items-center justify-between mb-1.5">
                  <span class="text-xs font-bold text-emerald-700 dark:text-emerald-400 flex items-center gap-1">
                    <i data-lucide="shield-check" class="w-3.5 h-3.5"></i> Apollo
                  </span>
                  <i data-lucide="external-link" class="w-3 h-3 text-slate-400 group-hover:text-emerald-500 transition-colors"></i>
                </div>
                <div class="text-[11px] text-slate-500 dark:text-slate-400">Apollo 24|7 Delivery</div>
                <div class="mt-2 text-[10px] font-bold text-emerald-600 dark:text-emerald-400">${affApollo.discount || 'Authentic'}</div>
              </a>

              <!-- Netmeds -->
              <a href="${affNetmeds.url}" target="_blank" rel="noopener noreferrer" class="group p-3 rounded-xl bg-white dark:bg-slate-800 border border-blue-200/80 dark:border-blue-900/50 hover:border-blue-400 dark:hover:border-blue-600 hover:shadow-sm transition-all flex flex-col justify-between">
                <div class="flex items-center justify-between mb-1.5">
                  <span class="text-xs font-bold text-blue-600 dark:text-blue-400 flex items-center gap-1">
                    <i data-lucide="truck" class="w-3.5 h-3.5"></i> Netmeds
                  </span>
                  <i data-lucide="external-link" class="w-3 h-3 text-slate-400 group-hover:text-blue-500 transition-colors"></i>
                </div>
                <div class="text-[11px] text-slate-500 dark:text-slate-400">Pan-India Dispatch</div>
                <div class="mt-2 text-[10px] font-bold text-emerald-600 dark:text-emerald-400">${affNetmeds.discount || 'Quick Dispatch'}</div>
              </a>
            </div>
            <p class="text-[10px] text-slate-400 dark:text-slate-500 mt-2.5 text-center">
              Himkiv Health provides educational drug information and may earn referral commissions on pharmacy orders at no extra cost to you.
            </p>
          </div>
        `;
      })()}

      <!-- Educational Boundary & Disclaimer -->
      <div class="p-4 rounded-2xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-[11px] leading-relaxed mb-4">
        <strong>Educational & Reference Notice:</strong> This monograph is published strictly for healthcare reference, clinical pharmacology education, and decision support. It does not provide personalized medical diagnoses or binding prescriptions. Always consult a certified physician or licensed clinical pharmacist before initiating or modifying therapeutic regimens.
      </div>

      <!-- Provenance Information -->
      <div class="flex flex-wrap items-center justify-between gap-2 text-[11px] text-slate-400 border-t border-slate-200 dark:border-slate-800 pt-3">
        <span>Source: <strong>${med.sourceType || "HKare Reference Dataset"}</strong></span>
        <span>File: <code>${med.source || "HKare_Common_Disease_Medicine_Reference(1).csv"}</code></span>
      </div>
    `;

    saltModal.classList.remove("hidden");
    document.body.style.overflow = "hidden";
    refreshIcons();
  };

  if (modalCloseBtn && saltModal) {
    modalCloseBtn.addEventListener("click", () => {
      saltModal.classList.add("hidden");
      document.body.style.overflow = "";
    });
  }

  if (saltModal) {
    saltModal.addEventListener("click", (e) => {
      if (e.target === saltModal) {
        saltModal.classList.add("hidden");
        document.body.style.overflow = "";
      }
    });
  }

  // React to Storage Changes (Real-time updates when added in Admin Console)
  window.addEventListener("storage", (e) => {
    if (!e.key || e.key === "himkiv_custom_medicines" || e.key === "himkiv_last_sync") {
      filterAndRenderDirectory();
    }
  });

  window.addEventListener("himkiv_data_synced", () => {
    filterAndRenderDirectory();
  });

  // Initialize
  setupCategoryFilters();
  filterAndRenderDirectory();
});
