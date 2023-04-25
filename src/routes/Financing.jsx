import HomeHero from "../components/pages/Financing/HeroSection";
import TextImageSection from "../components/pages/Financing/TextImageSection";
import IntroBanner from "../components/general/IntroBanner"
import BannerText from "../components/pages/Financing/BannerText";
import ImageTextSection from "../components/pages/Financing/ImageTextSection"

const Financing = () => {
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

export default Financing;