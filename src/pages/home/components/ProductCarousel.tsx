// import { Carousel } from "@mantine/carousel";
import {
  Tabs,
  Badge,
  Card,
  Image,
  Text,
  Button,
  Group,
  Container,
  Title,
  Rating,
  Grid,
} from "@mantine/core";
// import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import styles from "./ProductCarousel.module.css"; // Custom CSS module
// import Autoplay from "embla-carousel-autoplay";
// import { useRef } from "react";
import { categories } from "../../../constants/constants";
import { Link } from "react-router-dom";
// Sample data for products
const products = [
  {
    id: 1,
    image:
      "https://www.cureveda.com/cdn/shop/files/Card4_10020226-24eb-40f6-be94-3021ddcb9b6b.jpg?v=1707803636&width=800",
    name: "GUT EXPERT - Gastro Comfort",
    description: "Herbal Sugar Free Chyawanprash ",
    price: 419,
    oldPrice: 645,
    discount: "35% off",
    rating: 4.4,
    reviews: 2233,
    link: "gastro-comfort",
  },
  {
    id: 2,
    image:
      "https://www.cureveda.com/cdn/shop/files/Card1_fa830874-d45b-48cc-8374-b75f0f3d1909.jpg?v=1707671989&width=800",
    name: "GUT EXPERT - LOOSE CONTROL ",
    description: "Eye Supplement With Lutein",
    price: 549,
    oldPrice: 845,
    discount: "35% off",
    rating: 4.4,
    reviews: 2233,
    link: "loose-control",
  },
  {
    id: 3,
    image:
      "https://www.cureveda.com/cdn/shop/files/Card1_fa830874-d45b-48cc-8374-b75f0f3d1909.jpg?v=1707671989&width=800",
    name: "GUT EXPERT - Soothe Gut",
    description: "Eye Supplement With Lutein",
    price: 549,
    oldPrice: 845,
    discount: "35% off",
    rating: 4.4,
    reviews: 2233,
    link: "soothe-gut",
  },
  {
    id: 4,
    image:
      "https://www.cureveda.com/cdn/shop/files/Card4_10020226-24eb-40f6-be94-3021ddcb9b6b.jpg?v=1707803636&width=800",
    name: "GUT EXPERT - Rest n Calm",
    description: "Eye Supplement With Lutein",
    price: 549,
    oldPrice: 845,
    discount: "35% off",
    rating: 4.4,
    reviews: 2233,
    link: "rest-n-calm",
  },
  {
    id: 5,
    image:
      "https://www.cureveda.com/cdn/shop/files/Card4_10020226-24eb-40f6-be94-3021ddcb9b6b.jpg?v=1707803636&width=800",
    name: "GUT EXPERT - BloatJoy ",
    description: "Eye Supplement With Lutein",
    price: 549,
    oldPrice: 845,
    discount: "35% off",
    rating: 4.4,
    reviews: 2233,
    link: "bloat-joy",
  },
  {
    id: 6,
    image:
      "https://www.cureveda.com/cdn/shop/files/Card1_fa830874-d45b-48cc-8374-b75f0f3d1909.jpg?v=1707671989&width=800",
    name: "GUT EXPERT - Shred Max",
    description: "Eye Supplement With Lutein",
    price: 549,
    oldPrice: 845,
    discount: "35% off",
    rating: 4.4,
    reviews: 2233,
    link: "shred-max",
  },
  {
    id: 7,
    image:
      "https://www.cureveda.com/cdn/shop/files/Card1_fa830874-d45b-48cc-8374-b75f0f3d1909.jpg?v=1707671989&width=800",
    name: "GUT EXPERT - LIVER Comfy",
    description: "Eye Supplement With Lutein",
    price: 549,
    oldPrice: 845,
    discount: "35% off",
    rating: 4.4,
    reviews: 2233,
    link: "liver-comfy",
  },
  {
    id: 8,
    image:
      "https://www.cureveda.com/cdn/shop/files/Card1_fa830874-d45b-48cc-8374-b75f0f3d1909.jpg?v=1707671989&width=800",
    name: "GUT EXPERT - Gutsy Gut PRE+PROBIOTIC",
    description: "Eye Supplement With Lutein",
    price: 549,
    oldPrice: 845,
    discount: "35% off",
    rating: 4.4,
    reviews: 2233,
    link: "flora-pre-probiotic",
  },
  // Add more product items as needed
];

