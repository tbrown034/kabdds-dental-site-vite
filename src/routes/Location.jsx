import HomeHero from "../components/pages/Location/HeroSection";
import TextImageSection from "../components/pages/Location/TextImageSection";
import IntroBanner from "../components/general/IntroBanner"
import BannerText from "../components/pages/Location/BannerText";
import ImageTextSection from "../components/pages/Location/ImageTextSection";
import Map from "../components/general/Map";
import LocationButtons from "../components/pages/Location/LocationButtons";

const Location = () => {
    return (
        <div>
            <HomeHero /> 
            <IntroBanner />
            <ImageTextSection />
            <Map />
            <LocationButtons />


            
        </div>
    )

}

export default Location;