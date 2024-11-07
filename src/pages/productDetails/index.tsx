import { useState } from "react";
import {
  Container,
  Grid,
  Text,
  Image,
  Button,
  Badge,
  Group,
  Rating,
  Paper,
  Title,
  Card,
} from "@mantine/core";
import { IconCheck } from "@tabler/icons-react";
import styles from "./ProductDetailsPage.module.css"; // Add styles as necessary

// Sample Data
const product = {
  name: "Cureveda Pro Plant Protein",
  description: "100% Vegan Protein Isolate",
  price: 1037,
  oldPrice: 1595,
  rating: 4.6,
  reviews: 2233,
  flavors: ["Chocolate", "Vanilla", "Strawberry", "Coffee", "Mango"],
  sizes: [
    { name: "Starter Pack", weight: "500 gm", price: 1037 },
    { name: "Results Pack", weight: "1 kg", price: 1279 },
    { name: "Value Pack", weight: "1.5 kg", price: 1749 },
  ],
  benefits: [
    "Muscle building",
    "Energy support",
    "All round nutrition",
    "Antioxidant boost",
  ],
  images: [
    "https://www.cureveda.com/cdn/shop/files/chocolate.jpg?v=1724138121&width=1200",
    "https://www.cureveda.com/cdn/shop/files/ProCardforweb1.jpg?v=1711430581&width=1000",
    "https://www.cureveda.com/cdn/shop/files/ProCardforweb2..jpg?v=1711430581&width=1000",
    "https://www.cureveda.com/cdn/shop/files/Pro_Chocolate_-_Pack_of_3.jpg?v=1728569533&width=1200",
  ],
  discountBanner: "FLAT 40% OFF *INCLUDES 5% OFF ON PREPAID ORDERS",
};
const ingredients = [
  {
    id: 1,
    image:
      "https://www.cureveda.com/cdn/shop/files/chocolate.jpg?v=1724138121&width=1200",
    title: "Lorem ipsum dolor",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci, dolor.",
    hiddenText:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci, impedit voluptates. Labore repellat accusamus tempora omnis architecto maxime error adipisci.",
  },
  {
    id: 2,
    image:
      "https://www.cureveda.com/cdn/shop/files/chocolate.jpg?v=1724138121&width=1200",
    title: "Dolor sit amet",
    description: "Consectetur adipisicing elit. Adipisci, dolor.",
    hiddenText:
      "Adipisci, impedit voluptates. Labore repellat accusamus tempora omnis architecto maxime error adipisci.",
  },
  {
    id: 3,
    image:
      "https://www.cureveda.com/cdn/shop/files/chocolate.jpg?v=1724138121&width=1200",
    title: "Dolor sit amet",
    description: "Consectetur adipisicing elit. Adipisci, dolor.",
    hiddenText:
      "Adipisci, impedit voluptates. Labore repellat accusamus tempora omnis architecto maxime error adipisci.",
  },
  {
    id: 4,
    image:
      "https://www.cureveda.com/cdn/shop/files/chocolate.jpg?v=1724138121&width=1200",
    title: "Dolor sit amet",
    description: "Consectetur adipisicing elit. Adipisci, dolor.",
    hiddenText:
      "Adipisci, impedit voluptates. Labore repellat accusamus tempora omnis architecto maxime error adipisci.",
  },
  // Add more products as needed
];
const ProductDetailsPage = () => {
  const [selectedFlavor, setSelectedFlavor] = useState(product.flavors[0]);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [activeImage, setActiveImage] = useState(product.images[0]);

  return (
    <>
      <Image
        src={
          "https://thegoodbug.com/cdn/shop/files/Top_banner_1.jpg?v=1715679883"
        }
        fit="cover"
      />
      <Container px="md" mt={"lg"}>
        <Grid gutter="lg">
          {/* Left Column - Product Images */}
          <Grid.Col span={7}>
            <Paper withBorder p="md" radius="md">
              <Image
                src={activeImage}
                alt={product.name}
                radius="md"
                className={styles.mainImage}
              />
              <Group mt="sm" gap="xs">
                {product.images.map((img, index) => (
                  <Image
                    key={index}
                    src={img}
                    width={50}
                    height={50}
                    radius="sm"
                    onClick={() => setActiveImage(img)}
                    style={{
                      cursor: "pointer",
                      border:
                        activeImage === img
                          ? "2px solid #000"
                          : "1px solid #ddd",
                    }}
                  />
                ))}
              </Group>
            </Paper>
          </Grid.Col>

          {/* Right Column - Product Details */}
          <Grid.Col span={5}>
            {/* Discount Banner */}
            <Paper withBorder className={styles.discountBanner} radius="sm">
              <Text size="xl" fw={700} color="#004c97">
                {product.discountBanner}
              </Text>
            </Paper>

            <Text fw={700} size="lg" mt="md">
              {product.name}
            </Text>
            <Text color="dimmed" size="sm">
              {product.description}
            </Text>

            <Group align="center" mt="sm" gap="xs">
              <Rating value={product.rating} readOnly />
              <Text size="sm" color="dimmed">
                ({product.reviews} reviews)
              </Text>
            </Group>

            {/* Benefits */}
            <Group mt="md" gap="sm">
              {product.benefits.map((benefit, index) => (
                <Badge
                  key={index}
                  color="green"
                  leftSection={<IconCheck size={14} />}
                >
                  {benefit}
                </Badge>
              ))}
            </Group>

            {/* Flavor Selection */}
            <Text size="sm" mt="md" fw={500}>
              Flavour: {selectedFlavor}
            </Text>
            <Group gap="xs" mt="xs">
              {product.flavors.map((flavor) => (
                <Button
                  variant={flavor === selectedFlavor ? "filled" : "outline"}
                  color="orange"
                  radius="xl"
                  size="xs"
                  key={flavor}
                  onClick={() => setSelectedFlavor(flavor)}
                >
                  {flavor}
                </Button>
              ))}
            </Group>

            {/* Size Selection */}
            <Text size="sm" mt="md" fw={500}>
              Size: {selectedSize.name}
            </Text>
            <Group gap="xs" mt="xs">
              {product.sizes.map((size) => (
                <Button
                  variant={
                    size.name === selectedSize.name ? "filled" : "outline"
                  }
                  color="orange"
                  radius="xl"
                  size="xs"
                  key={size.name}
                  onClick={() => setSelectedSize(size)}
                >
                  {size.name} ({size.weight})
                </Button>
              ))}
            </Group>

            {/* Price and Add to Cart */}
            <Group mt="lg" gap="xs" align="center">
              <Text size="lg" fw={700} color="orange">
                ₹{selectedSize.price}
              </Text>
              <Text
                size="sm"
                color="dimmed"
                style={{ textDecoration: "line-through" }}
              >
                ₹{product.oldPrice}
              </Text>
            </Group>

            <Button fullWidth mt="md" color="orange" radius="xl" size="md">
              Add to Cart
            </Button>
          </Grid.Col>
        </Grid>
        <Title my={"lg"} className={styles.ingridentsTitle}>
          Ingridients
        </Title>
        <Grid>
          {ingredients.map((ingredient) => (
            <Grid.Col
              key={ingredient.id + ingredient.title}
              span={{ xs: 12, sm: 6, md: 3 }}
            >
              <Card>
                <Card.Section className={styles.cardSection}>
                  <Image src={ingredient.image} height={200} fit="cover" />
                  <Text className={styles.hiddenText}>
                    {ingredient.hiddenText}
                  </Text>
                </Card.Section>
                <Text fw={500} size="lg" mt="md">
                  {ingredient.title}
                </Text>
                <Text fw={400} size="sm">
                  {ingredient.description}
                </Text>
              </Card>
            </Grid.Col>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default ProductDetailsPage;
