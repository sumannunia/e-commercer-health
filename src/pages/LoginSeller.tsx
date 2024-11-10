import { useFormik } from "formik";
import {
  TextInput,
  PasswordInput,
  Button,
  Container,
  Title,
  Text,
  Stack,
  Paper,
  Space,
} from "@mantine/core";
import { loginSeller } from "../redux/slices/authSlice";
import { useAppDispatch } from "../redux/store";
import * as Yup from "yup";
import { notifications } from "@mantine/notifications";
import { Link, useLocation, useNavigate } from "react-router-dom";

export type LoginFormValues = {
  mobile: string;
  emailId: string;
  password: string;
};

// Validation schema using Yup
const validationSchema = Yup.object({
  mobile: Yup.string()
    .matches(/^[0-9]{10}$/, "Mobile number must be exactly 10 digits")
    .required("Mobile Number is required"),
  emailId: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
});
const LoginForm = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const returnUrl =
    new URLSearchParams(location.search).get("returnUrl") || "/";
  const formik = useFormik<LoginFormValues>({
    initialValues: {
      mobile: "",
      emailId: "",
      password: "",
    },
    validationSchema,
    onSubmit: (values: LoginFormValues) => {
      console.log("Login form values:", values);
      handleSubmit(values);
      // Handle login logic (API call, authentication, etc.)
    },
  });

  const handleSubmit = async (values: LoginFormValues) => {
    console.log({ values });
    try {
      const resp = await dispatch(loginSeller(values)).unwrap();
      console.log({ resp });
      notifications.show({
        title: "Success",
        message: "Login successful!",
        color: "green",
      });
      navigate(returnUrl); // Redirect to the returnUrl
    } catch (err) {
      notifications.show({
        title: "Error",
        message: err + "",
        color: "red",
      });
    }
  };

  return (
    <Container size="sm" py={40}>
      <Paper shadow="md" radius="md" p="xl" maw={"500px"} mx={"auto"}>
        <Title style={{ textAlign: "center" }}>Login</Title>
        <Text style={{ textAlign: "center" }} size="sm" mt={"md"} mb={"lg"}>
          Log in to your Seller account
        </Text>

        <form onSubmit={formik.handleSubmit}>
          <Stack>
            <TextInput
              label="Mobile Number"
              placeholder="Enter your mobile number"
              withAsterisk
              {...formik.getFieldProps("mobile")}
              error={
                formik.touched.mobile && formik.errors.mobile
                  ? formik.errors.mobile
                  : null
              }
            />

            <TextInput
              label="Email Address"
              placeholder="Enter your email"
              withAsterisk
              {...formik.getFieldProps("emailId")}
              error={
                formik.touched.emailId && formik.errors.emailId
                  ? formik.errors.emailId
                  : null
              }
            />

            <PasswordInput
              label="Password"
              placeholder="Enter your password"
              withAsterisk
              {...formik.getFieldProps("password")}
              error={
                formik.touched.password && formik.errors.password
                  ? formik.errors.password
                  : null
              }
            />

            <Space h="lg" />

            <Button type="submit" fullWidth>
              Login
            </Button>
          </Stack>
        </form>
        <Link to="/register/seller">
          <Text mt={"md"} style={{ textAlign: "center" }}>
            New here? Register to continue
          </Text>
        </Link>
      </Paper>
    </Container>
  );
};

export default LoginForm;
