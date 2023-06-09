import React from "react";
import HeroSectionDefault from "../../general/HeroSectionDefault"
import Photo from "../../../assets/images/appointment.webp"

const HeroSection = () => {
  return (
    <div>
      <HeroSectionDefault
        backgroundImage={Photo}
        altImage=""
        title="Schedule Your Next Appointment"
        subtitle=" We are excited to see and help assist you. Your journey to a
        healthier, brighter smile starts today!"
        showTopText={true}
        topText="Meet Your Next Dentist"
      />
    </div>
  );
};

export default HeroSection;