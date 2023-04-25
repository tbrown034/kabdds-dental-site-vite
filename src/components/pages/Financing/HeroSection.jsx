import React from "react";
import HeroSectionDefault from "../../general/HeroSectionDefault"
import Photo from "../../../assets/images/insurance.jpeg"

const HeroSection = () => {
  return (
    <div>
      <HeroSectionDefault
        s
        backgroundImage={Photo}
        altImage=""
        title="Making Dental Care Affordable"
        subtitle="We promise to give you the most affordable dental care we can offer.
        We can also assist you in finding a financing program tailored to your
        needs and budget."
        showTopText={false}
        topText="Meet Your Next Dentist"
      />
    </div>
  );
};

export default HeroSection;