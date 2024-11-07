import { FC, useState } from "react";
import {
  Container,
  Grid,
  Card,
  Text,
  Image,
  Button,
  Group,
  Badge,
  Rating,
  Paper,
} from "@mantine/core";

import styles from "./AllProductsPage.module.css";
import { Link } from "react-router-dom";

// Sample categories and product data
const categories = [
  "All",
  "Indignation",
  "Acidity",
  "Constipation",
  "Bloating",
  "Liver Care",
];

interface Product {
  id: number;
  image: string;
  name: string;
  description: string;
  price: number;
  oldPrice: number;
  rating: number;
  reviews: number;
  category: string;
  duration: string[];
  active: string;
}

const products: Product[] = [
  {
    id: 1,
    image:
      "https://thegoodbug.com/cdn/shop/products/2.ByeByeBloat_6c5b5492-b64f-4a2a-9a4c-2109f10a0ee1.jpg?v=1724607468&width=533",
    name: "Metabolically Lean | Indignation - HRX",
    description: "Herbal Sugar Free Chyawanprash",
    price: 499,
    oldPrice: 790,
    rating: 4.4,
    reviews: 2859,
    category: "Indignation",
    duration: ["15 Days", "1 Month", "2 Months", "3 Months"],
    active: "15 Days",
  },
  {
    id: 2,
    image:
      "https://thegoodbug.com/cdn/shop/files/Slide-2.jpg?v=1720464357&width=533",
    name: "Gut Balance | Improves Gut Health",
    description: "Eye Supplement With Lutein",
    price: 649,
    oldPrice: 800,
    rating: 4.6,
    reviews: 59,
    category: "Bloating",
    duration: ["15 Days", "1 Month", "2 Months", "3 Months"],
    active: "1 Month",
  },
  {
    id: 3,
    image:
      "https://thegoodbug.com/cdn/shop/products/2.ByeByeBloat_6c5b5492-b64f-4a2a-9a4c-2109f10a0ee1.jpg?v=1724607468&width=533",
    name: "Gut Balance | Improves Gut Health",
    description: "Eye Supplement With Lutein",
    price: 649,
    oldPrice: 800,
    rating: 4.6,
    reviews: 59,
    category: "Acidity",
    duration: ["15 Days", "1 Month", "2 Months", "3 Months"],
    active: "1 Month",
  },
  {
    id: 4,
    image:
      "https://thegoodbug.com/cdn/shop/products/2.ByeByeBloat_6c5b5492-b64f-4a2a-9a4c-2109f10a0ee1.jpg?v=1724607468&width=533",
    name: "Gut Balance | Improves Gut Health",
    description: "Eye Supplement With Lutein",
    price: 649,
    oldPrice: 800,
    rating: 4.6,
    reviews: 59,
    category: "Constipation",
    duration: ["15 Days", "1 Month", "2 Months", "3 Months"],
    active: "1 Month",
  },
  {
    id: 5,
    image:
      "https://thegoodbug.com/cdn/shop/products/2.ByeByeBloat_6c5b5492-b64f-4a2a-9a4c-2109f10a0ee1.jpg?v=1724607468&width=533",
    name: "Gut Balance | Improves Gut Health",
    description: "Eye Supplement With Lutein",
    price: 649,
    oldPrice: 800,
    rating: 4.6,
    reviews: 59,
    category: "Liver Care",
    duration: ["15 Days", "1 Month", "2 Months", "3 Months"],
    active: "1 Month",
  },
  // Add more products as needed
];

const AllProductsPage = () => {
  const [activeCategory, setActiveCategory] = useState<string>("");

  const handleCategoryClick = (category: string) => {
    setActiveCategory(category === "All" ? "" : category);
  };

  return (
    <div className={styles.pageWrapper}>
      {/* Full-width Background for Categories */}
      <Paper className={styles.categoriesContainer} radius={0}>
        <Container size="lg" px="md">
          <Text size="xl" mb="xs" fw={600} className={styles.topHeading}>
            We offer something for everyone.
          </Text>
          <Text className={styles.topHeading} mb="lg">
            Browse the winning combination of bacteria and their support systems
            synbiotics.
          </Text>
          <Group
            className={styles.categoryGroup}
            gap="sm"
            justify="center"
            wrap="wrap"
          >
            {categories.map((category) => (
              <Button
                variant="outline"
                radius="xl"
                key={category}
                className={styles.categoryButton}
                onClick={() => handleCategoryClick(category)}
              >
                {category}
              </Button>
            ))}
          </Group>
        </Container>
      </Paper>

      {/* Products Section */}
      <Container px="md" className={styles.productsSection}>
        <Text size="xl" mb="lg" fw={600} className={styles.categoryName}>
          {activeCategory ? activeCategory : "Bestsellers"}
        </Text>
        <Grid gutter="lg">
          {activeCategory
            ? products
                .filter((item) => item.category === activeCategory)
                .map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))
            : products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
        </Grid>
      </Container>
    </div>
  );
};

interface ProductCardProps {
  product: Product;
}

const ProductCard: FC<ProductCardProps> = ({ product }) => {
  return (
    <Grid.Col span={{ xs: 12, sm: 6, md: 3 }}>
      <Link to={`/product/${product.id}`}>
        <Card shadow="sm" radius="md" withBorder className={styles.productCard}>
          <Card.Section>
            <Image
              src={product.image}
              alt={product.name}
              height={200}
              fit="cover"
            />
          </Card.Section>

          <Text fw={500} size="lg" mt="md">
            {product.name}
          </Text>
          <Group gap="xs" mt="xs">
            <Badge color="dark" variant="filled">
              {product.category}
            </Badge>
          </Group>

          <Group
            mt="sm"
            gap="xs"
            className={styles.priceContainer}
            align="baseline"
          >
            <Text size="lg" fw="bold" style={{ color: "orange" }}>
              ₹{product.price}
            </Text>
            <Text
              size="sm"
              color="dimmed"
              style={{ textDecoration: "line-through" }}
            >
              ₹{product.oldPrice}
            </Text>
          </Group>
          <Text color="dimmed" size="xs">
            MRP (incl. of all taxes)
          </Text>

          <Group mt="xs" gap="xs" align="center">
            <Rating value={product.rating} readOnly size="sm" />
            <Text size="xs" color="dimmed">
              {product.rating} ({product.reviews} reviews)
            </Text>
          </Group>

          {/* Subscription Options */}
          <Group
            mt="md"
            gap="xs"
            className={styles.durationButtons}
            wrap="wrap"
          >
            {product.duration.map((duration) => (
              <Button
                variant={duration === product.active ? "filled" : "outline"}
                color="dark"
                radius="xl"
                size="xs"
                key={duration}
              >
                {duration}
              </Button>
            ))}
          </Group>

          <Button fullWidth mt="md" color="dark">
            Add to cart
          </Button>
        </Card>
      </Link>
    </Grid.Col>
  );
};

export default AllProductsPage;
