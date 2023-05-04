import HomeHero from "../components/pages/About/HeroSection";
import TextImageSection from "../components/pages/About/TextImageSection";
import IntroBanner from "../components/general/IntroBanner"
import BannerText from "../components/pages/About/BannerText";
import ImageTextSection from "../components/pages/About/ImageTextSection"
import Fellow from "../components/pages/About/Fellow"
import Logos from "../components/pages/About/Logos"

const About = () => {
    return (
        <div>
            <HomeHero /> 
            <IntroBanner />
            <ImageTextSection />
            <Logos />
            <BannerText />
            <Fellow />
            <TextImageSection />
            
        </div>
    )

}

export default About;