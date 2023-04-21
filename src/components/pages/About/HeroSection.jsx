import React from "react";
import HeroSection from "../../../components/general/HeroSection"
import AboutPhoto from "../../../assets/images/practice.jpeg"

const AboutPage = () => {
  return (
    <div>
      <HeroSection
        backgroundImage={AboutPhoto}
        altImage="Two Doctors"
        title="About Us"
        subtitle="Learn about our mission and values"
      />
    </div>
  );
};

export default AboutPage;