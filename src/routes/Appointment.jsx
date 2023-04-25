import HomeHero from "../components/pages/Appointment/HeroSection";
import TextImageSection from "../components/pages/Appointment/TextImageSection";
import IntroBanner from "../components/general/IntroBanner"
import BannerText from "../components/pages/Appointment/BannerText";
import ImageTextSection from "../components/pages/Appointment/ImageTextSection"

const Appointment = () => {
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

export default Appointment;