import PropTypes from "prop-types";
import { Image, Typography } from "antd";
import { photoGridBeforeImg } from "../constants/photoGridBefore";
import { photoGridAfterImg } from "../constants/photoGridAfter";
const { Title } = Typography;

export const Life = ({ id }) => {
  return (
    <section className={`photo-section ${id}`} id={id}>
      {id === "life" ? (
        <div className="content-container">
          <div className="title-container">
            <Title level={2} style={{ textAlign: "center" }}>
              Peaceful time before WAR
            </Title>
            <Title level={4} style={{ textAlign: "center" }}>
              The &quot;Kharkiv Switzerland&quot; ski resort has become not just
              a place for winter fun but also a corner where one can forget
              about everyday worries and enjoy the beauty of winter nature
            </Title>
          </div>
          <div className="photo-grid">
            <div className="photo-grid-tile tile-description">
              <p>
                It&apos;s where we grew up, trained, competed, had fun, relaxed
                and just hung out
              </p>
            </div>
            <Image.PreviewGroup>
              {photoGridBeforeImg.map((item, index) => (
                <div className="photo-grid-tile" key={index}>
                  <Image width={"100%"} height={"100%"} src={item} />
                </div>
              ))}
            </Image.PreviewGroup>
          </div>
        </div>
      ) : (
        <div className="content-container">
          <div className="title-container">
            <Title level={2} style={{ color: "#ffffff", textAlign: "center" }}>
              The complex sustained significant losses <br /> but persevered!
            </Title>
            <Title level={4} style={{ color: "#ffffff", textAlign: "center" }}>
              The ski equipment rental center was destroyed, with debris
              damaging the ski school, retractable roof, ticket booth, and two
              ski lifts. As a result of the explosion, the pumping and
              snowmaking systems were destroyed. The illumination along the ski
              slope has been completely compromised
            </Title>
          </div>
          <div className="photo-grid">
            <div className="photo-grid-tile tile-description">
              <p>The photos were taken after the demining of the area</p>
            </div>
            <Image.PreviewGroup>
              {photoGridAfterImg.map((item, index) => (
                <div className="photo-grid-tile" key={index}>
                  <Image width={"100%"} height={"100%"} src={item} />
                </div>
              ))}
            </Image.PreviewGroup>
          </div>
        </div>
      )}
    </section>
  );
};

Life.propTypes = {
  id: PropTypes.string.isRequired,
};
