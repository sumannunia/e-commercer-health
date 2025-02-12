import BannerCarousel from "./components/BannerCarousel";
import ProductCarousel from "./components/ProductCarousel";
import ServiceCards from "./components/ServiceCards";
import TestimonialBlock from "./components/Testimonials";
import { Button, Group, Modal, Title } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import Endorsement from "./components/Endorsement";
import AboutUs from "../../components/common/About";

const Home = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const [currentSection, setCurrentSection] = useState(0);
  const [isUserActive, setIsUserActive] = useState(false); // Track user activity
  const idleTimer = useRef<NodeJS.Timeout | null>(null);
  const scrollTimer = useRef<NodeJS.Timeout | null>(null);

  const sections = [
    "serviceSection",
    "productCarouselSection",
    "testimonialSection",
  ];

  // Function to scroll to a specific section
  const scrollToSection = (index: number) => {
    const sectionElement = document.getElementById(sections[index]);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: "smooth" });
    }
    setCurrentSection(index);
  };

  // Handle idle logic
  const handleIdle = () => {
    if (!isUserActive) {
      const nextSection = (currentSection + 1) % sections.length;
      scrollToSection(nextSection);
    }
  };

  // Reset idle timer & mark user as active
  const resetUserActivity = () => {
    setIsUserActive(true); // User is active
    if (idleTimer.current) clearTimeout(idleTimer.current);
    if (scrollTimer.current) clearTimeout(scrollTimer.current);

    idleTimer.current = setTimeout(() => {
      setIsUserActive(false); // Mark as idle after 10 sec
      scrollTimer.current = setTimeout(handleIdle, 10000);
    }, 10000);
  };

  useEffect(() => {
    // Stop auto-scroll when user interacts
    if (!opened) {
      window.addEventListener("mousemove", resetUserActivity);
      window.addEventListener("scroll", resetUserActivity);
      window.addEventListener("keydown", resetUserActivity);
      window.addEventListener("click", resetUserActivity);

      if (!isUserActive) {
        scrollTimer.current = setTimeout(handleIdle, 10000);
      }
    }

    return () => {
      window.removeEventListener("mousemove", resetUserActivity);
      window.removeEventListener("scroll", resetUserActivity);
      window.removeEventListener("keydown", resetUserActivity);
      window.removeEventListener("click", resetUserActivity);
      if (idleTimer.current) clearTimeout(idleTimer.current);
      if (scrollTimer.current) clearTimeout(scrollTimer.current);
    };
  }, [isUserActive, currentSection, opened]);

  useEffect(() => {
    const timer = setTimeout(() => {
      open();
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <BannerCarousel />
      <AboutUs />
      <ServiceCards id={sections[0]} />
      <ProductCarousel id={sections[1]} />
      <TestimonialBlock id={sections[2]} />
      <Endorsement />

      <Modal
        opened={opened}
        onClose={() => {
          close();
          setIsUserActive(false); // Reset user activity when modal closes
        }}
        title=""
        centered
        size="md"
        transitionProps={{ duration: 200, transition: "pop" }}
        closeOnClickOutside={false}
      >
        <Group justify="center" gap="lg">
          <Title size={"lg"} style={{ textAlign: "center" }}>
            Get your free Gut Score and claim your free diet plan
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
