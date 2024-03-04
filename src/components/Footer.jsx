import { Avatar, Button, Divider, Modal, Typography } from "antd";
import { useState } from "react";
import pathToPdf from "../images/pdf/zim-sv.pdf";
import logo from "../images/kh-ski.png";

const { Text } = Typography;

export const Footer = () => {
  const CURRENT_YEAR = new Date().getFullYear();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <section className="footer-container" id="contact">
      <div className="footer-wrapper content-container">
        <div className="footer-top">
          <div className="contacts">
            <div className="contacts-logo">
              <Avatar
                shape="square"
                size={66}
                icon={<img src={logo} alt="logo" />}
              />
            </div>
            <div className="contacts-text">
              <Typography>
                <Text style={{ color: "#ffffff", textTransform: "uppercase" }}>
                  ZIM SV LLC
                </Text>
              </Typography>
              <Typography>
                <Text style={{ color: "#ffffff" }}>
                  Director: Vasiliev Grigory Valeryevich
                </Text>
              </Typography>
              <Typography>
                <Text style={{ color: "#ffffff", textTransform: "uppercase" }}>
                  +38 (093) 4061307
                </Text>
              </Typography>
            </div>
          </div>

          <div className="modal flex-tile">
            <Button onClick={showModal}>Code of legal entity</Button>
            <Modal
              open={isModalOpen}
              footer={[
                <Button key="back" onClick={showModal}>
                  Close
                </Button>,
              ]}
              width={"90%"}
              height={"90%"}
              onOk={() => setIsModalOpen(false)}
              onCancel={() => setIsModalOpen(false)}
            >
              <div>
                <iframe src={pathToPdf} width="100%" height="400px"></iframe>
              </div>
            </Modal>
          </div>
        </div>

        <Divider style={{ borderColor: "#959595", margin: 0 }} />

        <div className="footer-bottom">
          <Typography>
            <Text style={{ color: "#959595" }}>
              Not for commercial use. Presentation only.
            </Text>
          </Typography>
          <Typography>
            <Text level={4} style={{ color: "#959595" }}>
              All rights reserved {CURRENT_YEAR}
            </Text>
          </Typography>
        </div>
      </div>
    </section>
  );
};
