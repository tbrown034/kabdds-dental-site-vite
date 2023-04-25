import HomeHero from "../components/pages/Location/HeroSection";
import TextImageSection from "../components/pages/Location/TextImageSection";
import IntroBanner from "../components/general/IntroBanner"
import BannerText from "../components/pages/Location/BannerText";
import ImageTextSection from "../components/pages/Location/ImageTextSection"

const Location = () => {
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

export default Location;