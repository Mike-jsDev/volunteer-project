import Video from "../video/demo.mp4";
import { Header } from "./Header";
import { Typography } from "antd";

const { Title } = Typography;

export const HomeSection = () => {
  return (
    <>
      <Header />
      <section className="home-section" id="home">
        <video id="bannerVideo" width="100%" height="auto" autoPlay muted loop>
          <source src={Video} type="video/mp4" />
        </video>
        <div className="bg-overlay"></div>
        <div className="home-content">
          <Typography>
            <Title style={{ color: "white" }}>Мы основаны в 1968г</Title>
            <Title level={4} style={{ color: "white" }}>
              Любители становились профессионалами.
            </Title>
            <Title level={4} style={{ color: "white" }}>
              Горнолыжная школа вырастила профессионалов.
            </Title>
          </Typography>
        </div>
      </section>
    </>
  );
};
