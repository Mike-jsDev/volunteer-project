import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ConfigProvider } from "antd";

const config = {
  token: {
    fontFamily: "Monserrat, sans-serif",
  },
  components: {
    Typography: {
      fontSizeHeading1: 60,
      fontSizeHeading2: 32,
      fontSizeHeading3: 20,
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
