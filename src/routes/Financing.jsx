import HomeHero from "../components/pages/Financing/HeroSection";
import TextImageSection from "../components/pages/Financing/TextImageSection";
import IntroBanner from "../components/general/IntroBanner"
import FinancialPromo from "../components/pages/Financing/FinancePromo";
import InsuranceOptions from "../components/pages/Financing/InsuranceOptions"

const Financing = () => {
    return (
        <div>
            <HomeHero /> 
            <IntroBanner />
            <TextImageSection />
            <FinancialPromo />
            <InsuranceOptions />
        </div>
    )

}

export default Financing;