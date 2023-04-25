export { default as Header } from "./Header";
export { default as Footer } from "./Footer";
export { default as Location } from "./Location";
export { default as About } from "./About";
export { default as Faqs } from "./Faqs";
export { default as Appointment } from "./Appointment";
export { default as Financing } from "./Financing";
export { default as Root } from "./root";
export { default as Services } from "./Services";
export { default as Contact } from "./Contact";
import HomeHero from "../components/pages/About/HeroSection";
import TextImageSection from "../components/pages/About/TextImageSection";
import IntroBanner from "../components/general/IntroBanner"
import BannerText from "../components/pages/About/BannerText";
import ImageTextSection from "../components/pages/About/ImageTextSection"




const Index = () => {
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

export default Index;