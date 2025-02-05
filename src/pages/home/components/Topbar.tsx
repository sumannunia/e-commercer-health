import { Container, Flex, Grid, List, Modal, Text, Title } from "@mantine/core";
import { Link } from "react-router-dom";
import styles from "./TopBar.module.css";
import { useDisclosure } from "@mantine/hooks";
import QRCodeCustom from "../../../components/common/QR";

const TopBar = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const handleMindfulClick = () => {
    console.log("clicked mindful");
    open();
  };
  return (
    <div className={styles.topBar}>
      <Container size="xl" px="md" style={{ height: "55px" }}>
        <Flex justify="center" align="center" style={{ height: "100%" }}>
          <div className={styles.scrollingText}>
            {/* <Link to={"/quiz"} style={{ textDecoration: "none" }}> */}
            <Text size="lg" className={styles.scrollingTextContent}>
              <Link
                to={"/quiz"}
                style={{ textDecoration: "none", color: "#fff" }}
              >
                <span>
                  Get your free Gut Score and claim your free diet plan
                </span>
              </Link>
              <span>|</span>{" "}
              <span
                style={{ cursor: "pointer" }}
                onClick={() => handleMindfulClick()}
              >
                MINDFUL EATING – FREE CALORY COUNTER
              </span>
              <span>|</span>
              <Link
                to={"/quiz"}
                style={{ textDecoration: "none", color: "#fff" }}
              >
                <span> FREE DIET PLAN</span>
              </Link>
              <span>|</span>
              <Link
                to={"/quiz"}
                style={{ textDecoration: "none", color: "#fff" }}
              >
                <span>
                  Get your free Gut Score and claim your free diet plan
                </span>
              </Link>
              <span>|</span>{" "}
              <span
                style={{ cursor: "pointer" }}
                onClick={() => handleMindfulClick()}
              >
                MINDFUL EATING – FREE CALORY COUNTER
              </span>
              <span>| </span>
              <Link
                to={"/quiz"}
                style={{ textDecoration: "none", color: "#fff" }}
              >
                <span> FREE DIET PLAN </span>
              </Link>
              <span> |</span>
              <Link
                to={"/quiz"}
                style={{ textDecoration: "none", color: "#fff" }}
              >
                <span>
                  Get your free Gut Score and claim your free diet plan
                </span>
              </Link>
              <span>|</span>{" "}
              <span
                style={{ cursor: "pointer" }}
                onClick={() => handleMindfulClick()}
              >
                MINDFUL EATING – FREE CALORY COUNTER
              </span>
              <span> | </span>
              <Link
                to={"/quiz"}
                style={{ textDecoration: "none", color: "#fff" }}
              >
                <span> FREE DIET PLAN </span>
              </Link>
              <span> | </span>
            </Text>
            {/* </Link> */}
          </div>
        </Flex>
      </Container>
      <Modal
        opened={opened}
        onClose={close}
        title="Mindful Eating - Free Calorie Counter"
        centered
        size={"lg"}
        closeOnClickOutside={false}
      >
        <Grid>
          <Grid.Col span={{ md: 6, lg: 5, xl: 5 }}>
            <QRCodeCustom />
          </Grid.Col>
          <Grid.Col span={{ md: 6, lg: 7, xl: 7 }}>
            <Title size={"md"}>To Avial Free Services: </Title>
            <List>
              <List.Item>Free diet plan.</List.Item>
              <List.Item>Free calorie counter.</List.Item>
              <List.Item>Free step / physical activity counter.</List.Item>
              <List.Item>
                Run tests to make sure your changes do not break the build.
              </List.Item>
              <List.Item>Free gut friendly recipies.</List.Item>
              <List.Item>Free yoga exercises content.</List.Item>
            </List>
          </Grid.Col>
        </Grid>
      </Modal>
    </div>
  );
};

export default TopBar;
