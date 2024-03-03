import { Button, Modal, Typography } from "antd";
import { useState } from "react";
import pathToPdf from "../images/pdf/zim-sv.pdf";

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
        <Typography>
          <Text style={{ color: "white", textTransform: "uppercase" }}>
            not for commercial use. Presentation only.
          </Text>
        </Typography>
        <Typography>
          <Text level={4} style={{ color: "white" }}>
            All rights reserved {CURRENT_YEAR}.
          </Text>
        </Typography>

        <>
          <Button onClick={showModal}>Code of legal entity</Button>
          <Modal
            open={isModalOpen}
            footer={[
              <Button key="back" onClick={showModal}>
                Close
              </Button>,
            ]}
            width={"auto"}
            onOk={() => setIsModalOpen(false)}
            onCancel={() => setIsModalOpen(false)}
          >
            <div>
              <iframe src={pathToPdf} width="100%" height="400px"></iframe>
            </div>
          </Modal>
        </>
      </div>
    </section>
  );
};
