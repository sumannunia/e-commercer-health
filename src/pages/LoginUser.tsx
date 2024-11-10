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
import { loginUser } from "../redux/slices/authSlice";
import { useAppDispatch } from "../redux/store";
import * as Yup from "yup";
import { notifications } from "@mantine/notifications";
import { Link, useLocation, useNavigate } from "react-router-dom";

export type LoginFormValues = {
  mobileId: string;
  emailId: string;
  password: string;
};

// Validation schema using Yup
const validationSchema = Yup.object({
  mobileId: Yup.string()
    .matches(/^[0-9]{10}$/, "Mobile number must be exactly 10 digits")
    .required("Mobile Number is required"),
  emailId: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
});
const LoginUserForm = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const returnUrl =
    new URLSearchParams(location.search).get("returnUrl") || "/";
  const formik = useFormik<LoginFormValues>({
    initialValues: {
      mobileId: "",
      emailId: "",
      password: "",
    },
    validationSchema,
    onSubmit: (values: LoginFormValues) => {
      handleSubmit(values);
      // Handle login logic (API call, authentication, etc.)
    },
  });

  const handleSubmit = async (values: LoginFormValues) => {
    console.log({ values });
    try {
      const resp = await dispatch(loginUser(values)).unwrap();
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
        <Title my={"md"} style={{ textAlign: "center" }}>
          Login
        </Title>
        <Text mb={"md"} style={{ textAlign: "center" }} size="sm">
          Log in to your account
        </Text>

        <form onSubmit={formik.handleSubmit}>
          <Stack>
            <TextInput
              label="Mobile Number"
              placeholder="Enter your mobile number"
              withAsterisk
              {...formik.getFieldProps("mobileId")}
              error={
                formik.touched.mobileId && formik.errors.mobileId
                  ? formik.errors.mobileId
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
        <Link to="/register">
          <Text mt={"md"} style={{ textAlign: "center" }}>
            New here? Register to continue
          </Text>
        </Link>
      </Paper>
    </Container>
  );
};

export default LoginUserForm;
