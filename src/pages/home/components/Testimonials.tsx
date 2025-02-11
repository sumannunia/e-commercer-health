import {
  Container,
  Card,
  Text,
  Badge,
  Group,
  Rating,
  Paper,
  Title,
} from "@mantine/core";
import styles from "./TestimonialBlock.module.css";
import { Carousel } from "@mantine/carousel";

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
  {
    rating: 5,
    title: "Goodbye food intolerances",
    description:
      '"My bloating has subsided, I have less reactions from foods I was once intolerant to. I will be continuing to buy this product. Health is wealth, so yes the great effects are worth the price."',
    name: "Andrea W.",
  },
  {
    rating: 5,
    title: "Goodbye food intolerances",
    description:
      '"My bloating has subsided, I have less reactions from foods I was once intolerant to. I will be continuing to buy this product. Health is wealth, so yes the great effects are worth the price."',
    name: "Andrea W.",
  },
  {
    rating: 5,
    title: "Goodbye food intolerances",
    description:
      '"My bloating has subsided, I have less reactions from foods I was once intolerant to. I will be continuing to buy this product. Health is wealth, so yes the great effects are worth the price."',
    name: "Andrea W.",
  },
];

const TestimonialBlock = ({ id }: { id?: string }) => {
  return (
    <Paper className={styles.testimonialBackground} id={id}>
      <Container size="lg" px="md">
        <div className={styles.textContainer}>
          <Title ta={"center"}>What Our Customers Say</Title>
          <Text size="lg" fw={500} mb="sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
            libero, ad illum itaque quibusdam labore numquam ipsa dolores
            consequatur! Aspernatur eaque nulla necessitatibus ducimus
            repellendus excepturi dignissimos amet laborum ullam!
          </Text>
        </div>
        <Carousel
          slideSize="30%"
          // height={200}
          slideGap="md"
          withControls={false}
          align="start"
          slidesToScroll={1}
        >
          {testimonials.map((testimonial, index) => (
            <Carousel.Slide key={"carouselTestimonial" + index}>
              <Card shadow="sm" radius="md" withBorder bg={"#E73C560A"}>
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
            </Carousel.Slide>
          ))}
        </Carousel>
      </Container>
    </Paper>
  );
};

export default TestimonialBlock;
