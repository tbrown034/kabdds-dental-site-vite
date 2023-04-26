import HomeHero from "../components/pages/Appointment/HeroSection";
import TextImageSection from "../components/pages/Appointment/TextImageSection";
import IntroBanner from "../components/general/IntroBanner"
import BannerText from "../components/pages/Appointment/BannerText";
import ImageTextSection from "../components/pages/Appointment/ImageTextSection"
import AppointmentForm from "../components/pages/Appointment/AppoinmentForm";

const Appointment = () => {
    return (
        <div>
            <HomeHero /> 
            <IntroBanner />
            <AppointmentForm />
           
            
        </div>
    )

}

export default Appointment;