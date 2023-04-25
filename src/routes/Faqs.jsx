import HomeHero from "../components/pages/Faqs/HeroSection";
import TextImageSection from "../components/pages/Faqs/TextImageSection";
import IntroBanner from "../components/general/IntroBanner"
import BannerText from "../components/pages/Faqs/BannerText";
import ImageTextSection from "../components/pages/Faqs/ImageTextSection"

const Faqs = () => {
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

export default Faqs;