import { Container, Group, Button, Image, Text } from "@mantine/core";
import QRCode from "react-qr-code"; // Assuming you use a library like 'react-qr-code'

const QRCodePage = () => {
  return (
    <div style={{ backgroundColor: "#f9f9f9", height: "70vh" }}>
      <Container
        size="sm"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
        }}
      >
        {/* QR Code Section */}
        <div
          style={{
            backgroundColor: "white",
            padding: "16px",
            borderRadius: "8px",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
          }}
        >
          <QRCode value="https://yourwebsite.com" size={150} />
        </div>

        {/* Description */}
        <Text size="lg" mt="lg">
          Scan the QR code to download our app!
        </Text>

        {/* Buttons Section */}
        <Group mt="md" gap="xl">
          <Button
            component="a"
            href="https://play.google.com/store/apps"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              backgroundColor: "#34A853",
              color: "white",
              padding: "12px 24px",
              borderRadius: "6px",
              height: "100px",
            }}
          >
            <Group gap="xs">
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Play Store"
                width={100}

                // height={200}
              />
              <Text color="white" size="sm">
                Play Store
              </Text>
            </Group>
          </Button>
        </Group>
      </Container>
    </div>
  );
};

export default QRCodePage;
