/**
 * HIMKIV Health & MedGuide - Internationalization (i18n) Engine (js/i18n.js)
 * Manages multi-language translation, persistence, DOM localization,
 * and dispatch of language change events across multi-page clinical modules.
 */

(function () {
  const STORAGE_KEY = "himkiv_lang";
  const DEFAULT_LANG = "en";

  // Check if translations exist
  const getTranslations = () => {
    return typeof TRANSLATIONS !== "undefined" ? TRANSLATIONS : {};
  };

  const getLanguages = () => {
    return typeof SUPPORTED_LANGUAGES !== "undefined" ? SUPPORTED_LANGUAGES : [
      { code: "en", name: "English", nativeName: "English", dir: "ltr" }
    ];
  };

  // Get current active language with persistence
  const getCurrentLanguage = () => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved && getTranslations()[saved]) {
      return saved;
    }
    return DEFAULT_LANG;
  };

  let currentLang = getCurrentLanguage();

  // Translation lookup with strict English fallback
  const t = (key, fallback = "") => {
    const translations = getTranslations();
    if (translations[currentLang] && translations[currentLang][key]) {
      return translations[currentLang][key];
    }
    if (translations[DEFAULT_LANG] && translations[DEFAULT_LANG][key]) {
      return translations[DEFAULT_LANG][key];
    }
    return fallback || key;
  };

  // Apply translations to all tagged DOM nodes
  const applyDOMTranslations = () => {
    // Text content
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (key) {
        const text = t(key);
        if (text) el.textContent = text;
      }
    });

    // HTML content
    document.querySelectorAll("[data-i18n-html]").forEach((el) => {
      const key = el.getAttribute("data-i18n-html");
      if (key) {
        const html = t(key);
        if (html) el.innerHTML = html;
      }
    });

    // Placeholders
    document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
      const key = el.getAttribute("data-i18n-placeholder");
      if (key) {
        const text = t(key);
        if (text) el.setAttribute("placeholder", text);
      }
    });

    // Titles & Tooltips
    document.querySelectorAll("[data-i18n-title]").forEach((el) => {
      const key = el.getAttribute("data-i18n-title");
      if (key) {
        const text = t(key);
        if (text) el.setAttribute("title", text);
      }
    });

    // ARIA Labels
    document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
      const key = el.getAttribute("data-i18n-aria");
      if (key) {
        const text = t(key);
        if (text) el.setAttribute("aria-label", text);
      }
    });

    // Update document lang and direction
    const langObj = getLanguages().find((l) => l.code === currentLang);
    document.documentElement.lang = currentLang;
    if (langObj && langObj.dir) {
      document.documentElement.dir = langObj.dir;
    } else {
      document.documentElement.dir = "ltr";
    }

    // Update Lucide icons if present
    if (typeof lucide !== "undefined" && lucide.createIcons) {
      lucide.createIcons();
    }
  };

  // Set active language and broadcast
  const setLanguage = (lang) => {
    if (!getTranslations()[lang]) {
      console.warn(`Language ${lang} not supported, falling back to ${DEFAULT_LANG}`);
      lang = DEFAULT_LANG;
    }
    currentLang = lang;
    localStorage.setItem(STORAGE_KEY, lang);
    applyDOMTranslations();

    // Sync all language dropdowns on page
    document.querySelectorAll(".himkiv-lang-select").forEach((sel) => {
      sel.value = lang;
    });

    // Broadcast event for dynamic page controllers (e.g. Survey, Medicines, Calculator)
    window.dispatchEvent(
      new CustomEvent("himkiv:languageChanged", {
        detail: { lang: currentLang, t }
      })
    );
  };

  // Initialize Language Selectors on DOM load
  const initLanguageSelectors = () => {
    const containers = document.querySelectorAll(".himkiv-lang-selector-container");
    const languages = getLanguages();

    containers.forEach((container) => {
      if (container.querySelector(".himkiv-lang-select")) return; // already initialized

      container.innerHTML = `
        <div class="relative inline-flex items-center">
          <label for="lang-select-${container.id || 'main'}" class="sr-only">${t("select_language", "Language")}</label>
          <div class="absolute left-2.5 pointer-events-none text-slate-500 dark:text-slate-400 flex items-center">
            <i data-lucide="globe" class="w-4 h-4"></i>
          </div>
          <select id="lang-select-${container.id || 'main'}" class="himkiv-lang-select touch-target pl-8 pr-7 py-1.5 sm:py-2 rounded-xl text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 hover:border-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-500 transition-colors cursor-pointer appearance-none shadow-2xs">
            ${languages
              .map(
                (l) => `
              <option value="${l.code}" ${l.code === currentLang ? "selected" : ""}>
                ${l.nativeName} (${l.code.toUpperCase()})
              </option>
            `
              )
              .join("")}
          </select>
          <div class="absolute right-2 pointer-events-none text-slate-400 dark:text-slate-500 flex items-center">
            <i data-lucide="chevron-down" class="w-3.5 h-3.5"></i>
          </div>
        </div>
      `;

      const select = container.querySelector(".himkiv-lang-select");
      if (select) {
        select.addEventListener("change", (e) => {
          setLanguage(e.target.value);
        });
      }
    });

    applyDOMTranslations();
  };

  // Expose global interface
  window.himkivI18n = {
    t,
    setLanguage,
    getLanguage: () => currentLang,
    getLanguages,
    applyDOMTranslations
  };

  // Run on DOM ready
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initLanguageSelectors);
  } else {
    initLanguageSelectors();
  }
})();
