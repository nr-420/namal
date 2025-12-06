import {type Language, translations} from "../assets/translations.ts";
import {createContext, type ReactNode, useContext, useState} from "react";


type LanguageContextType = {
    lang: Language;
    setLang: (lang: Language) => void;
    t: typeof translations['en']; // Typing helper
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [lang, setLang] = useState<Language>('en');

    // This makes sure 't' always returns the correct object
    const t = translations[lang] || translations['en'];

    return (
        <LanguageContext.Provider value={{ lang, setLang, t }}>
            {children}
        </LanguageContext.Provider>
    );
}

// Custom Hook for easy usage
// eslint-disable-next-line react-refresh/only-export-components
export function useLanguage() {
    const context = useContext(LanguageContext);
    if (!context) throw new Error("useLanguage must be used within a LanguageProvider");
    return context;
}