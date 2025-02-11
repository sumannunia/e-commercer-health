import React from "react";
import { Container, Group, Text, Divider, Anchor, Modal } from "@mantine/core";
import {
  IconBrandTwitter,
  IconBrandYoutube,
  IconBrandLinkedin,
  IconBrandGithub,
} from "@tabler/icons-react";
import styles from "./Footer.module.css";
import { TermsAndUse } from "../Terms/index";
import { useDisclosure } from "@mantine/hooks";
import PrivacyPolicy from "../Privacy";
import ShippingPolicy from "../ShippingPolicy";
import RefundPolicy from "../RefundPolicy";
const activeContent = {
  privacy: {
    title: "Privacy Policy",
    content: <PrivacyPolicy />,
  },
  termsAndUse: {
    title: "Terms of service",
    content: <TermsAndUse />,
  },
  shippingPolicy: {
    title: "Shipping Policy",
    content: <ShippingPolicy />,
  },
  refundPolicy: {
    title: "Refund Policy",
    content: <RefundPolicy />,
  },
};
const Footer = () => {
  const [activeModal, setActiveModal] = React.useState("");
  const [opened, { open, close }] = useDisclosure(false);
  const handlePrivacyClick = (activeItem: string) => {
    open();
    setActiveModal(activeItem);
  };
  return (
    <div className={styles.footer}>
      <Container size="lg" className={styles.footerContainer}>
        {/* Top Section: Navigation & Social Icons */}
        <div className={styles.topSection}>
          {/* Navigation Links */}
          <Group className={styles.navLinks} gap="md">
            <Anchor href="/" className={styles.link}>
              Home
            </Anchor>
            <Anchor href="/products/all" className={styles.link}>
              Shop
            </Anchor>

            <Anchor href="/fitness/yoga" className={styles.link}>
              Fitness
            </Anchor>
            <Anchor href="/about-us" className={styles.link}>
              About Us
            </Anchor>
          </Group>

          {/* Social Icons */}
          <Group className={styles.socialIcons} gap="md">
            <Anchor href="#">
              <IconBrandTwitter size={24} />
            </Anchor>
            <Anchor href="#">
              <IconBrandYoutube size={24} />
            </Anchor>
            <Anchor href="#">
              <IconBrandLinkedin size={24} />
            </Anchor>
            <Anchor href="#">
              <IconBrandGithub size={24} />
            </Anchor>
          </Group>
        </div>

        {/* Divider */}
        <Divider className={styles.divider} />

        {/* Bottom Section: Terms & Privacy Policy */}
        <Group className={styles.bottomSection} justify="center" gap="xs">
          <Anchor
            href="#"
            className={styles.link}
            onClick={() => handlePrivacyClick("refundPolicy")}
          >
            Refund Policy
          </Anchor>
          <Text>|</Text>
          <Anchor
            href="#"
            className={styles.link}
            onClick={() => handlePrivacyClick("shippingPolicy")}
          >
            Shipping Policy
          </Anchor>
          <Text>|</Text>
          <Anchor
            href="#"
            className={styles.link}
            onClick={() => handlePrivacyClick("termsAndUse")}
          >
            Term of use
          </Anchor>
          <Text>|</Text>
          <Anchor
            href="#"
            className={styles.link}
            onClick={() => handlePrivacyClick("privacy")}
          >
            Privacy Policy
          </Anchor>
        </Group>
      </Container>
      {activeModal && (
        <Modal
          opened={opened}
          onClose={close}
          title={activeContent[activeModal as keyof typeof activeContent].title}
          // h={"70dvh"}
          yOffset={"15dvh"}
          size={"lg"}
        >
          {/* Modal content */}
          {activeContent[activeModal as keyof typeof activeContent].content}
        </Modal>
      )}
    </div>
  );
};

export default Footer;
