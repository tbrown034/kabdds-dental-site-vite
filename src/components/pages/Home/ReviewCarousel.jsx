import Reviews from "../../../assets/data/reviews";
import Carousel from "react-bootstrap/Carousel";
import { Icon, Rating } from "semantic-ui-react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleLeft, faArrowCircleRight } from '@fortawesome/free-solid-svg-icons'

const ReviewCarousel = () => {
  return (
    <div className="default-padding center-text secondary-bg-color primary-color">
      <h1>Hear from our Patients</h1>
      <Carousel
        variant="light"
        prevIcon={<FontAwesomeIcon icon={faArrowCircleLeft} size="3x" />}
        nextIcon={<FontAwesomeIcon icon={faArrowCircleRight} size="3x" />}
      >
        {Reviews.map((review, index) => (
          <Carousel.Item className="default-padding" key={index}>
            <p>
              <Icon name="quote left" size="big" />
              {review.review}
              {"  "}
              <Icon name="quote right" size="big" />
            </p>
            <h5>{`- ${review.name}`}</h5>
            <h5>{review.location}</h5>
            <h5>
              <Rating icon="star" defaultRating={review.rating} maxRating={5} />
            </h5>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default ReviewCarousel;