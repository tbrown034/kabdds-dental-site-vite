import React from "react";
import Carousel from "react-bootstrap/Carousel";

const FinancialPromo = () => {
  return (
    <div className="default-padding secondary-bg-color center-text">
      <h1>Our Latest Deals and Promotions</h1>
      <Carousel variant="dark">
        <Carousel.Item className="reviewHolder">
          <p className="dealText">
            Free Virtual Before & After Picture For Any Cosmetic Procedure
          </p>
        </Carousel.Item>
        <Carousel.Item className="reviewHolder">
          <p className="dealText">
            Free Laughing Gas Sedation (Nitrous Oxide) for an Anxiety and
            Pain-free Environemtn
          </p>
        </Carousel.Item>
        <Carousel.Item className="reviewHolder">
          <p className="dealText">
            Free Emergnecy Exams (normally a $75), plus Free Crown, Root Canal
            and Extraction Consultations (does not include X-ray)
          </p>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default FinancialPromo;
