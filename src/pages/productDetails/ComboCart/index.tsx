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

const ComboCart = ({
  data,
  selectedPlan,
}: {
  data: any[];
  selectedPlan: number | null | string;
}) => {
  const [selectedItems, setSelectedItems] = useState([true, true, false]);

  const toggleSelection = (index: number) => {
    const newSelection = [...selectedItems];
    newSelection[index] = !newSelection[index];
    setSelectedItems(newSelection);
  };

  const totalPrice = data.reduce((sum, product, index) => {
    console.log({ product });
    return (
      sum +
      (selectedItems[index]
        ? parseInt(product.priceOnSelection[selectedPlan as string]?.offer)
        : 0)
    );
  }, 0);

  return (
    <Container size="md" px={0} className={styles.comboCart} mt={"md"}>
      <Card withBorder radius="md" p="0">
        <Grid gutter="xs">
          {data.map((product, index) => (
            <Grid.Col span={4} key={product.id} className={styles.productBlock}>
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
                <Text size="sm" className={styles.pricing}>
                  <span className={styles.originalPrice}>
                    ₹
                    {product.priceOnSelection[
                      selectedPlan as keyof typeof product.priceOnSelection
                    ]?.original?.toLocaleString()}
                  </span>
                  <span className={styles.sellingPrice}>
                    ₹
                    {product.priceOnSelection[
                      selectedPlan as keyof typeof product.priceOnSelection
                    ]?.offer?.toLocaleString()}
                  </span>
                  <span className={styles.discount}>
                    Save ₹
                    {product.priceOnSelection[
                      selectedPlan as keyof typeof product.priceOnSelection
                    ]?.saving?.toLocaleString()}
                  </span>
                </Text>
              </Card>
              {/* {index === 0 && <Text className={styles.plusSign}></Text>} */}
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
