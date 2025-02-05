import BannerCarousel from "./components/BannerCarousel";
import ProductCarousel from "./components/ProductCarousel";
// import SingleBanner from "./components/SingleBanner";
import ServiceCards from "./components/ServiceCards";
import TestimonialBlock from "./components/Testimonials";
import { Button, Group, Modal, Title } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import Endorsement from "./components/Endorsement";

const Home = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const [currentSection, setCurrentSection] = useState(0); // Track the current section
  const [isCursorMoving, setIsCursorMoving] = useState(false); // Track mouse movement
  const idleTimer = useRef<NodeJS.Timeout | null>(null); // Timer reference
  const sections = [
    "serviceSection",
    "productCarouselSection",
    "testimonialSection",
  ]; // List of section IDs

  // Function to scroll to a specific section
  const scrollToSection = (index: number) => {
    const sectionElement = document.getElementById(sections[index]);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: "smooth" });
    }
    setCurrentSection(index); // Update the current section
  };

  // Handle idle logic
  const handleIdle = () => {
    if (!isCursorMoving) {
      const nextSection = (currentSection + 1) % sections.length; // Move to the next section
      scrollToSection(nextSection);
    }
  };
  // Handle mouse movement
  const handleMouseMove = () => {
    if (idleTimer.current && !opened) clearTimeout(idleTimer.current); // Clear the timer
    setIsCursorMoving(true); // Mouse is moving
    idleTimer.current = setTimeout(() => {
      setIsCursorMoving(false); // Mouse is idle after 5 seconds
    }, 5000); // 5-second delay
  };

  useEffect(() => {
    // Add event listener for mouse movement
    if (!opened) {
      window.addEventListener("mousemove", handleMouseMove);
      // Auto-scroll logic
      if (!isCursorMoving) {
        idleTimer.current = setTimeout(handleIdle, 5000);
      }
    }
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (idleTimer.current) clearTimeout(idleTimer.current);
    };
  }, [isCursorMoving, currentSection, opened]);

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
      <ServiceCards id={sections[0]} />
      {/* <InfoCards /> */}
      <ProductCarousel id={sections[1]} />
      <TestimonialBlock id={sections[2]} />
      <Endorsement />
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
