import { useState } from "react";
import {
  Card,
  Image,
  Text,
  Button,
  Grid,
  Checkbox,
  Group,
  Container,
  Divider,
} from "@mantine/core";
import styles from "./ComboCart.module.css";

const ComboCart = () => {
  const [selectedItems, setSelectedItems] = useState([true, true]);
  const products = [
    {
      id: 1,
      image:
        "https://www.cureveda.com/cdn/shop/files/chocolate.jpg?v=1724138121&width=1200",
      name: "Vinod ICY Stainless Steel Water Bottle - 1000 ml",
      price: 360,
    },
    {
      id: 2,
      image:
        "https://www.cureveda.com/cdn/shop/files/chocolate.jpg?v=1724138121&width=1200",
      name: "Vinod Sandwich Bottom Stainless Steel Pressure Cooker Combo",
      price: 3149,
    },
  ];

  const toggleSelection = (index: number) => {
    const newSelection = [...selectedItems];
    newSelection[index] = !newSelection[index];
    setSelectedItems(newSelection);
  };

  const totalPrice = products.reduce(
    (sum, product, index) => sum + (selectedItems[index] ? product.price : 0),
    0
  );

  return (
    <Container size="md" px={0} className={styles.comboCart}>
      <Card withBorder radius="md" p="0">
        <Grid gutter="xs">
          {products.map((product, index) => (
            <Grid.Col span={6} key={product.id} className={styles.productBlock}>
              <Card radius="md" className={styles.productCard}>
                <Checkbox
                  checked={selectedItems[index]}
                  onChange={() => toggleSelection(index)}
                  className={styles.checkbox}
                />
                <Image
                  src={product.image}
                  alt={product.name}
                  height={120}
                  fit="contain"
                />
                <Text size="sm" className={styles.productName}>
                  {product.name}
                </Text>
                <Text size="sm" color="dimmed">
                  ₹{product.price.toLocaleString()}
                </Text>
              </Card>
              {index === 0 && <Text className={styles.plusSign}>+</Text>}
            </Grid.Col>
          ))}
          <Grid.Col span={12}>
            <Divider my="sm" />
            <Group justify="space-between" gap="sm" p={"sm"}>
              <Text size="md" fw={700}>
                Total: ₹{totalPrice.toLocaleString()}
              </Text>
              <Button size="sm" radius="md" color="orange">
                Add both to Cart
              </Button>
            </Group>
          </Grid.Col>
        </Grid>
      </Card>
    </Container>
  );
};

export default ComboCart;
