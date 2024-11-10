/* eslint-disable @typescript-eslint/no-explicit-any */

import {
  Container,
  Grid,
  Text,
  Title,
  Image,
  Button,
  Group,
  Anchor,
  Divider,
  Center,
} from "@mantine/core";
import { FiPlus, FiMinus } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../redux/store";
import {
  // decrementItemQuantity,
  fetchCart,
  incrementItemQuantity,
  removeItemFromCart,
} from "../redux/slices/cartSlice";

const imgPaths = {};

function CartPage() {
  const cartItems = useSelector((state: any) => {
    if (state.auth.user) {
      return state?.cart?.items?.cartItems;
    }

    return state?.cart?.items;
  });

  const state = useSelector((state: RootState) => state?.auth?.user);
  console.log({ state, cartItems });
  const user = useSelector((state: RootState) => state?.auth?.user);
  // const [cartItems, setCartItems] = useState<CartItem[]>(initialCartItems);
  const dispatch = useAppDispatch();
  const handleIncrement = (productId: number) => {
    console.log({ productId });
    dispatch(incrementItemQuantity({ productId }));
  };

  // const handleDecrement = (productId: number, quantity: number) => {
  //   dispatch(decrementItemQuantity({ productId, quantity }));
  // };

  const handleRemove = async (
    productId: number,
    productName: string,
    price: number,
    quantity: number
  ) => {
    await dispatch(
      removeItemFromCart({
        productId: productId,
        productName: productName,
        price: price,
        quantity: quantity,
      })
    ).unwrap();
    dispatch(fetchCart());
  };
  console.log({ cartItems });

  return (
    <Container>
      {/* Cart Title */}
      <Center my="lg">
        <Title>My Cart</Title>
      </Center>

      {/* Free Shipping Link */}
      <Center my="sm">
        <Anchor href="#">Enjoy free shipping on all orders!</Anchor>
      </Center>

      {/* Cart Items */}
      {state &&
        cartItems?.map(({ cartItemQuantity, cartProduct }: any) => (
          <>
            <Grid
              align="center"
              justify="space-between"
              my="lg"
              key={cartProduct?.productId}
              columns={12}
            >
              {/* Product Image */}
              <Grid.Col span={{ sm: 12, md: 3, lg: 2 }}>
                <Image
                  // src={cartProduct.image}
                  src={
                    imgPaths[cartProduct?.productName as keyof typeof imgPaths]
                  }
                  alt={cartProduct?.productName}
                  width={100}
                  height={100}
                />
              </Grid.Col>

              {/* Product Details */}
              <Grid.Col span={{ sm: 12, md: 5, lg: 5 }}>
                <Text size="sm">{cartProduct?.manufacturer}</Text>
                <Text size="md">{cartProduct?.productName}</Text>
                <Text size="sm">Size: {cartProduct?.size}</Text>
                <Text size="md">${cartProduct?.price.toFixed(2)}</Text>
              </Grid.Col>

              {/* Quantity and Remove */}
              <Grid.Col
                span={{ sm: 12, md: 3, lg: 2 }}
                style={{ textAlign: "center" }}
              >
                <Group gap="sm" justify="center">
                  <Button
                    variant="outline"
                    onClick={() =>
                      handleRemove(
                        cartProduct?.productId,
                        cartProduct?.productName,
                        cartProduct?.price,
                        cartItemQuantity - 1
                      )
                    }
                  >
                    <FiMinus size={16} />
                  </Button>
                  <Text>{cartItemQuantity}</Text>
                  <Button
                    variant="outline"
                    onClick={() => handleIncrement(cartProduct?.productId)}
                  >
                    <FiPlus size={16} />
                  </Button>
                </Group>
              </Grid.Col>

              {/* Remove Link */}
              {/* <Grid.Col
              span={{ sm: 12, md: 1, lg: 1 }}
              style={{ textAlign: "right" }}
            >
              <Anchor
                href="#"
                onClick={() =>
                  handleRemove(
                    cartProduct?.productId,
                    cartProduct.productName,
                    cartProduct.price,
                    cartItemQuantity
                  )
                }
              >
                Remove
              </Anchor>
            </Grid.Col> */}
            </Grid>
            <Divider />
          </>
        ))}
      {!state &&
        cartItems?.map((item: any) => (
          <>
            <Grid
              align="center"
              justify="space-between"
              my="lg"
              key={item?.productId + "itemOfCart"}
              columns={12}
            >
              {/* Product Image */}
              <Grid.Col span={{ sm: 12, md: 3, lg: 2 }}>
                <Image
                  // src={cartProduct.image}
                  src={imgPaths[item?.productName as keyof typeof imgPaths]}
                  alt={item?.productName}
                  width={100}
                  height={100}
                />
              </Grid.Col>

              {/* Product Details */}
              <Grid.Col span={{ sm: 12, md: 5, lg: 5 }}>
                <Text size="sm">{item?.manufacturer}</Text>
                <Text size="md">{item?.productName}</Text>
                <Text size="sm">Size: {item?.size}</Text>
                <Text size="md">${item?.price.toFixed(2)}</Text>
              </Grid.Col>

              {/* Quantity and Remove */}
              <Grid.Col
                span={{ sm: 12, md: 3, lg: 2 }}
                style={{ textAlign: "center" }}
              >
                <Group gap="sm" justify="center">
                  <Button
                    variant="outline"
                    onClick={() =>
                      handleRemove(
                        item?.productId,
                        item?.productName,
                        item?.price,
                        item?.quantity - 1
                      )
                    }
                  >
                    <FiMinus size={16} />
                  </Button>
                  <Text>{item?.quantity}</Text>
                  <Button
                    variant="outline"
                    onClick={() => handleIncrement(item?.productId)}
                  >
                    <FiPlus size={16} />
                  </Button>
                </Group>
              </Grid.Col>

              {/* Remove Link */}
              {/* <Grid.Col
              span={{ sm: 12, md: 1, lg: 1 }}
              style={{ textAlign: "right" }}
            >
              <Anchor
                href="#"
                onClick={() =>
                  handleRemove(
                    cartProduct?.productId,
                    cartProduct.productName,
                    cartProduct.price,
                    cartItemQuantity
                  )
                }
              >
                Remove
              </Anchor>
            </Grid.Col> */}
            </Grid>
            <Divider />
          </>
        ))}

      {/* Divider */}
      <Divider my="lg" />

      {/* Subtotal and Checkout Section */}
      <Grid justify="space-between" align="center">
        {/* Left Empty */}
        <Grid.Col span={{ md: 7, sm: 12 }} />

        {/* Subtotal Section */}
        <Grid.Col span={{ md: 5, sm: 12 }}>
          {/* <Text size="md">Subtotal: ${subtotal.toFixed(2)}</Text> */}
          <Text size="sm" color="dimmed">
            Shipping & taxes calculated at checkout
          </Text>

          {/* Proceed to Checkout Button */}
          <Link to={user ? "/checkout" : "/login/user?returnUrl=/checkout"}>
            <Button fullWidth radius="md" my="lg" size="md" color="#6A9948">
              Proceed to checkout
            </Button>
          </Link>
        </Grid.Col>
      </Grid>
    </Container>
  );
}

export default CartPage;
