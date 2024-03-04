import { Typography } from "antd";

const { Title } = Typography;

export const ClosingPhrase = () => {
  return (
    <div className="phrase-container">
      <Typography>
        <Title level={2} style={{ color: "#00269A" }}>
          Our aim is to restore the operation of the complex for the advancement
          of the skiing culture in Kharkiv and the future generation of young
          skiers.
        </Title>
      </Typography>
    </div>
  );
};
