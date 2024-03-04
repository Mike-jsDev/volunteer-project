import { Typography } from "antd";

const { Title } = Typography;

export const ClosingPhrase = () => {
  return (
    <div className="phrase-container">
      <div className="content-container">
        <Typography>
          <Title level={2}>
            Our aim is to restore the operation of the complex for the
            advancement of the skiing culture in Kharkiv and the future
            generation of young skiers.
          </Title>
        </Typography>
      </div>
    </div>
  );
};
