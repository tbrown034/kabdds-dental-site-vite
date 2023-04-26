import HomeHero from "../components/pages/Contact/HeroSection";
import TextImageSection from "../components/pages/Contact/TextImageSection";
import IntroBanner from "../components/general/IntroBanner"
import ContactForm from "../components/pages/Contact/ContactForm";


const Contact = () => {
    return (
        <div>
            <HomeHero /> 
            <IntroBanner />
            <TextImageSection />
            <ContactForm />

            
            
        </div>
    )

}

export default Contact;