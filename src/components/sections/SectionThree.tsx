import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';
import { SourceChip } from "../common/Source.tsx";
import {useLanguage} from "../../contexts/LanguageContext.tsx";
import {LuInfo} from "react-icons/lu";

const COLORS = ['#0ea5e9', '#64748b', '#22c55e', '#f59e0b', '#a8a29e'];

export function SectionThree() {
    const { t } = useLanguage();

    // Data Source: TAFREN (Task Force for Rebuilding the Nation) Budget Allocation
    const data = [
        { name: t.sectionThree.chart.housing, value: 487000000 },
        { name: t.sectionThree.chart.roads, value: 200000000 },
        { name: t.sectionThree.chart.water, value: 117000000 },
        { name: t.sectionThree.chart.fish, value: 150000000 },
        { name: t.sectionThree.chart.other, value: 100000000 }
    ];

    return (
        <div className="section">
            <h1>{t.sectionThree.title}</h1>
            <h3>{t.sectionThree.subtitle}</h3>

            <div className="card">
                {/* Layout Fix: flexWrap ensures mobile responsiveness */}
                <div style={{ width: '100%', minHeight: '400px', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center' }}>

                    {/* Chart: The Intended Budget */}
                    <div style={{ flex: '1 1 300px', height: '350px', minWidth: '300px' }}>
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie
                                    data={data}
                                    paddingAngle={2}
                                    dataKey="value"
                                    nameKey="name"
                                    cx="50%"
                                    cy="50%"
                                    innerRadius={60}
                                    outerRadius={90}
                                    stroke="none"
                                >
                                    {data.map((_, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                    ))}
                                </Pie>

                                <Legend
                                    layout="horizontal"
                                    verticalAlign='bottom'
                                    align='center'
                                    iconSize={10}
                                    wrapperStyle={{ fontSize: '11px', color: '#cbd5e1' }}
                                />

                                <Tooltip
                                    formatter={(value: number) => [`$${(value / 1000000).toFixed(0)} Million`, 'Allocated']}
                                    contentStyle={{ backgroundColor: '#1e293b', borderColor: '#334155', color: '#fff' }}
                                    itemStyle={{ color: '#fff' }}
                                />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>

                    {/* Stats: The Failure (Right Side) */}
                    <div style={{ flex: '1 1 250px', padding: '20px', display: 'flex', flexDirection: 'column', gap: '1rem', justifyContent: 'center' }}>

                        <div className={'subCard'} style={{ textAlign: 'right' }}>
                            <span style={{ fontSize: '0.85rem', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '1px' }}>
                                {t.sectionThree.goalLabel}
                            </span>
                            <div style={{ fontSize: '1.8rem', fontWeight: 'bold', color: '#fff' }}>
                                {t.sectionThree.goalCount}
                            </div>
                        </div>

                        <div className={'subCard subCard-alt'} style={{ textAlign: 'right' }}>
                            <span style={{ fontSize: '0.85rem', color: '#f87171', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 'bold' }}>
                                {t.sectionThree.actualLabel}
                            </span>
                            <div style={{ fontSize: '3rem', fontWeight: '900', color: '#DC2626', lineHeight: '1' }}>
                                13%
                            </div>
                            <span style={{ fontSize: '0.8rem', color: '#f87171', marginTop: '5px', display: 'block', gap:'2' }}>
                                <span style={{ fontSize: '0.8rem', marginTop: '5px', marginRight:'4px' }}>{t.sectionThree.actualNote}</span> <a href={'https://www.ips.lk/sri-lanka-state-of-the-economy-2005/'}><LuInfo/></a>
                            </span>
                        </div>

                    </div>
                </div>

                <hr className="divider" />

                <SourceChip
                    sourceText={t.sectionThree.source}
                    sourceLink="https://www.unocha.org/publications/report/sri-lanka/sri-lanka-facts-regarding-post-tsunami-recovery-six-months#:~:text=%2D%209%2C480%20families%20were%20still%20living,Food"
                />
            </div>
        </div>
    );
}