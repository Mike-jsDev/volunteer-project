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
          <Title level={2} style={{ color: "white", textAlign: "center" }}>
            Peaceful time before WAR
          </Title>
          <Title
            level={4}
            style={{
              color: "white",
              textAlign: "center",
            }}
          >
            Lorem ipsum, dolor sit amet consectetur adipis, dolor sit amet
            consectetur adipis
          </Title>
          <div className="photo-grid">
            <div className="photo-grid-tile tile-description">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipis, dolor sit amet
                consectetur adipis
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
          <Title level={2} style={{ color: "white", textAlign: "center" }}>
            After 24.02.2022
          </Title>
          <Title
            level={4}
            style={{
              color: "white",
              textAlign: "center",
            }}
          >
            Lorem ipsum, dolor sit amet consectetur adipis, dolor sit amet
            consectetur adipis
          </Title>
          <div className="photo-grid">
            <div className="photo-grid-tile tile-description">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipis, dolor sit amet
                consectetur adipis
              </p>
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
