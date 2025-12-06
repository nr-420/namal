import {useLanguage} from "../../contexts/LanguageContext.tsx";
import type {Language} from "../../assets/translations.ts";

export function Navbar() {
    const { lang, setLang } = useLanguage();

    const btnClass = (active: boolean) =>
        `px-3 py-1 font-bold rounded uppercase text-sm transition-colors ${
            active
                ? 'bg-red-600 text-white'
                : 'text-slate-400 hover:text-white hover:bg-slate-800'
        }`;

    return (
        <nav style={{
            position: 'fixed',
            top: 0,
            right: 0,
            zIndex: 9999, // Always on top
            padding: '1.5rem',
            display: 'flex',
            gap: '0.5rem',
            background: 'transparent' // Or 'rgba(2, 6, 23, 0.8)' for blur
        }}>
            {(['en', 'si', 'ta'] as Language[]).map((l) => (
                <button
                    key={l}
                    onClick={() => setLang(l)}
                    className={btnClass(lang === l)}
                    style={{
                        border: 'none',
                        cursor: 'pointer',
                        // Tailwind classes replacement if using raw CSS:
                        padding: '8px 12px',
                        background: lang === l ? '#DC2626' : 'rgba(0,0,0,0.5)',
                        color: lang === l ? 'white' : '#94a3b8',
                        borderRadius: '4px',
                        fontWeight: 'bold',
                        textTransform: 'uppercase'
                    }}
                >
                    {l}
                </button>
            ))}
        </nav>
    );
}