import { Bar, BarChart, Cell, LabelList, ResponsiveContainer, XAxis, YAxis, Tooltip } from 'recharts';
import { SourceChip } from "../common/Source.tsx";
import { useLanguage } from "../../contexts/LanguageContext.tsx";
import {formatCompactCurrency} from "../../utils.ts";

export function SectionFour() {
    const { t } = useLanguage();

    // Data Source: Supreme Court FR Case 56/2005
    const data = [
        { name: t.sectionFour.chart.treasury, value: 0 },
        { name: t.sectionFour.chart.private, value: 82900000 },
    ];

    return (
        <div className="section">
            <h1>{t.sectionFour.title}</h1>
            <h3>{t.sectionFour.subtitle}</h3>
            <h3>{t.sectionFour.desc}</h3>

            <div className="card">
                <div style={{ width: '100%', height: '350px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart
                            data={data}
                            layout="vertical"
                            margin={{ top: 20, right: 50, left: 10, bottom: 20 }}
                        >
                            <XAxis type="number" hide />
                            <YAxis
                                dataKey="name"
                                type="category"
                                width={150}
                                tick={{ fill: '#cbd5e1', fontSize: 12, fontWeight: 'bold' }}
                            />
                            <Tooltip
                                cursor={{fill: 'transparent'}}
                                formatter={(value: number) => [`${formatCompactCurrency(value, 'LKR')}`, 'Amount Deposited']}
                                contentStyle={{ backgroundColor: '#1e293b', borderColor: '#334155', color: '#fff' }}
                            />
                            <Bar dataKey="value" barSize={40} radius={[0, 4, 4, 0]}>
                                {data.map((entry, index) => (
                                    <Cell
                                        key={`cell-${index}`}
                                        fill={entry.value === 0 ? '#475569' : '#DC2626'}
                                    />
                                ))}
                                <LabelList
                                    dataKey="value"
                                    position="right"
                                    style={{ fill: '#fff', fontWeight: 'bold', fontSize: '14px' }}
                                />
                            </Bar>
                        </BarChart>
                    </ResponsiveContainer>

                    {/* Context for the chart */}
                    <div style={{ textAlign: 'center', marginTop: '10px', color: '#f87171', fontSize: '0.9rem', fontStyle: 'italic', padding: '0 10px' }}>
                        {t.sectionFour.quote}
                        <br/> <span style={{ opacity: 0.7 }}>{t.sectionFour.quoteAuthor}</span>
                    </div>
                </div>

                <hr className="divider" />

                <SourceChip
                    sourceText={t.sectionFour.source}
                    sourceLink="https://www.bbc.com/sinhala/news/story/2005/09/050928_helping_hambantota"
                />
            </div>

            {/* --- NEW QUOTATION BLOCK --- */}
            <div style={{
                marginTop: '4rem',
                marginBottom: '2rem',
                padding: '2rem',
                backgroundColor: 'rgba(0,0,0,0.2)', // Subtle dark background
                borderLeft: '4px solid #ef4444', // Red accent border
                borderRadius: '0 8px 8px 0'
            }}>
                <p style={{
                    fontSize: '1.25rem',
                    lineHeight: '1.6',
                    color: '#e2e8f0',
                    fontFamily: 'serif',
                    fontStyle: 'italic',
                    marginBottom: '1rem'
                }}>
                    "{t.sectionFour.cjApology}"
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div style={{ width: '30px', height: '1px', backgroundColor: '#94a3b8' }}></div>
                    <p style={{ fontSize: '0.9rem', color: '#94a3b8', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px' }}>
                        {t.sectionFour.cjName}
                    </p>
                </div>
                <p style={{ fontSize: '0.8rem', color: '#64748b', marginLeft: '40px' }}>
                    {t.sectionFour.cjContext}<a href={'https://www.dailymirror.lk/breaking_news/ex-cj-makes-public-apology/108-54377'}><span>  (Source)</span></a>
                </p>
            </div>
        </div>
    );
}