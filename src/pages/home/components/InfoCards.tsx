import { Container, Grid, Card, Text, Image, Title } from "@mantine/core";
import styles from "./InfoCards.module.css";
import chemical from "../../../assets/images/no chemical.png";
import antibiotics from "../../../assets/images/antibiotics.png";
import clinically from "../../../assets/images/clinically.png";
// Data array for the cards
const data = [
  {
    title: "Stop putting chemicals in your body",
    image: chemical,
    description:
      "Choose natural ways to support your health and avoid harmful chemicals.",
  },
  {
    title: "Antibiotics take a toll on your gut health",
    image: antibiotics,
    description:
      "Antibiotics can disrupt gut health. Support your gut with balanced nutrition.",
  },
  {
    title: "Treat your GUT with a clinically proven plan only",
    image: clinically,
    description:
      "Use proven strategies and supplements to restore gut health effectively.",
  },
];

const InfoCards = () => {
  return (
    <Container size="lg" px="md" my={"xl"}>
      <Title className={styles.title}>Gut Health</Title>
      <Grid gutter="md">
        {data.map((item, index) => (
          <Grid.Col span={{ md: 4, sm: 12 }} key={index}>
            <Card shadow="sm" radius="md" className={styles.card}>
              <Card.Section>
                <Image
                  src={item.image}
                  alt={item.title}
                  height={300}
                  fit="cover"
                />
              </Card.Section>
              <div className={styles.cardContent}>
                <Text size="lg" className={styles.cardTitle}>
                  {item.title}
                </Text>
                <Text size="sm" className={styles.cardDescription}>
                  {item.description}
                </Text>
              </div>
            </Card>
          </Grid.Col>
        ))}
      </Grid>
    </Container>
  );
};

export default InfoCards;
