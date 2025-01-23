import { Container, Flex, Text } from "@mantine/core";
import { Link } from "react-router-dom";
import styles from "./TopBar.module.css";

const TopBar = () => {
  return (
    <div className={styles.topBar}>
      <Container size="xl" px="md" style={{ height: "55px" }}>
        <Flex justify="center" align="center" style={{ height: "100%" }}>
          <div className={styles.scrollingText}>
            <Link to={"/quiz"} style={{ textDecoration: "none" }}>
              <Text size="lg" className={styles.scrollingTextContent}>
                <span>
                  Get your free Gut Score and claim your free diet plan
                </span>
                <span>|</span> <span>MINDFUL EATING – FREE CALORY COUNTER</span>
                <span>|</span>
                <span> FREE DIET PLAN</span> <span>|</span>
                <span>
                  Get your free Gut Score and claim your free diet plan
                </span>
                <span>|</span> <span>MINDFUL EATING – FREE CALORY COUNTER</span>
                <span>|</span>
                <span> FREE DIET PLAN</span> <span>|</span>
                <span>
                  Get your free Gut Score and claim your free diet plan
                </span>
                <span>|</span> <span>MINDFUL EATING – FREE CALORY COUNTER</span>
                <span>|</span>
                <span> FREE DIET PLAN</span>
              </Text>
            </Link>
          </div>
        </Flex>
      </Container>
    </div>
  );
};

export default TopBar;
