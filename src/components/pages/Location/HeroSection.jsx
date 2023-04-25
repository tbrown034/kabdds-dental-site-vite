import React from "react";
import Photo from "../../../assets/images/bank.jpeg"
import HeroSectionDefault from "../../general/HeroSectionDefault"


const HeroSection = () => {
  return (
    <div>
      <HeroSectionDefault
        backgroundImage={Photo}
        altImage=""
        title="Your New Home for Dental Care"
        subtitle="Located in the thrid floor of the Fifth Third Bank at 75th St. and
        Rickert Drive in Naperville, Illinois"
        showTopText={false}
        topText="Meet Your Next Dentist"
      />
    </div>
  );
};

export default HeroSection;