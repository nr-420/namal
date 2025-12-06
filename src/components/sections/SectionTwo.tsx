import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';
import { SourceChip } from "../common/Source.tsx";
import {useLanguage} from "../../contexts/LanguageContext.tsx";
import {formatCompactCurrency} from "../../utils.ts";

const COLORS = ['#475569', '#DC2626'];

export function SectionTwo() {
    const { t } = useLanguage();

    // Data Source: Transparency International Sri Lanka (TISL) Position Paper
    const data = [
        { name: t.sectionTwo.statLabelOne, value: 68533124662  },
        { name: t.sectionTwo.statLabelTwo, value: 122130378286-68533124662 },
    ];

    return (
        <div className="section">
            <h1>{t.sectionTwo.title}</h1>
            <h3>{t.sectionTwo.subtitle}</h3>

            <div className="card">
                {/* Added flexWrap: 'wrap' so it stacks on mobile */}
                <div style={{ width: '100%', minHeight: '400px', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center' }}>

                    {/* Chart Side */}
                    <div style={{ flex: '1 1 300px', height: '350px', minWidth: '300px' }}>
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie
                                    data={data}
                                    paddingAngle={2}
                                    dataKey="value"
                                    nameKey="name"
                                    innerRadius={'50%'}
                                    stroke="none"
                                >
                                    {data.map((_, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                    ))}
                                </Pie>

                                <Legend
                                    verticalAlign="bottom"
                                    height={36}
                                    iconSize={12}
                                />

                                <Tooltip
                                    formatter={(value: number) => {
                                        return [formatCompactCurrency(value, "LKR")];
                                    }}
                                    contentStyle={{ backgroundColor: '#1e293b', borderColor: '#334155', color: '#fff' }}
                                    itemStyle={{ color: '#fff' }}
                                />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>

                    {/* Stats Side */}
                    <div style={{ flex: '1 1 250px', display: 'flex', flexDirection: 'column', gap: '1rem', justifyContent: 'center', padding: '20px', minWidth: '250px' }}>

                        {/* Stat Block 1 */}
                        <div className={'subCard'} style={{ textAlign: 'right' }}>
                            <span style={{ fontSize: '0.85rem', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '1px' }}>
                                {t.sectionTwo.totalLabel}
                            </span>
                            <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#fff' }}>
                                {formatCompactCurrency(122130378286, "LKR")}
                            </div>
                        </div>

                        {/* Stat Block 2 (Highlighted) */}
                        <div className={'subCard subCard-alt'} style={{ textAlign: 'right' }}>
                            <span style={{ fontSize: '0.85rem', color: '#f87171', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 'bold' }}>
                                {t.sectionTwo.statLabelTwo}
                            </span>
                            <div style={{ fontSize: '2.5rem', fontWeight: '900', color: '#DC2626', lineHeight: '1' }}>
                                {formatCompactCurrency(122130378286-68533124662, 'LKR')}
                            </div>
                            <span style={{ fontSize: '0.8rem', color: '#f87171' }}>
                                (~45% of total)
                            </span>
                        </div>

                    </div>
                </div>

                <hr className="divider" />

                <SourceChip
                    sourceText={t.sectionTwo.source}
                    sourceLink="https://www.tisrilanka.org/pub/pp/pdf/pr_25_dec_07_tyat.pdf"
                />
            </div>
        </div>
    );
}