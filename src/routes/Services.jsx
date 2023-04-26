import HomeHero from "../components/pages/Services/HeroSection";
import IntroBanner from "../components/general/IntroBanner"
import ImageTextSection from "../components/pages/Services/ImageTextSection"
import ServicesBanner from "../../src/components/pages/Home/ServicesBanner"

const Services = () => {
    return (
        <div>
            <HomeHero /> 
            <IntroBanner />
            <ImageTextSection />
           <ServicesBanner />
            
        </div>
    )

}

export default Services;