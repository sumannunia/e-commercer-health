import {
  Container,
  Grid,
  Card,
  Text,
  Badge,
  Group,
  Rating,
  Paper,
} from "@mantine/core";
import styles from "./TestimonialBlock.module.css";

const testimonials = [
  {
    rating: 5,
    title: "4 weeks in and my hot flashes go away",
    description:
      "\"After 4 weeks on Hormone Harmony, my hot flashes have completely gone. Now I've got more energy and I'm sleeping better\"",
    name: "Jenny T.",
  },
  {
    rating: 5,
    title: "I’m feeling a lot better and my digestive issues go away",
    description:
      "\"I feel better, it's helped with my hot flashes, chronic digestive issues... I'm feeling a lot happier and better with myself and life in general\"",
    name: "Cathy N.",
  },
  {
    rating: 5,
    title: "Goodbye food intolerances",
    description:
      '"My bloating has subsided, I have less reactions from foods I was once intolerant to. I will be continuing to buy this product. Health is wealth, so yes the great effects are worth the price."',
    name: "Andrea W.",
  },
];

const TestimonialBlock = () => {
  return (
    <Paper className={styles.testimonialBackground}>
      <Container size="lg" px="md">
        <div className={styles.textContainer}>
          <Text size="lg" fw={500} mb="sm">
            Real Results From Our Customers
          </Text>
          <Text size="xl" fw={700} mb="lg">
            2.4 Million+ Women Are Making New Long Lasting Positive Health
            Changes
          </Text>
        </div>
        <Grid gutter="lg">
          {testimonials.map((testimonial, index) => (
            <Grid.Col key={index} span={{ xs: 12, sm: 6, md: 4 }}>
              <Card shadow="sm" radius="md" withBorder>
                <Group align="center" justify="center" mb="xs">
                  <Rating value={testimonial.rating} readOnly size="sm" />
                </Group>
                <Text fw={600} className={styles.cardTitle} mb="sm">
                  {testimonial.title}
                </Text>
                <Text size="sm" className={styles.cardDescription} mb="sm">
                  {testimonial.description}
                </Text>
                <Group align="center" justify="center" mt="lg">
                  <Badge color="green" variant="outline">
                    Verified Buyer
                  </Badge>
                </Group>
              </Card>
            </Grid.Col>
          ))}
        </Grid>
      </Container>
    </Paper>
  );
};

export default TestimonialBlock;
