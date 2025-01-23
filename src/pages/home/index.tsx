import BannerCarousel from "./components/BannerCarousel";
import ProductCarousel from "./components/ProductCarousel";
// import SingleBanner from "./components/SingleBanner";
import ServiceCards from "./components/ServiceCards";
import TestimonialBlock from "./components/Testimonials";
import { Button, Group, Modal, Title } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const Home = () => {
  const [opened, { open, close }] = useDisclosure(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      open();
    }, 1000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      {/* <SingleBanner /> */}
      <BannerCarousel />
      <ServiceCards />
      {/* <InfoCards /> */}
      <ProductCarousel />
      <TestimonialBlock />
      <Modal
        opened={opened}
        onClose={close}
        title=""
        centered
        size="md"
        transitionProps={{ duration: 200, transition: "pop" }}
        closeOnClickOutside={false}
      >
        <Group justify="center" gap="lg">
          <Title size={"lg"} style={{ textAlign: "center" }}>
            Get you free Gut Score and claim you free diet plan
          </Title>
        </Group>
        <Link
          to="/quiz"
          style={{
            display: "flex",
            justifyContent: "center",
            textDecoration: "none",
          }}
        >
          <Button mx={"auto"} mt={"xl"}>
            Avail Now
          </Button>
        </Link>
      </Modal>
    </>
  );
};

export default Home;
