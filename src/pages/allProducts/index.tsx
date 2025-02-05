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
  Loader,
} from "@mantine/core";

import styles from "./AllProductsPage.module.css";
import { Link, useParams } from "react-router-dom";
import { addItemToCart } from "../../redux/slices/cartSlice";
import { useFetch } from "../../hooks/usefetch";
import { useAppDispatch } from "../../redux/store";
import { categories } from "../../constants/constants";

interface Product {
  id: number;
  image: string;
  name: string;
  description: string;
  price: number;
  oldPrice: number;
  rating: number;
  reviews: number;
  category: string[];
  duration: string[];
  tag: string[];
  active: string;
  link: string;
}

const products: Product[] = [
  {
    id: 1,
    image:
      "https://thegoodbug.com/cdn/shop/products/2.ByeByeBloat_6c5b5492-b64f-4a2a-9a4c-2109f10a0ee1.jpg?v=1724607468&width=533",
    name: "GUT EXPERT - Gastro Comfort",
    description: "Herbal Sugar Free Chyawanprash",
    price: 499,
    oldPrice: 790,
    rating: 4.4,
    reviews: 2859,
    category: ["Constipation", "Indigestion", "Loss of Apetite"],
    duration: ["15 Days", "1 Month"],
    active: "15 Days",
    tag: ["indigestion", "constipation", "loss-of-apetite"],
    link: "gastro-comfort",
  },
  {
    id: 2,
    image:
      "https://thegoodbug.com/cdn/shop/files/Slide-2.jpg?v=1720464357&width=533",
    name: "GUT EXPERT -LOOSE CONTROL",
    description: "Eye Supplement With Lutein",
    price: 649,
    oldPrice: 800,
    rating: 4.6,
    reviews: 59,
    category: ["Loose Motion"],
    duration: ["1 Month", "2 Months"],
    active: "1 Month",
    tag: ["loose-motion"],
    link: "loose-control",
  },
  {
    id: 3,
    image:
      "https://thegoodbug.com/cdn/shop/products/2.ByeByeBloat_6c5b5492-b64f-4a2a-9a4c-2109f10a0ee1.jpg?v=1724607468&width=533",
    name: "GUT EXPERT -Soothe Gut",
    description: "Eye Supplement With Lutein",
    price: 649,
    oldPrice: 800,
    rating: 4.6,
    reviews: 59,
    category: ["Acidic Reflux"],
    duration: ["15 Days", "1 Month"],
    active: "1 Month",
    tag: ["acidic-reflux", "acidity"],
    link: "soothe-gut",
  },
  {
    id: 4,
    image:
      "https://thegoodbug.com/cdn/shop/products/2.ByeByeBloat_6c5b5492-b64f-4a2a-9a4c-2109f10a0ee1.jpg?v=1724607468&width=533",
    name: "GUT EXPERT - Rest n Calm",
    description: "Eye Supplement With Lutein",
    price: 649,
    oldPrice: 800,
    rating: 4.6,
    reviews: 59,
    category: ["Sleep/ Stress"],
    duration: ["1 Month", "2 Months"],
    active: "1 Month",
    tag: ["stress-and-sleep"],
    link: "rest-n-calm",
  },
  {
    id: 5,
    image:
      "https://thegoodbug.com/cdn/shop/products/2.ByeByeBloat_6c5b5492-b64f-4a2a-9a4c-2109f10a0ee1.jpg?v=1724607468&width=533",
    name: "GUT EXPERT -BloatJoy",
    description: "Eye Supplement With Lutein",
    price: 649,
    oldPrice: 800,
    rating: 4.6,
    reviews: 59,
    category: ["Bloating"],
    duration: ["1 Month", "2 Months"],
    active: "1 Month",
    tag: ["bloating"],
    link: "bloat-joy",
  },
  {
    id: 6,
    image:
      "https://thegoodbug.com/cdn/shop/products/2.ByeByeBloat_6c5b5492-b64f-4a2a-9a4c-2109f10a0ee1.jpg?v=1724607468&width=533",
    name: "GUT EXPERT -  Shred Max",
    description: "Eye Supplement With Lutein",
    price: 649,
    oldPrice: 800,
    rating: 4.6,
    reviews: 59,
    category: ["Wieght Loss"],
    duration: ["1 Month", "2 Months"],
    active: "1 Month",
    tag: ["weight-loss"],
    link: "shred-max",
  },
  {
    id: 7,
    image:
      "https://thegoodbug.com/cdn/shop/products/2.ByeByeBloat_6c5b5492-b64f-4a2a-9a4c-2109f10a0ee1.jpg?v=1724607468&width=533",
    name: "GUT EXPERT - LIVER Comfy",
    description: "Eye Supplement With Lutein",
    price: 649,
    oldPrice: 800,
    rating: 4.6,
    reviews: 59,
    category: ["Liver Detox "],
    duration: ["1 Month", "2 Months"],
    active: "1 Month",
    tag: ["liver-detox"],
    link: "liver-comfy",
  },
  {
    id: 8,
    image:
      "https://thegoodbug.com/cdn/shop/products/2.ByeByeBloat_6c5b5492-b64f-4a2a-9a4c-2109f10a0ee1.jpg?v=1724607468&width=533",
    name: "GUT EXPERT - FLORA PRE+PROBIOTIC",
    description: "Eye Supplement With Lutein",
    price: 649,
    oldPrice: 800,
    rating: 4.6,
    reviews: 59,
    category: ["Pre and Pro Biotic capsule "],
    duration: ["1 Month", "2 Months"],
    active: "1 Month",
    tag: ["pre-pro-biotic"],
    link: "flora-pre-probiotic",
  },
  {
    id: 9,
    image:
      "https://thegoodbug.com/cdn/shop/products/2.ByeByeBloat_6c5b5492-b64f-4a2a-9a4c-2109f10a0ee1.jpg?v=1724607468&width=533",
    name: "Gastro Comfort + Pre+ Probiotic",
    description: "Eye Supplement With Lutein",
    price: 649,
    oldPrice: 800,
    rating: 4.6,
    reviews: 59,
    category: ["Indigeston Management Pack"],
    duration: ["1 Month", "2 Months"],
    active: "1 Month",
    tag: ["indigestion", "combos", "pre-pro-biotic"],
    link: "gastro-comfort",
  },
  {
    id: 10,
    image:
      "https://thegoodbug.com/cdn/shop/products/2.ByeByeBloat_6c5b5492-b64f-4a2a-9a4c-2109f10a0ee1.jpg?v=1724607468&width=533",
    name: "Loose control + Pre+ Pro Biotic",
    description: "Eye Supplement With Lutein",
    price: 649,
    oldPrice: 800,
    rating: 4.6,
    reviews: 59,
    category: ["Loose Motion management pack "],
    duration: ["1 Month", "2 Months"],
    active: "1 Month",
    tag: ["loose-motion", "pre-pro-biotic", "combos"],
    link: "loose-control",
  },
  {
    id: 11,
    image:
      "https://thegoodbug.com/cdn/shop/products/2.ByeByeBloat_6c5b5492-b64f-4a2a-9a4c-2109f10a0ee1.jpg?v=1724607468&width=533",
    name: "Soothe Gut + Pre Pro Biotic",
    description: "Eye Supplement With Lutein",
    price: 649,
    oldPrice: 800,
    rating: 4.6,
    reviews: 59,
    category: ["Acid Reflux management pack "],
    duration: ["1 Month", "2 Months"],
    active: "1 Month",
    tag: ["pre-pro-biotic", "combos", "indigestion", "bloating", "acidity"],
    link: "soothe-gut",
  },
  {
    id: 12,
    image:
      "https://thegoodbug.com/cdn/shop/products/2.ByeByeBloat_6c5b5492-b64f-4a2a-9a4c-2109f10a0ee1.jpg?v=1724607468&width=533",
    name: "Bloat Joy + Flora",
    description: "Eye Supplement With Lutein",
    price: 649,
    oldPrice: 800,
    rating: 4.6,
    reviews: 59,
    category: ["Liver Care"],
    duration: ["1 Month", "2 Months"],
    active: "1 Month",
    tag: ["bloating", "combos"],
    link: "bloat-joy",
  },
  {
    id: 13,
    image:
      "https://thegoodbug.com/cdn/shop/products/2.ByeByeBloat_6c5b5492-b64f-4a2a-9a4c-2109f10a0ee1.jpg?v=1724607468&width=533",
    name: "Lactose ( Only In Delhi ) ",
    description: "Eye Supplement With Lutein",
    price: 649,
    oldPrice: 800,
    rating: 4.6,
    reviews: 59,
    category: ["Bloating Relief management Pack "],
    duration: ["1 Month", "2 Months"],
    active: "1 Month",
    tag: ["bloating", "gut-testing"],
    link: "liver-comfy",
  },

  {
    id: 15,
    image:
      "https://thegoodbug.com/cdn/shop/products/2.ByeByeBloat_6c5b5492-b64f-4a2a-9a4c-2109f10a0ee1.jpg?v=1724607468&width=533",
    name: "Shred Max + Pre pro",
    description: "Eye Supplement With Lutein",
    price: 649,
    oldPrice: 800,
    rating: 4.6,
    reviews: 59,
    category: ["Individualised Diet Plan "],
    duration: ["1 Month", "2 Months"],
    active: "1 Month",
    tag: ["weight-loss", "combos"],
    link: "shred-max",
  },
  {
    id: 16,
    image:
      "https://thegoodbug.com/cdn/shop/products/2.ByeByeBloat_6c5b5492-b64f-4a2a-9a4c-2109f10a0ee1.jpg?v=1724607468&width=533",
    name: "Liver Comfy+ Pre- Pro",
    description: "Eye Supplement With Lutein",
    price: 649,
    oldPrice: 800,
    rating: 4.6,
    reviews: 59,
    category: ["Comprehensive Weight Loss pck "],
    duration: ["1 Month", "2 Months"],
    active: "1 Month",
    tag: ["weight-loss", "liver-detox", "combos"],
    link: "liver-comfy",
  },

  // Add more products as needed
];

