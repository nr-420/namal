import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

// --- Components ---
import { Hero } from "./components/Hero.tsx";
import { SectionOne } from "./components/sections/SectionOne.tsx";
import { SectionTwo } from "./components/sections/SectionTwo.tsx";
import { SectionThree } from "./components/sections/SectionThree.tsx";
import { SectionFour } from "./components/sections/SectionFour.tsx";
import { SectionFive } from "./components/sections/SectionFive.tsx";
import { SectionSix } from "./components/sections/SectionSix.tsx";
import { SectionOffshore } from "./components/sections/SectionOffshore.tsx";
import { FuckYou } from "./components/FuckYou.tsx"; // aka SectionSeven
import { Navbar } from "./components/common/Navbar.tsx";
import ScorecardPage from "./pages/scorecard.tsx";

// --- New Page ---

// 1. We create a wrapper for your main "Scroll-telling" page
// This ensures the Navbar only appears here, not on the Scorecard
const MainStory = () => {
    return (
        <>
            <Navbar /> {/* Sticky Nav only for the main story */}
            <Hero />
            <SectionOne />
            <SectionTwo />
            <SectionThree />
            <SectionFour />
            <SectionFive />
            <SectionOffshore />
            <SectionSix />
            <FuckYou />
        </>
    );
};

function App() {
    return (
        <BrowserRouter>
            <Routes>
                {/* Route 1: The Main Analysis (Home) */}
                <Route path="/" element={<MainStory />} />

                {/* Route 2: The Standalone Scorecard */}
                <Route path="/scorecard" element={<ScorecardPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;