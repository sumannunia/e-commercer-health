import { useState } from "react";
import {
  Container,
  Card,
  Grid,
  Text,
  Group,
  Button,
  Collapse,
  Image,
  Title,
  Stack,
  Badge,
  Divider,
} from "@mantine/core";
import { IconChevronDown, IconChevronUp } from "@tabler/icons-react";

type OrderItem = {
  id: number;
  productName: string;
  productImage: string;
  price: number;
  quantity: number;
};

type Order = {
  orderId: string;
  date: string;
  status: string;
  total: number;
  deliveryStatus: string;
  items: OrderItem[];
};

const orderData: Order[] = [
  {
    orderId: "ORD123456",
    date: "2023-09-15",
    status: "Delivered",
    total: 229.0,
    deliveryStatus: "Delivered on September 20, 2023",
    items: [
      {
        id: 1,
        productName: "ResMed AirFit™ F20 Full Face Mask",
        productImage: "https://via.placeholder.com/100", // Placeholder image URL
        price: 229.0,
        quantity: 1,
      },
    ],
  },
  {
    orderId: "ORD654321",
    date: "2023-09-10",
    status: "Pending",
    total: 199.0,
    deliveryStatus: "Expected by September 25, 2023",
    items: [
      {
        id: 2,
        productName: "ResMed AirFit™ N20 Nasal Mask",
        productImage: "https://via.placeholder.com/100", // Placeholder image URL
        price: 199.0,
        quantity: 1,
      },
    ],
  },
];

function OrderItemCard({ item }: { item: OrderItem }) {
  return (
    <Grid>
      <Grid.Col span={3}>
        <Image src={item.productImage} alt={item.productName} />
      </Grid.Col>
      <Grid.Col span={7}>
        <Text>{item.productName}</Text>
        <Text size="sm">Quantity: {item.quantity}</Text>
      </Grid.Col>
      <Grid.Col span={2}>
        <Text inline>${item.price.toFixed(2)}</Text>
      </Grid.Col>
    </Grid>
  );
}

function OrderCard({ order }: { order: Order }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Card shadow="md" radius="md" mb="lg">
      <Group justify="apart">
        <Stack gap={2}>
          <Text>Order #{order.orderId}</Text>
          <Text size="sm" color="dimmed">
            {order.date}
          </Text>
          <Badge color={order.status === "Delivered" ? "green" : "yellow"}>
            {order.status}
          </Badge>
        </Stack>
        <Stack gap={2} align="flex-end">
          <Text>Total: ${order.total.toFixed(2)}</Text>
          <Text size="sm" color="dimmed">
            {order.deliveryStatus}
          </Text>
          <Button
            variant="subtle"
            size="xs"
            onClick={() => setIsOpen(!isOpen)}
            rightSection={
              isOpen ? (
                <IconChevronUp size={16} />
              ) : (
                <IconChevronDown size={16} />
              )
            }
          >
            {isOpen ? "Hide Details" : "View Details"}
          </Button>
        </Stack>
      </Group>

      <Collapse in={isOpen} mt="md">
        <Divider />
        <Stack gap="md" mt="md">
          {order.items.map((item) => (
            <OrderItemCard key={item.id} item={item} />
          ))}
        </Stack>
      </Collapse>
    </Card>
  );
}

function OrdersPage() {
  return (
    <Container size="lg" py="xl">
      <Title mb="lg">My Orders</Title>
      {orderData.map((order) => (
        <OrderCard key={order.orderId} order={order} />
      ))}
    </Container>
  );
}

export default OrdersPage;
