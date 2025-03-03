/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  Container,
  Grid,
  TextInput,
  Select,
  Button,
  Group,
  Text,
  Title,
  Paper,
  Divider,
  Stack,
  Card,
  Radio,
  RadioGroup,
} from "@mantine/core";
import { usePut } from "../hooks/usePut";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../redux/store";
import { fetchUserDetails } from "../redux/slices/authSlice";
import RazorpayPayment from "./home/components/Razorpay";

const validationSchema = Yup.object({
  address: Yup.string().required("Address is required"),
  locality: Yup.string().required("Address is required"),
  apartment: Yup.string(),
  city: Yup.string().required("City is required"),
  state: Yup.string().required("State is required"),
  postcode: Yup.string()
    .matches(/^\d{4,6}$/, "Postcode must be 4-6 digits")
    .required("Postcode is required"),
  // phone: Yup.string()
  //   .matches(/^\d{10}$/, "Phone number must be 10 digits")
  //   .required("Phone number is required"),
});

function CheckoutPage() {
  const { postData, loading } = usePut();

  const [selectedAddress, setSelectedAddress] = useState(null);
  const user: any = useSelector((state: RootState) => state?.auth?.user);
  const cart: any = useSelector((state: RootState) => state?.cart);
  console.log({ cart });

  const handleAddressChange = (value: any) => {
    setSelectedAddress(value);
  };
  const dispatch = useAppDispatch();

  const [addNewAddress, setAddNewAddress] = useState(false);
  const handleSubmitOfAddress = async (values: any) => {
    const { apartment, address, city, state, postcode, locality } = values;
    try {
      const body = {
        // addressId: 0,
        streetNo: address,
        buildingName: apartment,
        locality: locality,
        city: city,
        state: state,
        pincode: postcode,
      };
      postData("/customer/update/address?type=address", body).then(() => {
        dispatch(fetchUserDetails(user?.token));
      });
      console.log({ token: user?.token });
    } catch (error) {
      console.log({ error });
    }
  };
  const formik = useFormik({
    initialValues: {
      // firstName: "",
      // lastName: "",
      address: "",
      apartment: "",
      city: "",
      state: "",
      postcode: "",
      // phone: "",
      locality: "",
    },
    validationSchema,
    onSubmit: (values) => {
      console.log("Form submitted:", values);
      handleSubmitOfAddress(values);
    },
  });
  const handleNewAddClick = () => {
    setAddNewAddress((prev) => !prev);
  };

  return (
    <Container size="xl" py={"xl"} mih={"60dvh"}>
      <Grid gutter="md">
        {/* Left Section - Delivery Information */}
        <Grid.Col span={{ sm: 12, lg: 8 }}>
          <Group justify="space-between">
            <Title mb="md">Delivery</Title>
            <Button onClick={handleNewAddClick} color="#6A9948">
              {addNewAddress ? "Cancel" : "Add address"}
            </Button>
          </Group>
          <Container size="md" py="xl">
            {/* Radio Group for Address Selection */}
            {user?.address?.address ? (
              <RadioGroup
                value={selectedAddress}
                onChange={handleAddressChange}
                description="Choose an address for delivery"
              >
                <Stack gap="lg" mt={"md"}>
                  <Card shadow="sm" padding="lg" radius="md" withBorder>
                    <Group justify="apart" align="center">
                      {/* Address Details */}
                      <div>
                        <Text size="md" style={{ fontWeight: 600 }}>
                          {user?.address?.address?.buildingName},{" "}
                          {user?.address?.address?.streetNo}
                        </Text>
                        <Text size="sm" color="dimmed">
                          {user?.address?.address?.locality},{" "}
                          {user?.address?.address?.city},{" "}
                          {user?.address?.address?.state},{" "}
                          {user?.address?.address?.pincode}
                        </Text>
                      </div>

                      {/* Radio Button for Address Selection */}
                      <Radio
                        value={user?.address?.address?.addressId.toString()}
                      />
                    </Group>
                  </Card>
                </Stack>
              </RadioGroup>
            ) : (
              <Text style={{ textAlign: "center" }}>
                No address availabel. Please add address to proceed!
              </Text>
            )}
          </Container>

          {addNewAddress ? (
            <form onSubmit={formik.handleSubmit}>
              <Stack gap="md">
                {/* Country/Region Select */}
                <Select
                  readOnly
                  label="Country/Region"
                  data={[{ value: "india", label: "India" }]}
                  placeholder="Select your country"
                  defaultValue="india"
                  withAsterisk
                />

                {/* First Name & Last Name */}
                {/* <Group grow>
                <TextInput
                  label="First name"
                  placeholder="First name"
                  withAsterisk
                  {...formik.getFieldProps("firstName")}
                  error={formik.touched.firstName && formik.errors.firstName}
                />
                <TextInput
                  label="Last name"
                  placeholder="Last name"
                  withAsterisk
                  {...formik.getFieldProps("lastName")}
                  error={formik.touched.lastName && formik.errors.lastName}
                />
              </Group> */}

                {/* Address */}
                <TextInput
                  label="Street"
                  placeholder="Street"
                  withAsterisk
                  {...formik.getFieldProps("address")}
                  error={formik.touched.address && formik.errors.address}
                />
                <TextInput
                  label="Locality"
                  placeholder="Locality"
                  withAsterisk
                  {...formik.getFieldProps("locality")}
                  error={formik.touched.locality && formik.errors.locality}
                />

                {/* Apartment/Suite (Optional) */}
                <TextInput
                  label="Apartment, suite, etc. (optional)"
                  placeholder="Apartment, suite, etc."
                  {...formik.getFieldProps("apartment")}
                  error={formik.touched.apartment && formik.errors.apartment}
                />

                {/* City, State, Postcode */}
                <Group grow>
                  <TextInput
                    label="City"
                    placeholder="City"
                    withAsterisk
                    {...formik.getFieldProps("city")}
                    error={formik.touched.city && formik.errors.city}
                  />
                  <TextInput
                    label="State/territory"
                    placeholder="State"
                    withAsterisk
                    {...formik.getFieldProps("state")}
                    error={formik.touched.state && formik.errors.state}
                  />
                  <TextInput
                    label="Postcode"
                    placeholder="Postcode"
                    withAsterisk
                    {...formik.getFieldProps("postcode")}
                    error={formik.touched.postcode && formik.errors.postcode}
                  />
                </Group>

                {/* Phone */}
                {/* <TextInput
                  label="Phone"
                  placeholder="Phone"
                  withAsterisk
                  {...formik.getFieldProps("phone")}
                  error={formik.touched.phone && formik.errors.phone}
                /> */}

                {/* Submit Button */}
                <Button type="submit" mt="md" color="#6a9948" loading={loading}>
                  Submit
                </Button>
              </Stack>
            </form>
          ) : null}
        </Grid.Col>

        {/* Right Section - Order Summary */}
        <Grid.Col span={{ sm: 12, lg: 4 }}>
          <Paper shadow="xs" p="md">
            <Stack gap="md">
              {/* Product Summary */}
              {/* <Group justify="apart">
                <Box>
                  <Text>ResMed AirFit™ F20 Full Face Mask</Text>
                  <Text size="sm">Small</Text>
                </Box>
                <Text>
                  $
                  {(cart.items.cartTotal && cart.items.cartTotal?.toFixed(2)) ||
                    "--"}
                </Text>
              </Group> */}

              {/* Discount Code */}
              {/* <Group justify="apart">
                <TextInput placeholder="Discount code" />
                <Button>Apply</Button>
              </Group> */}

              <Divider />

              {/* Subtotal, Shipping, Total */}
              <Group justify="apart">
                <Text> Subtotal</Text>
                <Text>
                  $
                  {(cart.items.cartTotal && cart.items.cartTotal?.toFixed(2)) ||
                    "--"}
                </Text>
              </Group>

              <Divider />

              <Group justify="apart">
                <Text>Cart Total</Text>
                <Text>
                  $
                  {(cart.items.cartTotal && cart.items.cartTotal?.toFixed(2)) ||
                    "--"}
                </Text>
              </Group>

              <Text size="sm" color="dimmed">
                Including $0.00 in taxes
              </Text>
            </Stack>
            <RazorpayPayment
              amount={
                (cart.items.cartTotal && cart.items.cartTotal?.toFixed(2)) ||
                "--"
              }
            />
            {/* <Button fullWidth color="#6a9948" my={"lg"}>
              Checkout
            </Button> */}
          </Paper>
        </Grid.Col>
      </Grid>
    </Container>
  );
}

export default CheckoutPage;
