import { MdKeyboardArrowDown } from "react-icons/md";
import { useLanguage } from "../contexts/LanguageContext.tsx";
import React from "react";

export function Hero() {
    const { t, lang } = useLanguage();
    const isEnglish = lang === 'en';

    // The scroll handler function
    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault(); // Stop the default instant "jump"
        const element = document.getElementById('sectionOne');
        if (element) {
            // This triggers the smooth animation
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            <style>{`
                /* Hero Container: Deep Void Background */
                .hero {
                    min-height: 100vh; /* Ensure full height so scroll is noticeable */
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    position: relative;
                    overflow: hidden;
                    text-align: center;
                }

                /* The Quote: Massive, Serif, Authoritative */
                .hero-content {
                    max-width: 900px;
                    z-index: 10;
                    animation: fadeInUp 1s ease-out;
                }

                .hero-quote {
                    font-family: ${isEnglish ? "'Times New Roman', serif" : 'serif'}; 
                    font-size: clamp(2rem, 6vw, 4.5rem); 
                    font-weight: 700;
                    color: #f8fafc;
                    line-height: 1.2; 
                    margin-bottom: 2rem;
                    position: relative;
                    font-style: italic;
                    letter-spacing: -0.02em;
                }

                /* Stylized Quotation Marks */
                .hero-quote::before {
                    content: "“";
                    position: absolute;
                    top: -60px;
                    left: -40px;
                    font-size: 8rem;
                    color: white;
                    opacity: 0.3;
                    font-family: sans-serif;
                }

                .hero-author {
                    display: block;
                    font-family: sans-serif;
                    font-size: clamp(1rem, 2vw, 1.25rem);
                    color: #ef4444; 
                    text-transform: uppercase;
                    letter-spacing: 4px; 
                    font-weight: 700;
                    margin-bottom: 6rem; 
                }

                /* The CTA: Cold, Clinical, Investigative */
                .hero-cta {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 1rem;
                    color: #94a3b8; 
                    font-family: monospace; 
                    font-size: 1rem;
                    opacity: 0; 
                    animation: fadeIn 1s ease-out 1s forwards; 
                    transition: color 0.3s ease;
                }

                /* Add hover effect to indicate clickability */
                .hero-cta:hover {
                    color: #fff;
                    cursor: pointer;
                }

                .hero-cta span {
                    border-bottom: 1px solid #334155;
                    padding-bottom: 5px;
                    text-transform: uppercase; 
                    letter-spacing: 2px;
                }

                .hero-arrow {
                    font-size: 2rem;
                    color: #fff;
                    animation: bounce 2s infinite;
                }

                @keyframes fadeInUp {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }

                @keyframes fadeIn {
                    to { opacity: 1; }
                }

                @keyframes bounce {
                    0%, 20%, 50%, 80%, 100% {transform: translateY(0);}
                    40% {transform: translateY(-10px);}
                    60% {transform: translateY(-5px);}
                }
            `}</style>

            <section className="hero">
                <div className="hero-content">
                    <blockquote className="hero-quote">
                        {t.hero.quote}
                    </blockquote>

                    <span className="hero-author">
                        {t.hero.author}
                    </span>

                    {/* Added onClick handler here */}
                    <a href="#sectionOne" onClick={handleScroll} style={{ textDecoration: 'none' }}>
                        <div className="hero-cta">
                            <span>{t.hero.cta}</span>
                            <MdKeyboardArrowDown className="hero-arrow" />
                        </div>
                    </a>
                </div>
            </section>
        </>
    );
}