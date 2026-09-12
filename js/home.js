/**
 * HIMKIV Health & MedGuide - Home Page Controller (js/home.js)
 * Manages Home Page Instant Search, Dosage Preview Widget,
 * Mobile Navigation Drawer, and Clinical Monograph Modal.
 */

document.addEventListener("DOMContentLoaded", () => {
  // Ensure Clinical Data is available
  if (typeof CLINICAL_DATA === "undefined") {
    console.error("Clinical dataset could not be found.");
    return;
  }

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

  // Close mobile drawer on link click
  if (mobileMenuDrawer) {
    mobileMenuDrawer.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        mobileMenuDrawer.classList.add("hidden");
        document.body.style.overflow = "";
      });
    });
  }

  // --------------------------------------------------------------------------
  // Hero Instant Medicine & Salt Search Bar with Autocomplete Dropdown
  // --------------------------------------------------------------------------
  const homeSearchInput = document.getElementById("home-hero-search");
  const homeSearchResults = document.getElementById("home-search-results");
  const homeClearSearchBtn = document.getElementById("home-clear-search");

  if (homeSearchInput && homeSearchResults) {
    homeSearchInput.addEventListener("input", (e) => {
      const query = e.target.value.trim().toLowerCase();
      
      if (homeClearSearchBtn) {
        if (query) homeClearSearchBtn.classList.remove("hidden");
        else homeClearSearchBtn.classList.add("hidden");
      }

      if (!query || query.length < 2) {
        homeSearchResults.classList.add("hidden");
        homeSearchResults.innerHTML = "";
        return;
      }

      // Filter salts and brands
      const allSalts = Object.values(CLINICAL_DATA.salts);
      const matches = allSalts.filter(salt => {
        if (salt.saltName.toLowerCase().includes(query)) return true;
        if (salt.therapeuticCategory.toLowerCase().includes(query)) return true;
        if (salt.chemicalClass.toLowerCase().includes(query)) return true;
        const brandHit = salt.brands.some(b => b.name.toLowerCase().includes(query));
        if (brandHit) return true;
        const indHit = salt.indications.some(i => i.toLowerCase().includes(query));
        if (indHit) return true;
        return false;
      });

      if (matches.length === 0) {
        homeSearchResults.innerHTML = `
          <div class="p-4 text-center text-xs text-slate-500 dark:text-slate-400">
            <p>No matching medicines or salts found for "<strong>${escapeHtml(query)}</strong>".</p>
            <p class="mt-1 text-[11px] text-slate-400">Try searching "Dolo", "Paracetamol", "Augmentin", or "Acidity".</p>
          </div>
        `;
        homeSearchResults.classList.remove("hidden");
        return;
      }

      let resultsHtml = `
        <div class="p-2 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between text-[11px] font-semibold text-slate-400 uppercase tracking-wider px-3">
          <span>Found ${matches.length} Medicines / Salts</span>
          <a href="medicines.html?q=${encodeURIComponent(query)}" class="text-sky-600 dark:text-sky-400 hover:underline">View All &rarr;</a>
        </div>
        <div class="max-h-72 overflow-y-auto divide-y divide-slate-100 dark:divide-slate-800">
      `;

      matches.slice(0, 6).forEach(salt => {
        const brandNames = salt.brands.slice(0, 3).map(b => b.name).join(", ");
        resultsHtml += `
          <button type="button" class="w-full p-3 text-left hover:bg-sky-50 dark:hover:bg-slate-800/80 transition-colors flex items-start justify-between gap-3 home-search-item" data-salt-id="${salt.id}">
            <div>
              <div class="flex items-center gap-2">
                <span class="font-heading font-bold text-sm text-slate-900 dark:text-white">${salt.saltName}</span>
                <span class="text-[10px] px-2 py-0.5 rounded bg-sky-100 dark:bg-sky-950 text-sky-700 dark:text-sky-300 font-medium">${salt.therapeuticCategory}</span>
              </div>
              <div class="text-xs text-slate-500 dark:text-slate-400 mt-0.5 line-clamp-1">
                Brands: <span class="font-medium text-slate-700 dark:text-slate-300">${brandNames}</span>
              </div>
              <div class="text-[11px] text-emerald-600 dark:text-emerald-400 mt-0.5 line-clamp-1">
                Used for: ${salt.indications[0]}
              </div>
            </div>
            <span class="text-xs font-semibold text-sky-600 dark:text-sky-400 shrink-0 mt-1 flex items-center gap-1">
              <span>Monograph</span>
              <i data-lucide="chevron-right" class="w-3.5 h-3.5"></i>
            </span>
          </button>
        `;
      });

      resultsHtml += `
        </div>
        <div class="p-2.5 bg-slate-50 dark:bg-slate-800/40 text-center border-t border-slate-100 dark:border-slate-800">
          <a href="medicines.html?q=${encodeURIComponent(query)}" class="text-xs font-semibold text-sky-600 dark:text-sky-400 hover:text-sky-700 dark:hover:text-sky-300 inline-flex items-center gap-1">
            <span>Explore full medicine directory for "${escapeHtml(query)}"</span>
            <i data-lucide="arrow-right" class="w-3.5 h-3.5"></i>
          </a>
        </div>
      `;

      homeSearchResults.innerHTML = resultsHtml;
      homeSearchResults.classList.remove("hidden");
      refreshIcons();

      // Attach click to open monograph modal
      homeSearchResults.querySelectorAll(".home-search-item").forEach(item => {
        item.addEventListener("click", () => {
          const saltId = item.getAttribute("data-salt-id");
          homeSearchResults.classList.add("hidden");
          openSaltModal(saltId);
        });
      });
    });

    // Close search dropdown on click outside
    document.addEventListener("click", (e) => {
      if (!homeSearchInput.contains(e.target) && !homeSearchResults.contains(e.target)) {
        homeSearchResults.classList.add("hidden");
      }
    });

    if (homeClearSearchBtn) {
      homeClearSearchBtn.addEventListener("click", () => {
        homeSearchInput.value = "";
        homeSearchResults.classList.add("hidden");
        homeSearchResults.innerHTML = "";
        homeClearSearchBtn.classList.add("hidden");
        homeSearchInput.focus();
      });
    }
  }

  // --------------------------------------------------------------------------
  // Home Page Quick Dosage Teaser Sandbox
  // --------------------------------------------------------------------------
  const homeTeaserSelect = document.getElementById("teaser-salt-select");
  const homeTeaserAgeSlider = document.getElementById("teaser-age-slider");
  const homeTeaserWeightSlider = document.getElementById("teaser-weight-slider");
  const homeTeaserAgeVal = document.getElementById("teaser-age-val");
  const homeTeaserWeightVal = document.getElementById("teaser-weight-val");
  const homeTeaserDoseOutput = document.getElementById("teaser-dose-output");
  const homeTeaserScheduleOutput = document.getElementById("teaser-schedule-output");
  const homeTeaserLiquidBox = document.getElementById("teaser-liquid-box");
  const homeTeaserLiquidOutput = document.getElementById("teaser-liquid-output");
  const homeTeaserMaxOutput = document.getElementById("teaser-max-output");

  const updateTeaserCalculation = () => {
    if (!homeTeaserSelect || !homeTeaserDoseOutput) return;

    const saltId = homeTeaserSelect.value;
    const salt = CLINICAL_DATA.salts[saltId];
    if (!salt) return;

    const age = parseInt(homeTeaserAgeSlider.value);
    const weight = parseInt(homeTeaserWeightSlider.value);

    if (homeTeaserAgeVal) homeTeaserAgeVal.textContent = `${age} yrs`;
    if (homeTeaserWeightVal) homeTeaserWeightVal.textContent = `${weight} kg`;

    const isPediatric = age < 12 || weight < 40;

    if (isPediatric && salt.pediatricDosing.minMgPerKg > 0) {
      const minDose = Math.round(weight * salt.pediatricDosing.minMgPerKg);
      const maxDose = Math.round(weight * salt.pediatricDosing.maxMgPerKg);
      const max24h = Math.round(weight * salt.pediatricDosing.maxDailyCeilingPerKg);

      homeTeaserDoseOutput.innerHTML = minDose === maxDose 
        ? `<strong>${minDose} mg</strong>` 
        : `<strong>${minDose} – ${maxDose} mg</strong>`;
      
      if (homeTeaserScheduleOutput) homeTeaserScheduleOutput.textContent = salt.pediatricDosing.frequency;
      if (homeTeaserMaxOutput) homeTeaserMaxOutput.textContent = `Max 24h: ${max24h} mg`;

      if (salt.pediatricDosing.liquidFormulations && salt.pediatricDosing.liquidFormulations.length > 0) {
        const form = salt.pediatricDosing.liquidFormulations[0];
        const ml = Math.round((minDose / form.perMlMg) * 10) / 10;
        if (homeTeaserLiquidOutput) homeTeaserLiquidOutput.innerHTML = `Give <strong>${ml} ml</strong> of ${form.name} (${form.strength})`;
        if (homeTeaserLiquidBox) homeTeaserLiquidBox.classList.remove("hidden");
      } else {
        if (homeTeaserLiquidBox) homeTeaserLiquidBox.classList.add("hidden");
      }
    } else {
      homeTeaserDoseOutput.innerHTML = `<strong>${salt.adultDosing.standardSingleDose}</strong>`;
      if (homeTeaserScheduleOutput) homeTeaserScheduleOutput.textContent = salt.adultDosing.frequency;
      if (homeTeaserMaxOutput) homeTeaserMaxOutput.textContent = `Max 24h: ${salt.adultDosing.maxDailyCeiling}`;
      if (homeTeaserLiquidBox) homeTeaserLiquidBox.classList.add("hidden");
    }
  };

  if (homeTeaserSelect) {
    homeTeaserSelect.addEventListener("change", updateTeaserCalculation);
  }
  if (homeTeaserAgeSlider) {
    homeTeaserAgeSlider.addEventListener("input", updateTeaserCalculation);
  }
  if (homeTeaserWeightSlider) {
    homeTeaserWeightSlider.addEventListener("input", updateTeaserCalculation);
  }
  updateTeaserCalculation();

  // --------------------------------------------------------------------------
  // Clinical Monograph Modal Controller
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
          <span class="text-[11px] text-slate-500 dark:text-slate-400">Adjust sliders below</span>
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

  // Attach modal trigger to any quick salt badge on the page
  document.querySelectorAll("[data-open-modal-salt]").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const saltId = btn.getAttribute("data-open-modal-salt");
      openSaltModal(saltId);
    });
  });

  // Helper function to escape HTML
  function escapeHtml(string) {
    return String(string).replace(/[&<>"'`=\/]/g, function (s) {
      return ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#39;',
        '/': '&#x2F;',
        '`': '&#x60;',
        '=': '&#x3D;'
      })[s];
    });
  }

  refreshIcons();

  window.addEventListener("himkiv:languageChanged", () => {
    updateTeaserCalculation();
    refreshIcons();
  });
});
