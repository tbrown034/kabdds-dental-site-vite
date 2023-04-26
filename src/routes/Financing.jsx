import HomeHero from "../components/pages/Financing/HeroSection";
import TextImageSection from "../components/pages/Financing/TextImageSection";
import IntroBanner from "../components/general/IntroBanner"
import FinancialPromo from "../components/pages/Financing/FinancePromo";

const Financing = () => {
    return (
        <div>
            <HomeHero /> 
            <IntroBanner />
            <TextImageSection />
            <FinancialPromo />
        </div>
    )

}

export default Financing;