import { Carousel } from "@mantine/carousel";
import {
  Tabs,
  Badge,
  Card,
  Image,
  Text,
  Button,
  Group,
  Container,
} from "@mantine/core";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import styles from "./ProductCarousel.module.css"; // Custom CSS module

// Sample data for products
const products = [
  {
    id: 1,
    image:
      "https://www.cureveda.com/cdn/shop/files/Card4_10020226-24eb-40f6-be94-3021ddcb9b6b.jpg?v=1707803636&width=800",
    name: "Cureveda Pureprash - 500gm",
    description: "Herbal Sugar Free Chyawanprash ",
    price: 419,
    oldPrice: 645,
    discount: "35% off",
  },
  {
    id: 2,
    image:
      "https://www.cureveda.com/cdn/shop/files/Card1_fa830874-d45b-48cc-8374-b75f0f3d1909.jpg?v=1707671989&width=800",
    name: "Cureveda Vision - Eye Health",
    description: "Eye Supplement With Lutein",
    price: 549,
    oldPrice: 845,
    discount: "35% off",
  },
  {
    id: 2,
    image:
      "https://www.cureveda.com/cdn/shop/files/Card1_fa830874-d45b-48cc-8374-b75f0f3d1909.jpg?v=1707671989&width=800",
    name: "Cureveda Vision - Eye Health",
    description: "Eye Supplement With Lutein",
    price: 549,
    oldPrice: 845,
    discount: "35% off",
  },
  {
    id: 2,
    image:
      "https://www.cureveda.com/cdn/shop/files/Card4_10020226-24eb-40f6-be94-3021ddcb9b6b.jpg?v=1707803636&width=800",
    name: "Cureveda Vision - Eye Health",
    description: "Eye Supplement With Lutein",
    price: 549,
    oldPrice: 845,
    discount: "35% off",
  },
  {
    id: 2,
    image:
      "https://www.cureveda.com/cdn/shop/files/Card4_10020226-24eb-40f6-be94-3021ddcb9b6b.jpg?v=1707803636&width=800",
    name: "Cureveda Vision - Eye Health",
    description: "Eye Supplement With Lutein",
    price: 549,
    oldPrice: 845,
    discount: "35% off",
  },
  {
    id: 2,
    image:
      "https://www.cureveda.com/cdn/shop/files/Card1_fa830874-d45b-48cc-8374-b75f0f3d1909.jpg?v=1707671989&width=800",
    name: "Cureveda Vision - Eye Health",
    description: "Eye Supplement With Lutein",
    price: 549,
    oldPrice: 845,
    discount: "35% off",
  },
  // Add more product items as needed
];

// Categories for pills
const categories = [
  "Indignation",
  "Acidity",
  "Constipation",
  "Bloating",
  "Liver Care",
];

const ProductCarousel = () => {
  return (
    <Container className={styles.carouselContainer} size={"lg"}>
      {/* Pills (Categories) */}
      <Tabs
        variant="pills"
        color="orange"
        defaultValue="Bestsellers"
        className={styles.pills}
      >
        <Tabs.List className={styles.tabsList}>
          {categories.map((category) => (
            <Tabs.Tab value={category} key={category}>
              <a
                href={`/products?category=${category}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {category}
              </a>
            </Tabs.Tab>
          ))}
        </Tabs.List>
      </Tabs>

      {/* Product Carousel */}
      <Container size={"lg"}>
        <Carousel
          loop
          slideSize="25%"
          slideGap="md"
          align="start"
          previousControlIcon={<IconChevronLeft size={24} />}
          nextControlIcon={<IconChevronRight size={24} />}
          classNames={{ indicator: styles.carouselIndicator }}
        >
          {products.map((product) => (
            <Carousel.Slide key={product.id}>
              <Card
                shadow="sm"
                padding="sm"
                pt={0}
                radius="md"
                withBorder
                className={styles.card}
              >
                {/* Discount Badge */}
                {product.discount && (
                  <Badge
                    color="teal"
                    variant="filled"
                    className={styles.discountBadge}
                  >
                    {product.discount}
                  </Badge>
                )}

                {/* Product Image */}
                <Card.Section>
                  <Image
                    src={product.image}
                    alt={product.name}
                    height={160}
                    fit="cover"
                  />
                </Card.Section>

                {/* Product Details */}
                <Text size="lg" mt="md" className={styles.productName}>
                  {product.name}
                </Text>
                <Text size="sm" color="dimmed">
                  {product.description}
                </Text>

                {/* Pricing */}
                <Group justify="space-between" mt="md">
                  <Text size="xl" style={{ fontWeight: 700, color: "#FFA500" }}>
                    ₹{product.price}
                  </Text>
                  <Text size="sm" style={{ textDecoration: "line-through" }}>
                    ₹{product.oldPrice}
                  </Text>
                </Group>

                {/* Add to Cart Button */}
                <Button fullWidth color="orange" radius="md" mt="md">
                  ADD TO CART
                </Button>
              </Card>
            </Carousel.Slide>
          ))}
        </Carousel>
      </Container>
    </Container>
  );
};

export default ProductCarousel;
