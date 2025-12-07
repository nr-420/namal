import {LuArrowLeft, LuTriangleAlert} from "react-icons/lu";

export default function ScorecardPage() {
    return (
        <div style={{
            minHeight: '100vh',
            backgroundColor: '#020617', // Dark slate background
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px',
            fontFamily: '"Courier New", Courier, monospace', // Receipt style font
        }}>

            {/* Navigation Back (Hidden in screenshot if they crop tight, but useful for UX) */}
            <a href="/" style={{
                position: 'absolute',
                top: '20px',
                left: '20px',
                color: '#64748b',
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: '5px',
                fontSize: '0.9rem'
            }} target="_blank" rel="noopener noreferrer">
                <LuArrowLeft /> Back to Analysis
            </a>

            {/* --- THE SCORECARD (The Screenshot Target) --- */}
            <div style={{
                backgroundColor: '#0f172a',
                border: '4px solid #DC2626', // The signature Red Border
                width: '100%',
                maxWidth: '420px', // Perfect mobile width
                color: '#fff',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
            }}>

                {/* HEADER */}
                <div style={{ padding: '30px 20px 20px 20px', borderBottom: '2px dashed #334155', textAlign: 'center' }}>
                    <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '15px', color: '#facc15' }}>
                        <LuTriangleAlert size={40} />
                    </div>
                    <h1 style={{ margin: 0, textTransform: 'uppercase', fontSize: '1.75rem', fontWeight: '900', lineHeight: '1', letterSpacing: '-1px' }}>
                        Rajapaksa<br/>Recovery Model
                    </h1>
                    <p style={{ margin: '15px 0 0 0', fontSize: '0.85rem', color: '#94a3b8', fontStyle: 'italic' }}>
                        "Namal wanted us to look to them.<br/>So let's have a look."
                    </p>
                </div>

                {/* THE DATA GRID */}
                <div style={{ padding: '25px' }}>

                    {/* Stat 1 */}
                    <div style={{ marginBottom: '25px' }}>
                        <span style={{ display: 'block', fontSize: '0.7rem', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '1px' }}>Housing Completion (Year 1)</span>
                        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginTop: '5px' }}>
                            <span style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#DC2626' }}>13%</span>
                            <span style={{ fontSize: '0.8rem', color: '#f87171', fontWeight: 'bold', border: '1px solid #f87171', padding: '2px 6px', borderRadius: '4px' }}>FAILURE</span>
                        </div>
                    </div>

                    {/* Stat 2 */}
                    <div style={{ marginBottom: '25px' }}>
                        <span style={{ display: 'block', fontSize: '0.7rem', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '1px' }}>Funds Unaccounted For</span>
                        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginTop: '5px' }}>
                            <span style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#DC2626' }}>$500M+</span>
                            <span style={{ fontSize: '0.8rem', color: '#f87171', fontWeight: 'bold', border: '1px solid #f87171', padding: '2px 6px', borderRadius: '4px' }}>MISSING</span>
                        </div>
                    </div>

                    {/* Stat 3 */}
                    <div style={{ marginBottom: '25px' }}>
                        <span style={{ display: 'block', fontSize: '0.7rem', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '1px' }}>Relief Containers Abandoned</span>
                        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginTop: '5px' }}>
                            <span style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#DC2626' }}>686</span>
                            <span style={{ fontSize: '0.8rem', color: '#f87171', fontWeight: 'bold', border: '1px solid #f87171', padding: '2px 6px', borderRadius: '4px' }}>ROTTED</span>
                        </div>
                    </div>

                    {/* Stat 4 - The Helping Hambantota Case */}
                    <div style={{ padding: '15px', backgroundColor: 'rgba(220, 38, 38, 0.1)', borderLeft: '4px solid #DC2626' }}>
                        <span style={{ display: 'block', fontSize: '0.7rem', color: '#fff', textTransform: 'uppercase', marginBottom: '5px' }}>Helping Hambantota Case</span>
                        <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#fff' }}>Rs 82.9M</div>
                        <div style={{ fontSize: '0.75rem', color: '#fca5a5', marginTop: '5px' }}>Diverted to private account. Investigation halted by CJ Sarath Nanda Silva.</div>
                    </div>

                </div>

                {/* FOOTER */}
                <div style={{ padding: '25px', backgroundColor: '#DC2626', color: '#fff', textAlign: 'center' }}>
                    <p style={{ margin: '0 0 10px 0', fontSize: '0.8rem', fontWeight: 'bold', textTransform: 'uppercase', opacity: 0.9 }}>
                        Full timeline & sources:
                    </p>
                    <div style={{ backgroundColor: '#000', color: '#fff', padding: '8px 15px', display: 'inline-block', fontSize: '1.1rem', fontFamily: 'sans-serif', fontWeight: 'bold', letterSpacing: '1px' }}>
                        namal.pages.dev
                    </div>

                    <div style={{ marginTop: '25px', paddingTop: '20px', borderTop: '1px solid rgba(255,255,255,0.3)' }}>
                        <p style={{ margin: 0, fontSize: '0.7rem', opacity: 0.9, textTransform: 'uppercase', letterSpacing: '2px' }}>
                            Goes without saying,
                        </p>
                        <p style={{ margin: '8px 0 0 0', fontSize: '1.4rem', fontWeight: '900', textTransform: 'uppercase' }}>
                            Fuck You Namal.
                        </p>
                    </div>
                </div>
            </div>

            {/* Helper Text */}
            <div style={{ marginTop: '20px', color: '#475569', fontSize: '0.8rem', textAlign: 'center' }}>
                Screenshot this card to share on Instagram/WhatsApp.
            </div>

        </div>
    );
}