import React from "react";
import HeroSectionDefault from "../../general/HeroSectionDefault"
import Photo from "../../../assets/images/dentist.jpeg"

const HeroSection = () => {
  return (
    <div>
      <HeroSectionDefault
        backgroundImage={Photo}
        altImage=""
        title="Let us Brigthen Your Smile"
        subtitle="Dr. Keith A. Brown, D.D.S., F.A.G.D., has been serving Naperville and
        the Chicagoland area for more than 40 years. Schedule a cleaning or
        appointment today!"
        showTopText={false}
        topText="Meet Your Next Dentist"
      />
    </div>
  );
};

export default HeroSection;