const AllProductsPage = () => {
  const { productId } = useParams();
  const [activeCategory, setActiveCategory] = useState<string | undefined>(
    productId
  );
  const handleCategoryClick = (category: string) => {
    setActiveCategory(category === "All" ? "" : category);
  };
  const dispatch = useAppDispatch();
  const { loading }: any = useFetch("/products");

  const handleAddToCart = (product: any) => {
    const { productId, productName, price } = product || {};
    dispatch(
      addItemToCart({
        productId,
        productName,
        price,
        quantity: 1,
      })
    );
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
              <Link to={`/products/${category.link}`}>
                <Button
                  variant={productId == category.link ? "filled" : "outline"}
                  radius="xl"
                  key={category.label}
                  className={styles.categoryButton}
                  onClick={() => handleCategoryClick(category.label)}
                >
                  {category.label}
                </Button>
              </Link>
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
          {loading ? <Loader /> : ""}
          {activeCategory && !loading && productId !== "all"
            ? products
                .filter((item) => item.tag.includes(productId || ""))
                .map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onCartClick={handleAddToCart}
                  />
                ))
            : products.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onCartClick={handleAddToCart}
                />
              ))}
        </Grid>
      </Container>
    </div>
  );
};

interface ProductCardProps {
  product: Product;
  onCartClick: (product: any) => void;
}

