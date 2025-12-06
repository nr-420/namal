import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';
import { SourceChip } from "../common/Source.tsx";
import {useLanguage} from "../../contexts/LanguageContext.tsx";
import {formatCompactCurrency} from "../../utils.ts";

const COLORS = ['#546E7A', '#E53935', '#FB8C00', '#1E88E5', '#039BE5', '#43A047', '#FDD835'];

export function SectionOne() {
    const { t } = useLanguage();

    // Data must be inside the component to react to language changes
    const data = [
        { name: t.sectionOne.chart.eu, value: 660000000 },
        { name: t.sectionOne.chart.ngo, value: 400000000 },
        { name: t.sectionOne.chart.japan, value: 180000000 },
        { name: t.sectionOne.chart.adb, value: 150000000 },
        { name: t.sectionOne.chart.wb, value: 150000000 },
        { name: t.sectionOne.chart.usa, value: 134000000 },
        { name: t.sectionOne.chart.ger, value: 45000000 },
    ];

    return (
        <div className="section" id="sectionOne">
            <h1>{t.sectionOne.title}</h1>
            <h3>{t.sectionOne.subtitle}</h3>

            <div className="card">
                <div style={{ width: '100%', height: '400px' }}>
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                            <Pie
                                data={data}
                                paddingAngle={3}
                                dataKey="value"
                                nameKey="name"
                                cx="50%"
                                cy="50%"
                                innerRadius={'50%'}
                                stroke="none"
                            >
                                {data.map((_, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>

                            <Legend
                                layout="vertical"
                                verticalAlign="middle"
                                align="right"
                                iconSize={12}
                                wrapperStyle={{ fontSize: '12px', marginLeft: '10px' }}
                            />

                            <Tooltip
                                formatter={(value: number) => {
                                    return [`Amount: ${formatCompactCurrency(value, '$')}`];
                                }}
                                itemStyle={{ color: '#000' }}
                                animationDuration={300}
                            />
                        </PieChart>
                    </ResponsiveContainer>
                </div>

                <hr className="divider" />

                <SourceChip
                    sourceText={t.sectionOne.source}
                    sourceLink="https://reliefweb.int/report/sri-lanka/sri-lanka-tsunami-summary-world-bank-assistance-sri-lanka#:~:text=A%20post%2Dtsunami%20Needs%20Assessment,Bank%20Commitment%3A%20US%24150%20million"
                />
            </div>
        </div>
    );
}