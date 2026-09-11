/**
 * HIMKIV Health & MedGuide - Medicine Directory Controller (js/medicines.js)
 * Manages Pharmacological Search Engine, Category Filtering,
 * Sorting, and Clinical Monograph Modal.
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
  // Search & Filter State
  // --------------------------------------------------------------------------
  const searchInput = document.getElementById("directory-search-input");
  const clearSearchBtn = document.getElementById("clear-directory-search");
  const categoryFilterBtns = document.querySelectorAll(".dir-cat-filter");
  const sortSelect = document.getElementById("dir-sort-select");
  const resultsGrid = document.getElementById("directory-results-grid");
  const resultCountLabel = document.getElementById("directory-count-label");

  // Read URL query parameter (e.g. medicines.html?q=dolo)
  const urlParams = new URLSearchParams(window.location.search);
  let currentQuery = (urlParams.get("q") || "").trim().toLowerCase();
  let currentCategory = (urlParams.get("category") || "all").toLowerCase();
  let currentSort = "az";

  if (searchInput && currentQuery) {
    searchInput.value = currentQuery;
    if (clearSearchBtn) clearSearchBtn.classList.remove("hidden");
  }

  // Update Category Buttons state based on URL
  if (currentCategory !== "all") {
    categoryFilterBtns.forEach(btn => {
      if (btn.getAttribute("data-category") === currentCategory) {
        btn.classList.remove("bg-white", "dark:bg-slate-900", "text-slate-600", "dark:text-slate-300");
        btn.classList.add("bg-indigo-600", "text-white");
      } else {
        btn.classList.remove("bg-indigo-600", "text-white");
        btn.classList.add("bg-white", "dark:bg-slate-900", "text-slate-600", "dark:text-slate-300");
      }
    });
  }

  const filterAndRenderDirectory = () => {
    if (!resultsGrid) return;
    const allSalts = Object.values(CLINICAL_DATA.salts);

    let matches = allSalts.filter(salt => {
      if (currentCategory !== "all" && salt.categorySlug !== currentCategory) {
        return false;
      }

      if (!currentQuery) return true;

      if (salt.saltName.toLowerCase().includes(currentQuery)) return true;
      if (salt.therapeuticCategory.toLowerCase().includes(currentQuery)) return true;
      if (salt.chemicalClass.toLowerCase().includes(currentQuery)) return true;
      const brandHit = salt.brands.some(b => b.name.toLowerCase().includes(currentQuery) || b.company.toLowerCase().includes(currentQuery));
      if (brandHit) return true;
      const indHit = salt.indications.some(ind => ind.toLowerCase().includes(currentQuery));
      if (indHit) return true;

      return false;
    });

    // Sorting
    if (currentSort === "az") {
      matches.sort((a, b) => a.saltName.localeCompare(b.saltName));
    } else if (currentSort === "za") {
      matches.sort((a, b) => b.saltName.localeCompare(a.saltName));
    } else if (currentSort === "brands") {
      matches.sort((a, b) => b.brands.length - a.brands.length);
    }

    if (resultCountLabel) {
      resultCountLabel.textContent = `Showing ${matches.length} pharmacological compounds`;
    }

    resultsGrid.innerHTML = "";

    if (matches.length === 0) {
      resultsGrid.innerHTML = `
        <div class="col-span-full py-16 text-center text-slate-400 dark:text-slate-500">
          <i data-lucide="flask-conical-off" class="w-12 h-12 mx-auto mb-3 opacity-40 text-slate-400"></i>
          <h3 class="text-base font-heading font-bold text-slate-700 dark:text-slate-300">No matching medicines found</h3>
          <p class="text-xs text-slate-500 dark:text-slate-400 mt-1 max-w-md mx-auto">
            Try searching for another brand name (e.g. "Dolo", "Augmentin", "Allegra", "Pan-D") or active salt (e.g. "Paracetamol", "Pantoprazole").
          </p>
        </div>
      `;
      refreshIcons();
      return;
    }

    matches.forEach(salt => {
      const card = document.createElement("div");
      card.className = "interactive-card border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 rounded-3xl shadow-xs flex flex-col justify-between hover:border-indigo-400 dark:hover:border-indigo-700";

      card.innerHTML = `
        <div>
          <div class="flex items-start justify-between gap-2 mb-3">
            <span class="text-xs font-bold px-2.5 py-0.5 rounded-full bg-indigo-50 dark:bg-indigo-950/80 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-900/60">
              ${salt.therapeuticCategory}
            </span>
            <span class="text-xs text-slate-400 font-mono">
              ${salt.brands.length} Brands
            </span>
          </div>

          <h3 class="text-xl font-heading font-bold text-slate-900 dark:text-white mb-1">
            ${salt.saltName}
          </h3>
          <p class="text-xs text-slate-500 dark:text-slate-400 mb-4 line-clamp-1">
            Chemical Class: ${salt.chemicalClass}
          </p>

          <!-- Indications -->
          <div class="mb-4">
            <span class="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block mb-1.5">
              Primary Medical Indications:
            </span>
            <ul class="space-y-1 text-xs text-slate-700 dark:text-slate-300">
              ${salt.indications.slice(0, 2).map(ind => `
                <li class="flex items-start gap-1.5">
                  <i data-lucide="check" class="w-3.5 h-3.5 text-emerald-500 mt-0.5 shrink-0"></i>
                  <span class="line-clamp-1">${ind}</span>
                </li>
              `).join("")}
            </ul>
          </div>

          <!-- Commercial Brands -->
          <div class="mb-5 pt-3 border-t border-slate-100 dark:border-slate-800">
            <span class="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block mb-1.5">
              Market Brands:
            </span>
            <div class="flex flex-wrap gap-1.5">
              ${salt.brands.slice(0, 3).map(b => `
                <span class="text-[11px] bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 px-2.5 py-0.5 rounded-md font-medium">
                  ${b.name}
                </span>
              `).join("")}
              ${salt.brands.length > 3 ? `<span class="text-[10px] text-slate-400 self-center">+${salt.brands.length - 3}</span>` : ''}
            </div>
          </div>
        </div>

        <!-- Card Footer -->
        <div class="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between gap-3 mt-auto">
          <div class="text-xs">
            <span class="text-[10px] text-slate-400 font-semibold block uppercase tracking-wider">Standard Dose</span>
            <span class="font-bold text-slate-800 dark:text-slate-200">${salt.adultDosing.standardSingleDose.split(" ")[0]} ${salt.adultDosing.standardSingleDose.split(" ")[1] || ""}</span>
          </div>
          
          <button type="button" class="view-med-modal-btn touch-target px-4 py-2 rounded-xl bg-indigo-50 hover:bg-indigo-100 dark:bg-indigo-950/60 dark:hover:bg-indigo-900/60 text-indigo-700 dark:text-indigo-300 text-xs font-bold flex items-center gap-1.5 transition-colors" data-salt-id="${salt.id}">
            <span>Monograph & Dose</span>
            <i data-lucide="arrow-right" class="w-3.5 h-3.5"></i>
          </button>
        </div>
      `;

      resultsGrid.appendChild(card);
    });

    // Attach modal open handlers
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
      currentQuery = e.target.value.trim().toLowerCase();
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
      clearSearchBtn.classList.add("hidden");
      filterAndRenderDirectory();
      searchInput.focus();
    });
  }

  categoryFilterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      categoryFilterBtns.forEach(b => {
        b.classList.remove("bg-indigo-600", "text-white", "shadow-sm");
        b.classList.add("bg-white", "dark:bg-slate-900", "text-slate-600", "dark:text-slate-300", "border-slate-200", "dark:border-slate-800");
      });
      btn.classList.remove("bg-white", "dark:bg-slate-900", "text-slate-600", "dark:text-slate-300", "border-slate-200", "dark:border-slate-800");
      btn.classList.add("bg-indigo-600", "text-white", "shadow-sm");

      currentCategory = btn.getAttribute("data-category");
      filterAndRenderDirectory();
    });
  });

  if (sortSelect) {
    sortSelect.addEventListener("change", (e) => {
      currentSort = e.target.value;
      filterAndRenderDirectory();
    });
  }

  // --------------------------------------------------------------------------
  // Clinical Monograph Modal
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
      <div class="mb-5">
        <div class="flex flex-wrap items-center gap-2 mb-2">
          <span class="text-xs font-bold px-2.5 py-0.5 rounded-full bg-indigo-100 dark:bg-indigo-950/80 text-indigo-800 dark:text-indigo-300">
            ${salt.therapeuticCategory}
          </span>
          <span class="text-xs text-slate-500 dark:text-slate-400">Class: ${salt.chemicalClass}</span>
          ${salt.allergyClass !== "None" ? `<span class="text-xs font-semibold px-2 py-0.5 rounded bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300">${salt.allergyClass}</span>` : ''}
        </div>
        <h3 class="text-2xl font-heading font-bold text-slate-900 dark:text-white">${salt.saltName}</h3>
      </div>

      <!-- Live Dose Sandbox inside Modal -->
      <div class="p-4 rounded-2xl bg-gradient-to-br from-indigo-50 to-sky-50 dark:from-indigo-950/40 dark:to-slate-900 border border-indigo-100 dark:border-indigo-900/60 mb-6">
        <div class="flex items-center justify-between mb-3">
          <h4 class="font-heading font-bold text-sm text-indigo-900 dark:text-indigo-200 flex items-center gap-1.5">
            <i data-lucide="calculator" class="w-4 h-4 text-indigo-600"></i>
            Live Dose Calculator for ${salt.saltName.split(" ")[0]}
          </h4>
          <span class="text-[11px] text-slate-500 dark:text-slate-400">Adjust sliders below</span>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
          <div>
            <div class="flex justify-between text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
              <span>Patient Age:</span>
              <span id="modal-calc-age-label" class="font-bold text-indigo-600">8 yrs</span>
            </div>
            <input type="range" id="modal-calc-age-slider" min="1" max="90" value="8" class="w-full">
          </div>
          <div>
            <div class="flex justify-between text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
              <span>Weight:</span>
              <span id="modal-calc-weight-label" class="font-bold text-indigo-600">25 kg</span>
            </div>
            <input type="range" id="modal-calc-weight-slider" min="3" max="120" value="25" class="w-full">
          </div>
        </div>

        <div id="modal-calc-result-box" class="p-3 rounded-xl bg-white dark:bg-slate-900 border border-indigo-200 dark:border-indigo-900 text-xs">
          <!-- Populated by JS -->
        </div>
      </div>

      <!-- Indications -->
      <div class="mb-5">
        <h4 class="text-xs font-heading font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-2 flex items-center gap-2">
          <i data-lucide="stethoscope" class="w-4 h-4 text-indigo-600"></i> Indications (What Problems it is used for):
        </h4>
        <ul class="space-y-1.5 bg-slate-50 dark:bg-slate-800/40 p-3.5 rounded-xl border border-slate-200 dark:border-slate-800">
          ${indicationsHtml}
        </ul>
      </div>

      <!-- Mechanism -->
      <div class="mb-5">
        <h4 class="text-xs font-heading font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-2 flex items-center gap-2">
          <i data-lucide="activity" class="w-4 h-4 text-emerald-600"></i> Mechanism of Action (How it works):
        </h4>
        <div class="text-xs text-slate-700 dark:text-slate-300 leading-relaxed bg-slate-50 dark:bg-slate-800/40 p-3.5 rounded-xl border border-slate-200 dark:border-slate-800">
          ${salt.mechanism}
        </div>
      </div>

      <!-- Brands -->
      <div class="mb-5">
        <h4 class="text-xs font-heading font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-2 flex items-center gap-2">
          <i data-lucide="building-2" class="w-4 h-4 text-sky-600"></i> Commercial Pharmacy Brands:
        </h4>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
          ${brandsHtml}
        </div>
      </div>

      <!-- Side effects -->
      <div class="mb-5">
        <h4 class="text-xs font-heading font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-2 flex items-center gap-2">
          <i data-lucide="alert-triangle" class="w-4 h-4 text-amber-500"></i> Known Side Effects:
        </h4>
        <div class="space-y-2">
          <div>
            <span class="text-[11px] text-slate-400 font-semibold block mb-1">Common:</span>
            <div class="flex flex-wrap gap-1.5">${sideEffectsCommon}</div>
          </div>
          <div>
            <span class="text-[11px] text-rose-500 font-semibold block mb-1">Serious:</span>
            <div class="flex flex-wrap gap-1.5">${sideEffectsSerious}</div>
          </div>
        </div>
      </div>

      <!-- Contraindications -->
      <div class="mb-5">
        <h4 class="text-xs font-heading font-bold text-rose-700 dark:text-rose-400 uppercase tracking-wider mb-2 flex items-center gap-2">
          <i data-lucide="shield-x" class="w-4 h-4 text-rose-600"></i> Contraindications (When NOT to use):
        </h4>
        <ul class="space-y-1.5 bg-rose-50/50 dark:bg-rose-950/20 p-3.5 rounded-xl border border-rose-200 dark:border-rose-900/40">
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
          syrupText = `<div class="text-indigo-700 dark:text-indigo-300 font-semibold mt-1">Liquid measure: ${ml} ml of ${form.name} (${form.strength})</div>`;
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

  filterAndRenderDirectory();
  refreshIcons();
});