const ProductCard: FC<ProductCardProps> = ({ product, onCartClick }) => {
  return (
    <Grid.Col span={{ xs: 12, sm: 6, md: 3 }}>
      <Card shadow="sm" radius="md" withBorder className={styles.productCard}>
        <Card.Section>
          <Link
            to={`/products/${product.id}/${product.link}`}
            className={styles.linkCard}
          >
            <Image
              src={product.image}
              alt={product.name}
              height={200}
              fit="cover"
            />
          </Link>
        </Card.Section>

        <Link
          to={`/products/${product.id}/${product.link}`}
          className={styles.cardName}
        >
          <Text fw={500} size="lg" mt="md">
            {product.name}
          </Text>
        </Link>
        <Group gap="xs" mt="xs">
          {product.category?.map((cat) => (
            <Badge color="dark" variant="filled" className={styles.cardBadge}>
              {cat}
            </Badge>
          ))}
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
          <Text size="sm" style={{ textDecoration: "line-through" }}>
            ₹{product.oldPrice}
          </Text>
        </Group>

        <Group mt="xs" gap="xs" align="center">
          <Rating value={product.rating} readOnly size="xs" />
          <Text size="xs">
            {product.rating} ({product.reviews} reviews)
          </Text>
        </Group>

        {/* Subscription Options */}
        <Group mt="md" gap="xs" className={styles.durationButtons} wrap="wrap">
          {product.duration.map((duration) => (
            <Badge
              variant={duration === product.active ? "filled" : "outline"}
              color="dark"
              radius="xl"
              size="xs"
              key={duration}
            >
              {duration}
            </Badge>
          ))}
        </Group>

        <Button
          fullWidth
          mt="md"
          color="dark"
          onClick={() => onCartClick(product)}
        >
          Add to cart
        </Button>
      </Card>
    </Grid.Col>
  );
};

export default AllProductsPage;
