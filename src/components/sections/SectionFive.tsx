import { Bar, BarChart, Cell, LabelList, ResponsiveContainer, XAxis, YAxis, Tooltip } from 'recharts';
import { SourceChip } from "../common/Source.tsx";
import { useLanguage } from "../../contexts/LanguageContext.tsx";
import {LuInfo} from "react-icons/lu";

const COLORS = ['#22c55e', '#64748b']; // Green for good, Slate for "stagnant"

export function SectionFive() {
    const { t } = useLanguage();

    // Data Source: Auditor General's Report (Sept 2005)
    const data = [
        { name: t.sectionFive.chart.spent, value: 13.5 },
        { name: t.sectionFive.chart.idle, value: 86.5 },
    ];

    return (
        <div className="section">
            <h1>{t.sectionFive.title}</h1>
            <h3>{t.sectionFive.subtitle}</h3>

            <div className="card">
                <div style={{ width: '100%', height: '300px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>

                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart
                            data={data}
                            layout="vertical"
                            margin={{ top: 20, right: 30, left: 10, bottom: 20 }}
                            barSize={50}
                        >
                            <XAxis type="number" hide domain={[0, 100]} />
                            <YAxis
                                dataKey="name"
                                type="category"
                                width={150}
                                // Reduced font size slightly to accommodate longer Sinhala/Tamil words
                                tick={{ fill: '#cbd5e1', fontSize: 11, fontWeight: 'bold' }}
                            />
                            <Tooltip
                                cursor={{fill: 'transparent'}}
                                formatter={(value: number) => [`${value}%`, 'Total Aid Funds']}
                                contentStyle={{ backgroundColor: '#1e293b', borderColor: '#334155', color: '#fff' }}
                            />
                            <Bar dataKey="value" radius={[0, 4, 4, 0]}>
                                {data.map((_, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index]} />
                                ))}
                                <LabelList
                                    dataKey="value"
                                    position="right"
                                    style={{ fill: '#fff', fontWeight: 'bold', fontSize: '16px' }}
                                />
                            </Bar>
                        </BarChart>
                    </ResponsiveContainer>

                    {/* The "Rotting Containers" Fact */}
                    <div style={{
                        marginTop: '20px',
                        padding: '15px',
                        backgroundColor: 'rgba(220, 38, 38, 0.1)',
                        borderLeft: '4px solid #dc2626',
                        color: '#fca5a5',
                        fontSize: '0.9rem'
                    }}>
                        <strong>{t.sectionFive.alertTitle}</strong> {t.sectionFive.alertDesc}
                        <a style={{marginLeft:4}} href={'https://m.rediff.com/news/2005/sep/25sl.htm#:~:text=The%20auditor%20general%20found%20that,clearing%20of%20the%20aid%20cargoes.'} target="_blank" rel="noopener noreferrer"><LuInfo/></a>
                    </div>

                </div>

                <hr className="divider" />

                <SourceChip
                    sourceText={t.sectionFive.source}
                    sourceLink="https://reliefweb.int/report/sri-lanka/slanka-officials-misappropriate-tsunami-aid-auditor"
                />
            </div>
        </div>
    );
}