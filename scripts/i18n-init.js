// i18n initialization and translation management
(function() {
    const STORAGE_KEY = 'fincapao_language';
    const DEFAULT_LANG = 'en';
    let currentLang = localStorage.getItem(STORAGE_KEY) || DEFAULT_LANG;
    let translations = {};

    // Load translations for a specific language
    async function loadTranslations(lang) {
        try {
            const response = await fetch(`/locales/${lang}/translation.json`);
            if (!response.ok) throw new Error(`Failed to load ${lang} translations`);
            translations[lang] = await response.json();
        } catch (error) {
            console.error('Error loading translations:', error);
        }
    }

    // Get nested translation value by dot notation (e.g., "hero.title")
    function getTranslation(key) {
        const keys = key.split('.');
        let value = translations[currentLang];
        
        for (const k of keys) {
            if (value && typeof value === 'object' && k in value) {
                value = value[k];
            } else {
                return key; // Fallback to key if not found
            }
        }
        
        return value || key;
    }

    // Translate all elements with data-i18n attribute
    function translatePage() {
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            const translation = getTranslation(key);
            
            // Handle specialized tag attributes
            if (element.tagName === 'META') {
                element.setAttribute('content', translation);
                return;
            }

            // Handle HTML content (for rich text like promises)
            if (element.getAttribute('data-i18n-html') === 'true') {
                element.innerHTML = translation;
            } else {
                element.textContent = translation;
            }
        });

        // Update page language attribute
        document.documentElement.lang = currentLang;
        
        // Store preference
        localStorage.setItem(STORAGE_KEY, currentLang);
    }

    // Change language
    function setLanguage(lang) {
        if (lang === currentLang) return;
        currentLang = lang;
        if (translations[lang]) {
            translatePage();
        } else {
            loadTranslations(lang).then(() => translatePage());
        }
    }

    // Get current language
    function getCurrentLanguage() {
        return currentLang;
    }

    // Initialize i18n
    async function init() {
        // Load current language
        if (!translations[currentLang]) {
            await loadTranslations(currentLang);
        }
        
        // Preload other language (for smooth switching)
        const otherLang = currentLang === 'es' ? 'en' : 'es';
        if (!translations[otherLang]) {
            loadTranslations(otherLang);
        }

        // Translate initial page
        translatePage();

        // Set up language switcher event listeners
        setupLanguageSwitcher();
    }

    // Setup language switcher buttons
    function setupLanguageSwitcher() {
        const esBtn = document.getElementById('lang-es');
        const enBtn = document.getElementById('lang-en');

        if (esBtn) {
            esBtn.addEventListener('click', () => {
                setLanguage('es');
                updateLanguageSwitcherUI();
            });
        }

        if (enBtn) {
            enBtn.addEventListener('click', () => {
                setLanguage('en');
                updateLanguageSwitcherUI();
            });
        }

        updateLanguageSwitcherUI();
    }

    // Update visual state of language switcher
    function updateLanguageSwitcherUI() {
        const esBtn = document.getElementById('lang-es');
        const enBtn = document.getElementById('lang-en');

        if (esBtn) {
            esBtn.classList.toggle('active', currentLang === 'es');
        }
        if (enBtn) {
            enBtn.classList.toggle('active', currentLang === 'en');
        }
    }

    // Public API
    window.i18n = {
        init,
        setLanguage,
        getCurrentLanguage,
        getTranslation
    };

    // Auto-initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
