import { LuDatabase, LuGithub, LuShieldAlert, LuDownload } from "react-icons/lu";
import { useLanguage } from "../contexts/LanguageContext.tsx";

// --- 1. The Compiled Data Registry ---
const sourcesData = {
    metadata: {
        project: "The Cost of a Dynasty",
        generated_at: new Date().toISOString(),
        description: "Primary references regarding Tsunami aid mismanagement in Sri Lanka (2004-2005), verified for archival stability."
    },
    sources: [
        // --- 1. FINANCIAL FLOWS & MACRO DATA ---
        {
            id: "financial_inflows",
            title: "Central Bank of Sri Lanka Annual Report 2005",
            category: "Official Data",
            description: "Official record of foreign currency inflows. Chapter 5 (External Sector) highlights the gap between 'pledges' ($3bn+) and actual 'disbursements' (loans/grants).",
            key_finding: "Tracks the official 'External Sector' inflows and Balance of Payments surpluses.",
            // Direct link to the Chapter 5 PDF from the CBSL archive
            link: "https://www.cbsl.gov.lk/sites/default/files/cbslweb_documents/publications/annual_report/archives/en/2005_9_Chapter_05_en.pdf"
        },
        {
            id: "housing_failure",
            title: "Post Tsunami Recovery and Reconstruction: Progress, Challenges, and Way Forward",
            author: "TAFREN / World Bank / ADB",
            date: "December 2005",
            category: "Statistics",
            key_stat: "Only ~13,000 permanent houses (approx 13% of requirement) were completed by the one-year mark.",
            // Stable link to the full Joint Report via PreventionWeb (UN Disaster Risk Reduction archive)
            link: "https://www.preventionweb.net/publication/post-tsunami-recovery-and-reconstruction-joint-report-government-sri-lanka-and"
        },

        // --- 2. CORRUPTION & AUDITS ---
        {
            id: "corruption_report",
            title: "Three Years After Tsunami: The Missing Aid",
            author: "Transparency International Sri Lanka (TISL)",
            date: "December 2007",
            category: "Audit / NGO",
            description: "Highlighted that US$500+ Million in aid was unaccounted for between donor disbursement and actual project expenditure.",
            // Switched to ReliefWeb archive as the direct TISL PDF link is often unstable
            link: "https://reliefweb.int/report/sri-lanka/sri-lanka-tsunami-aid-missing-says-anti-corruption-group"
        },
        {
            id: "abandoned_containers",
            title: "Interim Report on the Audit of the Accounts of the Tsunami Disaster Relief",
            author: "Auditor General of Sri Lanka (S.C. Mayadunne)",
            date: "September 2005",
            category: "Audit",
            description: "Parliamentary audit revealed that 686 containers of essential food and medical relief were abandoned at Colombo Port due to bureaucratic negligence.",
            // Stable international coverage of the specific Auditor General report
            link: "https://reliefweb.int/report/sri-lanka/slanka-officials-misappropriate-tsunami-aid-auditor"
        },
        {
            id: "rada_fraud",
            title: "The RADA Case (The 'Jayalanka' Housing Project)",
            author: "Supreme Court / High Court Records",
            date: "2006 - 2020",
            category: "Corruption / Legal",
            description: "Investigation into the Reconstruction and Development Agency (RADA) regarding Rs. 169 Million meant for housing in the North/East that was allegedly funneled into non-existent companies.",
            // Link to Transparency International's coverage of the specific fraud case
            link: "https://www.tisrilanka.org/cac-reveals-corruption-in-rada-reconstruction-and-development-agency/"
        },

        // --- 3. LEGAL & POLITICAL INTERFERENCE ---
        {
            id: "helping_hambantota",
            title: "Supreme Court Fundamental Rights Case 56/2005",
            category: "Legal",
            description: "The 'Helping Hambantota' investigation regarding the diversion of Rs. 82.9 Million of Tsunami funds into a private account at Standard Chartered Bank.",
            status: "Investigation halted by SC in 2005; Apology issued by CJ in 2014.",
            // Detailed legal analysis by The Sunday Times
            link: "https://www.sundaytimes.lk/141109/sunday-times-2/helping-hambantota-case-sri-lanka-i-weep-for-thee-126441.html"
        },
        {
            id: "cj_apology",
            title: "Public Apology by Former Chief Justice Sarath N. Silva",
            date: "October 18, 2014",
            category: "Testimony",
            quote: "The decision I gave in the Helping Hambantota case was a mistake... I ask for forgiveness.",
            // Direct news record of the apology
            link: "https://www.dailymirror.lk/breaking_news/ex-cj-makes-public-apology/108-54377"
        },

        // --- 4. POLICY FAILURES ---
        {
            id: "buffer_zone",
            title: "Issues Paper on the Proposed Coastal Conservation Zone",
            author: "Centre for Policy Alternatives (CPA)",
            date: "2005",
            category: "Policy Analysis",
            description: "Critique of the government's arbitrary 'Buffer Zone' policy (100m-200m no-build zone), which was identified as the primary cause for the delay in permanent housing construction.",
            // Direct link to the CPA archives
            link: "https://www.cpalanka.org/issues-paper-on-the-proposed-coastal-conservation-zone/"
        },
        {
            id: "tec_evaluation",
            title: "Impact of the Tsunami Response on Local and National Capacities: Sri Lanka Country Report",
            author: "Tsunami Evaluation Coalition (TEC)",
            date: "April 2006",
            category: "International Audit",
            description: "The 'Gold Standard' independent international evaluation. It concluded that the aid response was 'supply-driven' rather than 'needs-driven' and undermined local coping mechanisms.",
            // Link to the ALNAP humanitarian library (permanent repository)
            link: "https://alnap.cdn.ngo/media/documents/capacities-sri-lanka.pdf"
        }
    ]
};

