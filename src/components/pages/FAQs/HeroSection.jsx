import React from "react";
import HeroSectionDefault from "../../general/HeroSectionDefault"
import Photo from "../../../assets/images/smile.jpeg"

const HeroSection = () => {
  return (
    <div>
      <HeroSectionDefault
        backgroundImage={Photo}
        altImage="Two Doctors"
        title="Frequently Asked Questions"
        subtitle="We promise to give you the most affordable dental care we can offer.
        We can also assist you in finding a financing program tailored to
        your needs and budget."
        showTopText={false}
        topText="Meet Your Next Dentist"
      />
    </div>
  );
};

export default HeroSection;