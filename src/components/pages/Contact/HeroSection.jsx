import React from "react";
import HeroSectionDefault from "../../general/HeroSectionDefault"
import Photo from "../../../assets/images/dentistwords.jpeg"

const HeroSection = () => {
  return (
    <div>
      <HeroSectionDefault
        
        backgroundImage={Photo}
        altImage="Two Doctors"
        title="Have Questions? We have Answers!"
        subtitle="Let us know if you have any questions or need more information about
        our office, what services we provice, financing or insurance
        questions or anything on how we can make your visit go as pleasently
        as possible!"
        showTopText={false}
        topText="Meet Your Next Dentist"
      />
    </div>
  );
};

export default HeroSection;