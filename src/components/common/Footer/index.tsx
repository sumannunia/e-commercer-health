import { Container, Divider, Text } from "@mantine/core";

import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container>
        <Text fw={600} ta={"center"}>
          A Revive Health and Wellness company
        </Text>
        <Divider my={"md"} />
        <Text className={styles.address}>Revive Health and Wellness 92-G,</Text>
        <Text className={styles.address}>Pratap Shopping Complex</Text>
        <Text className={styles.address}>Unit No. : 302, 3rd Floor,</Text>
        <Text className={styles.address}>Munirka New Delhi 110067,</Text>
      </Container>
    </footer>
  );
};

export default Footer;
