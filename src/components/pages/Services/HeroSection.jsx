import React from "react";
import Photo from "../../../assets/images/dentist2.jpeg"
import HeroSectionDefault from "../../general/HeroSectionDefault"


const HeroSection = () => {
  return (
    <div>
      <HeroSectionDefault
        backgroundImage={Photo}
        altImage=""
        title="We'll Take Care of Your Teeth"
        subtitle="Our goal is to have your teeth looking great and free of pain or
        discomfort in as short a time as possible."
        showTopText={true}
        topText="Our Services"
      />
    </div>
  );
};

export default HeroSection;