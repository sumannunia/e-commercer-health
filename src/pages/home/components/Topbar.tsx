import { Container, Flex, Text } from "@mantine/core";
import { IconPhone } from "@tabler/icons-react";

const TopBar = () => {
  return (
    <div style={{ backgroundColor: "#b03030", color: "#ffffff" }}>
      <Container size="xl" px="md" style={{ height: "35px" }}>
        <Flex justify="center" align="center" style={{ height: "100%" }}>
          {/* Left Section: Phone Icon and Number */}
          <Flex
            align="center"
            gap="xs"
            style={{ position: "absolute", left: 20 }}
          >
            <IconPhone size={16} />
            <Text size="sm" style={{ fontWeight: 500 }}>
              9691997997
            </Text>
          </Flex>

          {/* Center Section: Promotional Text */}
          <Text
            size="sm"
            style={{
              fontWeight: 500,
              textTransform: "uppercase",
              textAlign: "center",
            }}
          >
            Flat 40% off | Sitewide | Includes 5% prepaid discount
          </Text>
        </Flex>
      </Container>
    </div>
  );
};

export default TopBar;
