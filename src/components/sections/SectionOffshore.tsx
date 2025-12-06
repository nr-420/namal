import { SourceChip } from "../common/Source.tsx";
import { useLanguage } from "../../contexts/LanguageContext.tsx";
import { LuFileSearch, LuGlobe, LuLandmark, LuBriefcase } from "react-icons/lu";

export function SectionOffshore() {
    const { t } = useLanguage();

    return (
        <div className="section">
            <h1>{t.sectionOffshore.title}</h1>
            <h3>{t.sectionOffshore.subtitle}</h3>

            <div className="card">
                <p style={{
                    color: '#94a3b8',
                    fontSize: '1.1rem',
                    marginBottom: '2rem',
                    borderLeft: '4px solid #334155',
                    paddingLeft: '1rem'
                }}>
                    {t.sectionOffshore.desc}
                </p>

                {/* The "Files" Grid */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>

                    {/* Card 1: Pandora Papers */}
                    <div className="subCard" style={{ margin: 0 }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                            <LuFileSearch size={24} color="#facc15" />
                            <span style={{ color: '#facc15', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px' }}>
                                LEAKED
                            </span>
                        </div>
                        <h4 style={{ color: '#fff', margin: '0 0 10px 0', fontSize: '1.2rem' }}>
                            {t.sectionOffshore.cards.pandora.title}
                        </h4>
                        <p style={{ color: '#cbd5e1', fontSize: '0.95rem' }}>
                            {t.sectionOffshore.cards.pandora.body}
                        </p>
                    </div>

                    {/* Card 2: Luxury Assets */}
                    <div className="subCard" style={{ margin: 0 }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                            <LuGlobe size={24} color="#38bdf8" />
                            <span style={{ color: '#38bdf8', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px' }}>
                                ASSETS
                            </span>
                        </div>
                        <h4 style={{ color: '#fff', margin: '0 0 10px 0', fontSize: '1.2rem' }}>
                            {t.sectionOffshore.cards.assets.title}
                        </h4>
                        <p style={{ color: '#cbd5e1', fontSize: '0.95rem' }}>
                            {t.sectionOffshore.cards.assets.body}
                        </p>
                    </div>

                </div>

                {/* Visual Connector Line */}
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '1rem',
                    opacity: 0.5,
                    marginBottom: '2rem'
                }}>
                    <LuLandmark /> ---------------- <LuBriefcase /> ---------------- <LuGlobe />
                </div>

                <div style={{ textAlign: 'center', fontStyle: 'italic', color: '#94a3b8', fontSize: '0.9rem' }}>
                    {t.sectionOffshore.quote}
                </div>

                <hr className="divider" />

                <SourceChip
                    sourceText={t.sectionOffshore.source}
                    sourceLink="https://www.icij.org/investigations/pandora-papers/sri-lanka-rajapaksa-family-offshore-wealth-power/"
                />
            </div>
        </div>
    );
}