import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ConfigProvider } from "antd";

const config = {
  token: {
    fontFamily: "'Manrope', sans-serif",
    colorText: "#0A1C52",
  },
  components: {
    Typography: {
      fontSizeHeading1: 60,
      fontSizeHeading2: 40,
      fontSizeHeading3: 24,
      fontSizeHeading4: 18,
      fontSizeHeading5: 16,
      lineHeightHeading1: 1.2,
      lineHeightHeading2: 1.2,
      lineHeightHeading3: 1.2,
      lineHeightHeading4: 1.2,
      lineHeightHeading5: 1.2,
    },
  },
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ConfigProvider theme={config}>
      <App />
    </ConfigProvider>
  </React.StrictMode>,
);
