import { Avatar, Space } from "antd";
import logo from "../images/kh-ski.png";

export const Header = () => {
  return (
    <div className="header-wrapper">
      <Space wrap size={16}>
        <Avatar
          shape="square"
          size="large"
          icon={<img src={logo} alt="logo" />}
        />
      </Space>
    </div>
  );
};