const ProductCarousel = ({ id }: { id?: string }) => {
  // const autoplay = useRef<any>(Autoplay({ delay: 2000 }));
  return (
    <>
      {/* Pills (Categories) */}
      <Container size={"lg"} pb={"70px"}>
        <Tabs
          variant="pills"
          color="black"
          defaultValue="Bestsellers"
          className={styles.pills}
        >
          <Tabs.List className={styles.tabsList}>
            {categories.map((category) => (
              <Tabs.Tab
                value={category.label}
                key={category.label}
                className={styles.tabRoot}
                // onClick={() => handleCLickOntab(category.link)}
                p={0}
              >
                <a
                  className={styles.tabNames}
                  href={`/products/${category.link}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {category.label}
                </a>
              </Tabs.Tab>
            ))}
          </Tabs.List>
        </Tabs>
      </Container>
      <section className={styles.sectionWrapper}>
        <Container className={styles.carouselContainer} size={"lg"} id={id}>
          <Title className={styles.titleBestSeller}>Our Products</Title>
          {/* Product Carousel */}
          <Container size={"lg"}>
            {/* <Carousel
          loop
          slideSize="25%"
          slideGap="md"
          align="start"
          previousControlIcon={<IconChevronLeft size={24} />}
          nextControlIcon={<IconChevronRight size={24} />}
          classNames={{ indicator: styles.carouselIndicator }}
          plugins={[autoplay.current]}
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
                
                {product.discount && (
                  <Badge
                    color="teal"
                    variant="filled"
                    className={styles.discountBadge}
                  >
                    {product.discount}
                  </Badge>
                )}

                

                <Card.Section>
                  <Link to={`products/${product.id}/${product.link}`}>
                    <Image
                      src={product.image}
                      alt={product.name}
                      height={160}
                      fit="cover"
                    />
                  </Link>
                </Card.Section>

                
                <Text size="lg" mt="md" className={styles.productName}>
                  {product.name}
                </Text>
                <Text size="sm">{product.description}</Text>
                <Group align="center" mt="sm" gap="xs">
                  <Rating value={product.rating} readOnly />
                  <Text size="sm">({product.reviews} reviews)</Text>
                </Group>

                
                <Group justify="space-between" mt="md">
                  <Text size="xl" style={{ fontWeight: 700, color: "#FFA500" }}>
                    ₹{product.price}
                  </Text>
                  <Text size="sm" style={{ textDecoration: "line-through" }}>
                    ₹{product.oldPrice}
                  </Text>
                </Group>

                
                <Button fullWidth mt="md">
                  ADD TO CART
                </Button>
              </Card>
            </Carousel.Slide>
          ))}
        </Carousel> */}
            <Grid>
              {products.map((product) => (
                <Grid.Col span={{ md: 4, lg: 3, sm: 12 }}>
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
                      <Link to={`products/${product.id}/${product.link}`}>
                        <Image
                          src={product.image}
                          alt={product.name}
                          height={160}
                          fit="cover"
                        />
                      </Link>
                    </Card.Section>

                    {/* Product Details */}
                    <Text size="lg" mt="md" className={styles.productName}>
                      {product.name}
                    </Text>
                    <Text size="sm">{product.description}</Text>
                    <Group align="center" mt="sm" gap="xs">
                      <Rating value={product.rating} readOnly />
                      <Text size="sm">({product.reviews} reviews)</Text>
                    </Group>

                    {/* Pricing */}
                    <Group justify="space-between" mt="md">
                      <Text
                        size="xl"
                        style={{ fontWeight: 700, color: "#FFA500" }}
                      >
                        ₹{product.price}
                      </Text>
                      <Text
                        size="sm"
                        style={{ textDecoration: "line-through" }}
                      >
                        ₹{product.oldPrice}
                      </Text>
                    </Group>

                    {/* Add to Cart Button */}
                    <Button fullWidth mt="md" mb={"sm"}>
                      ADD TO CART
                    </Button>
                  </Card>
                </Grid.Col>
                // <Carousel.Slide key={product.id}>
                // </Carousel.Slide>
              ))}
            </Grid>
          </Container>
        </Container>
      </section>
    </>
  );
};

export default ProductCarousel;
