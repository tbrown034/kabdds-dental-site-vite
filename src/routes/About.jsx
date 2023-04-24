import HomeHero from "../components/pages/About/HeroSection";
import TextImageSection from "../components/pages/About/TextImageSection";
import IntroBanner from "../components/general/IntroBanner"

const About = () => {
    return (
        <div>
            <HomeHero /> 
            <IntroBanner />

            <TextImageSection />
            
        </div>
    )

}

export default About;