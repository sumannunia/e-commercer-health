import { Container, Grid, Card, Text, Image } from "@mantine/core";
import styles from "./InfoCards.module.css";
import yoga from "../../../assets/images/yoga.webp";
import calorie from "../../../assets/images/calorie.webp";
import diet from "../../../assets/images/diet.webp";
import diagnostic from "../../../assets/images/diagnostic.webp";
// import recipe from "../../../assets/images/recipe.webp";
import probiotic from "../../../assets/images/probiotic.webp";
import vedic from "../../../assets/images/vedic.webp";
import { Link } from "react-router-dom";
// Data array for the cards
const data = [
  {
    title: "Pre / Pro Biotic",
    image: probiotic,
    description:
      "Fuel Your Gut with Prebiotics, Power It with Probiotics Probiotics for Balance, Prebiotics for Strength",
  },
  {
    title: "Diet & Recipies",
    image: diet,
    description:
      "Cooking for Gut Health Made Simple and Delicious Choose normal ways to support your health and avoid chemicals",
  },
  {
    title: "Gut Testing",
    image: diagnostic,
    description:
      "A gut health test helps identify the types of microbes in your gut, including good and bad bacteria",
  },
  {
    title: "Calorie counter",
    image: calorie,
    description:
      "Antibiotics can disrupt gut health. Support your gut with balanced nutrition.",
  },
  {
    title: "Vedic Medicine",
    image: vedic,
    description:
      "RESTORE BALANCE NATURALLY WITH VEDIC MEDICINE VEDIC CARE FOR HAPPIER HEALTHIER GUT",
  },
  {
    title: "Yoga Wellness",
    image: yoga,
    description:
      "Breathe, Stretch, Heal – GUT health starts with you Strengthen your Core Nourish your Gut",
  },

  // {
  //   title: "Recipies",
  //   image: recipe,
  //   description:
  //     "Use proven strategies and supplements to restore gut health effectively.",
  // },
];

const ServiceCards = ({ id }: { id?: string }) => {
  return (
    <Container size="lg" px="md" mb={"xl"} fluid id={id}>
      {/* <Title className={styles.title}>Our Services</Title> */}
      <Grid gutter="md" justify="center" mt={10}>
        {data.map((item, index) => (
          <Grid.Col span={{ md: 2, sm: 12 }} key={index}>
            <Link
              to="/qr-app"
              style={{
                textDecoration: "none",
                height: "100%",
                display: "block",
              }}
            >
              <Card
                shadow="sm"
                radius="md"
                className={styles.card}
                pb={0}
                h={"100%"}
              >
                <Card.Section>
                  <Image
                    src={item.image}
                    alt={item.title}
                    height={120}
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
            </Link>
          </Grid.Col>
        ))}
      </Grid>
    </Container>
  );
};

export default ServiceCards;
