import HomeHero from "../components/pages/Services/HeroSection";
import TextImageSection from "../components/pages/Services/TextImageSection";
import IntroBanner from "../components/general/IntroBanner"
import BannerText from "../components/pages/Services/BannerText";
import ImageTextSection from "../components/pages/Services/ImageTextSection"

const Services = () => {
    return (
        <div>
            <HomeHero /> 
            <IntroBanner />
            <ImageTextSection />
            <BannerText />
            <TextImageSection />
            
        </div>
    )

}

export default Services;