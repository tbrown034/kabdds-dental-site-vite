import React from "react";
import HeroSection from "../../general/HeroSectionDefault"
import Photo from "../../../assets/images/practice.jpeg"

const AboutPage = () => {
  return (
    <div>
      <HeroSection
        s
        backgroundImage={Photo}
        altImage="Two Doctors"
        title="Dr. Keith Brown DDS, FAGD"
        subtitle="Dr. Brown is one of Chicagolands most experienced and dedicated dentists. With more than 40 years treating patients in Naperville, Il., he is a doctor you can trust."
        showTopText={true}
        topText="Meet Your Next Dentist"
      />
    </div>
  );
};

export default AboutPage;