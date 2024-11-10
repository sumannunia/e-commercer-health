import { Modal, Button, Text, Group, Image, Title } from "@mantine/core";
import React from "react";
import ifoModalImg from "../../../assets/header/popo.jpg";
import { Link } from "react-router-dom";

interface InfoModal {
  opened: boolean;
  setOpened: any;
}

const InfoModal: React.FC<InfoModal> = ({ opened, setOpened }) => {
  //   const [opened, setOpened] = useState(false);

  return (
    <>
      {/* Modal Component */}
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        withCloseButton
        size="xl"
        radius="md"
        centered
      >
        <Group wrap="nowrap" gap={0}>
          {/* Left Section: Image */}
          <div style={{ flex: 1 }}>
            <Image
              src={ifoModalImg} // Replace with actual image URL
              alt="Modal Image"
              radius="md"
              style={{ height: "100%", objectFit: "cover" }}
            />
          </div>

          {/* Right Section: Content */}
          <div style={{ flex: 1, padding: "16px" }}>
            <Title
              mb="xs"
              size={"24"}
              style={{ color: "#709059", textAlign: "center" }}
            >
              Looking for more information?
            </Title>
            <Text size="md" mb="md" style={{ textAlign: "center" }}>
              Book a Free Sleep Consultation & a ResMed Sleep Expert will
              contact you soon.
            </Text>

            {/* Book Now Button */}

            <Link to={"/book"}>
              <Button
                radius="md"
                size="md"
                color="#709059"
                display={"flex"}
                mx={"auto"}
              >
                Book now
              </Button>
            </Link>
          </div>
        </Group>
      </Modal>
    </>
  );
};

export default InfoModal;
