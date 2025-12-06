import {useLanguage} from "../../contexts/LanguageContext.tsx";

export function SectionSix() {
    const {t} = useLanguage();
    return (
        <div className="section">
            <h1>{t.sectionSix.title}</h1>
            <h3>{t.sectionSix.subtitle}</h3>

            <div className="card">
                <div style={{display: 'flex', flexDirection: 'column', gap: '1rem', padding: '10px 0'}}>

                    {/* Header Row */}
                    <div style={{
                        display: 'flex',
                        borderBottom: '1px solid #334155',
                        paddingBottom: '10px',
                        marginBottom: '5px'
                    }}>
                        <div style={{
                            flex: 1,
                            fontWeight: 'bold',
                            color: '#64748b',
                            textTransform: 'uppercase',
                            fontSize: '0.85rem',
                            letterSpacing: '1px'
                        }}>
                            {t.sectionSix.headers.metric}
                        </div>
                        <div style={{
                            flex: 1.5,
                            fontWeight: 'bold',
                            color: '#64748b',
                            textTransform: 'uppercase',
                            fontSize: '0.85rem',
                            letterSpacing: '1px'
                        }}>
                            {t.sectionSix.headers.finding}
                        </div>
                        <div style={{
                            width: '60px',
                            fontWeight: 'bold',
                            color: '#64748b',
                            textTransform: 'uppercase',
                            fontSize: '0.85rem',
                            textAlign: 'right',
                            letterSpacing: '1px'
                        }}>
                            {t.sectionSix.headers.grade}
                        </div>
                    </div>

                    {/* Row 1: Transparency */}
                    <ScoreRow
                        metric={t.sectionSix.rows.transparency.name}
                        result={t.sectionSix.rows.transparency.desc}
                        grade={t.sectionSix.rows.transparency.grade}
                        color="#ef4444"
                    />

                    {/* Row 2: Efficiency */}
                    <ScoreRow
                        metric={t.sectionSix.rows.efficiency.name}
                        result={t.sectionSix.rows.efficiency.desc}
                        grade={t.sectionSix.rows.efficiency.grade}
                        color="#ef4444"
                    />

                    {/* Row 3: Housing */}
                    <ScoreRow
                        metric={t.sectionSix.rows.execution.name}
                        result={t.sectionSix.rows.execution.desc}
                        grade={t.sectionSix.rows.execution.grade}
                        color="#ef4444"
                    />

                    {/* Row 4: The Satire Pivot */}
                    <ScoreRow
                        metric={t.sectionSix.rows.politics.name}
                        result={t.sectionSix.rows.politics.desc}
                        grade={t.sectionSix.rows.politics.grade}
                        color="#fbbf24" // Gold/Yellow color to stand out
                    />

                </div>

                {/* The Verdict Box */}
                <div style={{
                    marginTop: '25px',
                    textAlign: 'center',
                    border: '2px solid #dc2626',
                    padding: '20px',
                    borderRadius: '8px',
                    backgroundColor: 'rgba(220, 38, 38, 0.1)'
                }}>
                    <div style={{
                        color: '#f87171',
                        fontSize: '0.9rem',
                        textTransform: 'uppercase',
                        letterSpacing: '2px',
                        marginBottom: '5px'
                    }}>
                        {t.sectionSix.verdictTitle}
                    </div>
                    <div style={{
                        color: 'var(--accent-red)',
                        fontSize: '1.8rem',
                        fontWeight: '900',
                        textTransform: 'uppercase',
                        lineHeight: '1.2'
                    }}>
                        {t.sectionSix.verdictMain}<br/>
                        <span style={{fontSize: '1.2rem', color: '#fbbf24'}}>{t.sectionSix.verdictSub}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

// Helper Sub-component
function ScoreRow({metric, result, grade, color}: { metric: string, result: string, grade: string, color: string }) {
    return (
        <div style={{display: 'flex', alignItems: 'center', borderBottom: '1px solid #1e293b', padding: '15px 0'}}>
            <div style={{flex: 1, color: '#e2e8f0', fontWeight: 'bold'}}>{metric}</div>
            <div style={{flex: 1.5, color: '#94a3b8', fontSize: '0.9rem', paddingRight: '10px'}}>{result}</div>
            <div style={{
                width: '60px',
                textAlign: 'right',
                fontWeight: '900',
                fontSize: '1.8rem',
                color: color,
                lineHeight: 1
            }}>{grade}</div>
        </div>
    );
}