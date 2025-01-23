import { useState } from "react";
import {
  Container,
  Grid,
  Text,
  Image,
  Button,
  Badge,
  Group,
  Paper,
  Title,
  Card,
  Divider,
  List,
  ThemeIcon,
  ListItem,
  Rating,
} from "@mantine/core";

import { IconCheck } from "@tabler/icons-react";
import styles from "./ProductDetailsPage.module.css"; // Add styles as necessary
import { useAppDispatch } from "../../redux/store";
import { addItemToCart } from "../../redux/slices/cartSlice";
import SelectablePlans from "./SaveDiscountBlock";
import quality from "../../assets/images/quality.png";
import CertificationBlock from "./CertificationBlock";
import CustomerReviews from "./CustomerReview/CustomerReviews";
import { ingredients, products } from "./products";
import { useParams } from "react-router-dom";
import ErrorBoundary from "../../utils/ErrorBoundary";

const ProductDetailsPage = () => {
  const { productName } = useParams();
  const product = products[productName as keyof typeof products];
  // const [selectedFlavor, setSelectedFlavor] = useState(product.flavors[0]);
  const [selectedSize] = useState(product.sizes[0]);
  const [activeImage, setActiveImage] = useState(product.images[0]);
  const dispatch = useAppDispatch();
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
    <ErrorBoundary>
      <Image
        src={
          "https://thegoodbug.com/cdn/shop/files/Top_banner_1.jpg?v=1715679883"
        }
        fit="cover"
      />
      <Container fluid px="md" mt={"lg"}>
        <Grid gutter="lg">
          {/* Left Column - Product Images */}
          <Grid.Col span={{ sm: 12, md: 4, lg: 6 }}>
            <Paper withBorder p="md" radius="md" className={styles.paperCard}>
              <div className={styles.activeImageWrapper}>
                <Image
                  src={activeImage.link}
                  alt={product.name}
                  radius="md"
                  className={styles.mainImage}
                />
                {activeImage.description.length > 0 ? (
                  <div className={styles.activeImageDesc}>
                    <Title size={"md"} ml={-45} mb={"md"}>
                      {`{ Key Benefits }`}
                    </Title>
                    <List
                      icon={
                        <ThemeIcon color="gray" size={24} radius="xl">
                          <IconCheck size={16} />
                        </ThemeIcon>
                      }
                      spacing={"md"}
                    >
                      {activeImage.description.map((datum) => (
                        <List.Item>{datum}</List.Item>
                      ))}
                    </List>
                  </div>
                ) : (
                  ""
                )}
              </div>
              <Group mt="sm" gap="xs">
                {product.images.map((img, index) => (
                  <Image
                    key={index + img.link}
                    src={img.link}
                    width={50}
                    height={50}
                    radius="sm"
                    onClick={() => setActiveImage(img)}
                    style={{
                      cursor: "pointer",
                      border:
                        activeImage.link === img.link
                          ? "2px solid #000"
                          : "1px solid #ddd",
                    }}
                  />
                ))}
              </Group>
            </Paper>
          </Grid.Col>

          {/* Right Column - Product Details */}
          <Grid.Col span={{ sm: 12, md: 8, lg: 6 }}>
            {/* Discount Banner */}
            {/* <Paper withBorder className={styles.discountBanner} radius="sm">
              <Text size="xl" fw={700} color="#004c97">
                {product.discountBanner}
              </Text>
            </Paper> */}
            <Title size={"md"} mt={"sm"} mb={"xs"}>
              Indication
            </Title>
            <Group mt="sm" gap="sm">
              {product.indications.map((indication, index) => (
                <Badge
                  key={index + indication}
                  color="green"
                  leftSection={<IconCheck size={14} />}
                >
                  {indication}
                </Badge>
              ))}
            </Group>

            <Text fw={700} size="lg" mt="md">
              {product.name}
            </Text>
            <Text color="dimmed" size="sm">
              {product.description}
            </Text>
            <Title size={"md"} mt={"sm"} mb={"xs"}>
              Principle Ingredients
            </Title>
            <Text color="dimmed" size="sm">
              {product.principalIngredients}
            </Text>

            <Group align="center" mt="sm" gap="xs">
              <Rating value={product.rating} readOnly />
              <Text size="sm">({product.reviews} reviews)</Text>
            </Group>

            {/* Benefits */}
            <Title size={"md"} mt={"lg"}>
              BENEFITS
            </Title>
            <Group mt="sm" gap="sm">
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
            {/* <Text size="sm" mt="md" fw={500}>
              Flavour: {selectedFlavor}
            </Text> */}
            {/* <Group gap="xs" mt="xs">
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
            </Group> */}

            {/* Size Selection */}
            {/* <Text size="sm" mt="md" fw={500}>
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
            </Group> */}
            <Divider my={"lg"} />
            <SelectablePlans data={product?.saver} />
            <Button
              variant="gradient"
              radius={"25"}
              mx={"auto"}
              display={"flex"}
            >
              <Text size="md" fw={600}>
                Buy now - Speak to our Expert if u still have any question
              </Text>
            </Button>

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

            <Button
              fullWidth
              my="md"
              color="orange"
              radius="xl"
              size="md"
              onClick={() => handleAddToCart(product)}
            >
              Add to Cart
            </Button>
            {/* <AccordionCustom data={product.questions} />
            <AccordionCustom data={product.questions2} /> */}
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
        <CertificationBlock />
        <Paper className={styles.questionair}>
          <Grid p={0} m={0}>
            <Grid.Col span={{ sm: 12, md: 6, lg: 6 }}>
              <Text size="lg" fw={500}>
                {product.questions[0].title}
              </Text>
              <List className={styles.list}>
                {product.questions[0].data.map((item: any) => (
                  <ListItem className={styles.listItem}>
                    {item?.question}
                  </ListItem>
                ))}
              </List>
              <Text mt={"md"} fw={500}>
                {product.questions[0].meta}
              </Text>
            </Grid.Col>
            <Grid.Col span={{ sm: 12, md: 6, lg: 6 }} pl={"xl"}>
              <Text size="lg" fw={500}>
                {product.questions2[0].title}
              </Text>
              <List className={styles.list}>
                {product.questions2[0].data.map((item: any) => (
                  <ListItem className={styles.listItem}>
                    {item?.question}
                  </ListItem>
                ))}
              </List>
            </Grid.Col>
          </Grid>
        </Paper>
        <Container fluid>
          <Paper>
            <Title mb={"sm"} className={styles.ingridentsTitle}>
              Quality Assurance
            </Title>
            <Image src={quality} fit="contain" w={"100%"} h={"600"} />
          </Paper>
        </Container>
        <CustomerReviews />
        <Paper>
          <Title className={styles.title}>Clinical Data And Evidence</Title>
          <Text>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam iure
            explicabo obcaecati ducimus aut sapiente eveniet autem aliquam
            maiores adipisci, corrupti mollitia dolorum recusandae quam
            dignissimos quaerat fuga non distinctio. Nihil nam ut, eos at sequi
            impedit accusamus error corporis. Reiciendis nulla labore aliquid
            ut. Nesciunt, quia laboriosam, totam dolor ad expedita tempore,
            tempora quam hic assumenda cum beatae! Laboriosam autem ducimus
            veniam quasi a beatae quas, suscipit aliquid tempore commodi eum
            enim quidem amet accusantium facere, cum qui odit ipsa obcaecati
            incidunt sit, aperiam voluptate! Necessitatibus animi, at eum nisi
            tempore et deleniti ut, perferendis dolorem autem maxime libero
            harum rerum in suscipit dicta ipsam hic quos, impedit non? Doloribus
            voluptatibus obcaecati repudiandae. Aut accusamus adipisci facere
            repellat fugit aspernatur nihil molestiae reiciendis mollitia totam
            recusandae deleniti enim perspiciatis vero nam iste, ullam a!
            Voluptatum, qui accusamus aspernatur libero culpa quae eum at
            officia nobis, aliquid expedita est! Dicta sit, dolorum ducimus
            aspernatur autem nam ex in doloremque ad praesentium adipisci nulla
            eligendi est exercitationem esse et recusandae, rem nihil id. Nisi
            quasi odit sit, ipsa saepe labore. Sint a placeat assumenda,
            voluptatem mollitia porro optio explicabo autem fugiat suscipit
            itaque molestiae aspernatur obcaecati odit voluptatibus
            necessitatibus repudiandae sapiente soluta quaerat id amet quisquam
            voluptas totam? Adipisci dignissimos officiis asperiores totam dicta
            suscipit non maiores deserunt sequi excepturi. Odit nisi pariatur
            exercitationem eligendi eius rerum animi consectetur magnam!
            Voluptatem ullam in, itaque ex quo quisquam tempora aliquam
            assumenda laudantium odio rerum error, nemo beatae tempore quia quae
            possimus praesentium porro adipisci. Nihil harum velit veritatis
            dignissimos consectetur possimus, architecto quos? Pariatur
            accusamus cupiditate explicabo neque, nam aliquid sapiente dolor
            obcaecati magni veniam quam saepe ea doloribus aliquam id debitis
            dolorem quis deserunt nihil animi repudiandae? Repudiandae harum
            magnam voluptate voluptas, aliquid, eos nulla rem aspernatur
            pariatur perferendis commodi modi.
          </Text>
        </Paper>
      </Container>
    </ErrorBoundary>
  );
};

export default ProductDetailsPage;
