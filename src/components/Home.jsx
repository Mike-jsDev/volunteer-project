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
            <Title style={{ color: "#ffffff" }}>
              &quot;Kharkiv Switzerland&quot; - favorite <br /> place of all
              Kharkiv citizens since 1968
            </Title>
            <Title level={3} style={{ color: "#ffffff" }}>
              With love and from the bottom of heart
            </Title>
          </Typography>
        </div>
      </section>
    </>
  );
};