export function FuckYou() {
    const { t, lang } = useLanguage();
    const isEnglish = lang === 'en';

    // --- 2. The Download Handler ---
    const handleDownload = (e: React.MouseEvent) => {
        e.preventDefault();

        // Convert data to JSON string
        const jsonString = JSON.stringify(sourcesData, null, 2);

        // Create a blob
        const blob = new Blob([jsonString], { type: "application/json" });

        // Create a link element
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = "tsunami_aid_sources.json";

        // Trigger download
        document.body.appendChild(link);
        link.click();

        // Cleanup
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
    };

    return (
        <>
            <div className="section" style={{ borderBottom: 'none', paddingBottom: '4rem' }}>
                <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center', color: '#94a3b8' }}>
                    <p style={{ fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '3px', color: '#fff', fontWeight: 'bold' }}>
                        {t.footer.summary}
                    </p>
                </div>

                <div style={{
                    textAlign: 'center',
                    margin: '2rem 0 4rem 0',
                    lineHeight: '1.1'
                }}>
                    <h1 style={{
                        fontSize: 'clamp(3rem, 15vw, 12rem)',
                        fontWeight: '900',
                        color: '#DC2626',
                        textTransform: 'uppercase',
                        margin: 0,
                        letterSpacing: isEnglish ? '-0.05em' : '0',
                        fontFamily: isEnglish ? 'inherit' : '"Noto Sans Sinhala", "Noto Sans Tamil", sans-serif'
                    }}>
                        {t.footer.punchline}
                    </h1>
                </div>

                <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                    <a href="/scorecard" target="_blank" rel="noopener noreferrer" className="button-secondary">
                        Share Scorecard
                    </a>

                    {/* --- 3. The Functional Button --- */}
                    <button onClick={handleDownload} className="button-secondary" style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                        <LuDownload size={16}/> Download Sources (.JSON)
                    </button>
                </div>
            </div>

            <footer style={{
                backgroundColor: '#020617',
                borderTop: '1px solid #1e293b',
                padding: '3rem 1.5rem',
                textAlign: 'center',
                marginTop: 'auto'
            }}>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    color: '#abcbff',
                    fontSize: '0.9rem',
                    maxWidth: '600px',
                    margin: '0 auto'
                }}>

                    <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', color: '#ef4444' }}>
                        <LuShieldAlert size={16} />
                        <span style={{ fontWeight: 'bold', textTransform: 'uppercase' }}>Public Interest Disclosure</span>
                    </div>

                    <p style={{ lineHeight: '1.6' }}>
                        {t.footer.legal}
                    </p>

                    <p style={{ fontStyle: 'italic', opacity: 0.7 }}>
                        "Fair comment on a matter of public interest is a defense to an action for defamation."
                    </p>

                    <div style={{ display: 'flex', gap: '1.5rem', marginTop: '1rem' }}>
                        <a href="#" style={{ color: '#64748b', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '5px' }}>
                            <LuGithub size={14} /> Source Code
                        </a>
                        <a href="#" style={{ color: '#64748b', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '5px' }}>
                            <LuDatabase size={14} /> IPFS Mirror
                        </a>
                    </div>

                    <div style={{ marginTop: '2rem', fontSize: '0.7rem', opacity: 0.5 }}>
                        NO RIGHTS RESERVED. COPY THIS. SHARE THIS. HOST THIS.
                    </div>
                </div>
            </footer>
        </>
    );
}