import { Hero } from "../sections/Hero";
import { QuickAccess } from '../sections/QuickAccess';
import { About } from '../sections/About';
import { Programs } from '../sections/Programs';
import { Experience } from '../sections/Experience';
import { CtaBanner } from '../sections/CtaBanner';
import { Contact } from '../sections/Contact';
import FounderQuote from "../sections/FounderQuote";
import CampusStats from "../sections/CampusStats";
function Home(){
    return(
        <>
        <Hero/>
        <QuickAccess />
        <CampusStats/>
        <Programs />
        <FounderQuote/>
        <About />
        <Experience />
        <CtaBanner />
        <Contact />
        </>
    )
}
export default Home;