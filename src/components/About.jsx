import PropTypes from "prop-types";
import { Typography } from "antd";
import mapBefore from "../images/map-before.png";
import mapAfter from "../images/map-after.png";
import building1 from "../images/building1.jpg";
import building2 from "../images/building2.jpg";

const { Title } = Typography;

export const About = ({ id }) => {
  return (
    <section className={`about-section ${id}`} id={id}>
      <div className="about-wrapper content-container">
        {id === "about" ? (
          <>
            <div className="title-container">
              <Typography>
                <Title level={2}>
                  &quot;Kharkiv Switzerland&quot; is located <br /> less than 40
                  km from the Russian border
                </Title>
                <Title level={4}>
                  During the full-scale invasion, the troops approached the
                  complex almost to its doorstep
                </Title>
              </Typography>
            </div>
            <div className="image-container">
              <img src={mapBefore} className="image-about"></img>
              <img src={mapAfter} className="image-about"></img>
            </div>
          </>
        ) : (
          <>
            <div className="title-container">
              <Typography>
                <Title level={2}>
                  On February 24, 2022, Russia initiated <br /> a full-scale
                  invasion into Ukrainian territory
                </Title>
                <Title level={4}>
                  Over 300 children were unable to attend the children&apos;s
                  ski school. More than 3000 skiing enthusiasts were deprived of
                  the opportunity to pursue their favorite activity in the area
                  known as the &quot;Kharkiv Switzerland&quot;
                </Title>
              </Typography>
            </div>
            <div className="image-container">
              <img src={building1} className="image-about"></img>
              <img src={building2} className="image-about"></img>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

About.propTypes = {
  id: PropTypes.string.isRequired,
};
