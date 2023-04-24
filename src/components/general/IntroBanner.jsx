import { Segment, Icon, Button } from "semantic-ui-react";
import { useNavigate } from "react-router-dom";

const HeroBanner = () => {
  const navigate = useNavigate();

  const data = [
    {
      id: 1,
      icon: "user md",
      title: "40+ Years of Experience",
      buttonText: "Meet Dr. Brown, D.D.S., F.A.G.D.",
      path: "/about",
    },
    {
      id: 2,
      icon: "emergency",
      title: "24/7 Emergency Services",
      buttonText: "Emergency? Contact Us Now",
      path: "/contact",
    },
    {
      id: 3,
      icon: "money bill alternate outline",
      title: "Affordable Care",
      buttonText: "Check Your Financing Options",
      path: "/financing",
    },
    {
      id: 4,
      icon: "heartbeat",
      title: "State of the Art Facilities",
      buttonText: "Take a Tour of our Office",
      path: "/location",
    },
  ];

  return (
    <Segment.Group
      className="heroSegment"
      horizontal
    >
      {data.map((item) => (
        <Segment key={item.id}>
          <Icon name={item.icon} size="big" />
          <p>{item.title}</p>
          <Button animated id="apptBtn" onClick={() => navigate(item.path)}>
            <Button.Content visible>
              {/* If I want to add icons to the buttons --> */}
              {/* <Icon name={item.icon} /> */}
              {item.buttonText}
            </Button.Content>
            <Button.Content hidden>
              <Icon name="arrow right" />
            </Button.Content>
          </Button>
        </Segment>
      ))}
    </Segment.Group>
  );
};

export default HeroBanner;
