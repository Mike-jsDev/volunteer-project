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
            <Typography>
              <Title level={2}>Place</Title>
              <Title level={4}>
                Lorem ipsum, dolor sit amet consectetur adipis, dolor sit amet
                consectetur adipis
              </Title>
            </Typography>
            <div className="image-container">
              <img src={mapBefore} className="image-about"></img>
              <img src={mapAfter} className="image-about"></img>
            </div>
          </>
        ) : (
          <>
            <Typography>
              <Title level={2}>24.02.2022. Пришла война.</Title>
              <Title level={4}>
                Детскую горнолыжную школу не посетило 302 ребёнка. Более 3000 т.
                Любителей били лишены возможности посетить горнолыжный комплекс.
              </Title>
            </Typography>
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
