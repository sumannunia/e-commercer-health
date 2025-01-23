import { Grid, Card, Text, Image, Container } from "@mantine/core";
import styles from "./Ingridients.module.css";

// Sample data array
const ingredients = [
  {
    id: 1,
    image:
      "https://i.shgcdn.com/33e4278e-a841-430e-87ab-3b7839cdaf1c/-/format/auto/-/preview/3000x3000/-/quality/lighter/",
    title: "Curcuminoids Extract 95%",
    description: "Lowers sinister chronic inflammation",
    hoverText: "Curcuminoids are powerful antioxidants...",
  },
  {
    id: 2,
    image:
      "https://i.shgcdn.com/bf83ca39-8140-4af8-a9d1-5e8e4e5f86f1/-/format/auto/-/preview/3000x3000/-/quality/lighter/",
    title: "European Valerian Root Extract",
    description: "Activates a deep 7+ hour sleep",
    hoverText: "Known for calming properties...",
  },
  {
    id: 3,
    image:
      "https://i.shgcdn.com/bf83ca39-8140-4af8-a9d1-5e8e4e5f86f1/-/format/auto/-/preview/3000x3000/-/quality/lighter/",
    title: "European Valerian Root Extract",
    description: "Activates a deep 7+ hour sleep",
    hoverText: "Known for calming properties...",
  },
  {
    id: 4,
    image:
      "https://i.shgcdn.com/bf83ca39-8140-4af8-a9d1-5e8e4e5f86f1/-/format/auto/-/preview/3000x3000/-/quality/lighter/",
    title: "European Valerian Root Extract",
    description: "Activates a deep 7+ hour sleep",
    hoverText: "Known for calming properties...",
  },
  {
    id: 5,
    image:
      "https://i.shgcdn.com/bf83ca39-8140-4af8-a9d1-5e8e4e5f86f1/-/format/auto/-/preview/3000x3000/-/quality/lighter/",
    title: "European Valerian Root Extract",
    description: "Activates a deep 7+ hour sleep",
    hoverText: "Known for calming properties...",
  },
  {
    id: 6,
    image:
      "https://i.shgcdn.com/bf83ca39-8140-4af8-a9d1-5e8e4e5f86f1/-/format/auto/-/preview/3000x3000/-/quality/lighter/",
    title: "European Valerian Root Extract",
    description: "Activates a deep 7+ hour sleep",
    hoverText: "Known for calming properties...",
  },
  {
    id: 7,
    image:
      "https://i.shgcdn.com/bf83ca39-8140-4af8-a9d1-5e8e4e5f86f1/-/format/auto/-/preview/3000x3000/-/quality/lighter/",
    title: "European Valerian Root Extract",
    description: "Activates a deep 7+ hour sleep",
    hoverText: "Known for calming properties...",
  },
  // Add more items...
];
const Banner = () => {
  return (
    <div className={styles.banner}>
      <Container className={styles.bannerTextContainer}>
        <Text size="xl" className={styles.mainText}>
          Over 1,000 Science Backed Health Benefits With Fast Acting Pure
          Ingredients In Their Most Bioavailable Forms
        </Text>
        <Text size="sm" className={styles.subText}>
          ZERO Compromise When It Comes To Science, Quality, Dosage Amount And
          Safety
        </Text>
      </Container>
    </div>
  );
};
const Ingredients = () => {
  return (
    <div>
      <Banner />
      <Container py={"lg"}>
        <Grid>
          {ingredients.map((item) => (
            <Grid.Col key={item.id} span={{ xs: 12, sm: 6, md: 3 }}>
              <Card className={styles.card}>
                <Card.Section className={styles.cardSection}>
                  <Image
                    src={item.image}
                    height={160}
                    fit="cover"
                    alt={item.title}
                  />
                  <div className={styles.hoverText}>
                    <Text size="sm" color="white">
                      {item.hoverText}
                    </Text>
                  </div>
                </Card.Section>
                <Text fw={500} mt="md" size="lg">
                  {item.title}
                </Text>
                <Text size="sm" color="dimmed">
                  {item.description}
                </Text>
              </Card>
            </Grid.Col>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default Ingredients;
