import { useFormik } from "formik";
import * as Yup from "yup";
import {
  TextInput,
  PasswordInput,
  Button,
  Box,
  Container,
  Title,
  Group,
  Stack,
  Image,
  Paper,
  Space,
  Text,
} from "@mantine/core";

import { loginUser, registerUser } from "../redux/slices/authSlice";
import { useAppDispatch } from "../redux/store";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { notifications } from "@mantine/notifications";

// Validation schema using Yup
const validationSchema = Yup.object({
  firstName: Yup.string()
    .min(2, "First Name must be at least 2 characters")
    .max(50, "First Name cannot exceed 50 characters")
    .required("First Name is required"),
  lastName: Yup.string()
    .min(2, "Last Name must be at least 2 characters")
    .max(50, "Last Name cannot exceed 50 characters")
    .required("Last Name is required"),
  mobileNo: Yup.string()
    .matches(/^[0-9]{10}$/, "Mobile number must be exactly 10 digits")
    .required("Mobile Number is required"),
  emailId: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .matches(/[a-z]/, "Password must contain at least one lowercase letter")
    .matches(/[0-9]/, "Password must contain at least one digit")
    .matches(
      /[!@#$%^&*]/,
      "Password must contain at least one special character (!@#$%^&*)"
    )
    .required("Password is required"),
});
export type RegistrationFormValues = {
  firstName: string;
  lastName: string;
  mobileNo: string;
  emailId: string;
  password: string;
};
const RegisterUserPage = () => {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();
  const location = useLocation();
  const returnUrl =
    new URLSearchParams(location.search).get("returnUrl") || "/";

  const handleSubmit = async (values: RegistrationFormValues) => {
    // dispatch(registerUser(values));
    try {
      await dispatch(registerUser(values)).unwrap();
      await dispatch(
        loginUser({
          mobileId: values?.mobileNo,
          emailId: values?.emailId,
          password: values?.password,
        })
      ).unwrap();
      notifications.show({
        title: "Success",
        message: "Registration successful!",
        color: "green",
      });
      navigate(returnUrl); // Use navigate instead of history.push
    } catch (error) {
      notifications.show({
        title: "Error",
        message: error + "",
        color: "red",
      });
    }
  };
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      mobileNo: "",
      emailId: "",
      password: "",
    },
    validationSchema,
    onSubmit: (values) => {
      handleSubmit(values);
      // Handle form submission, e.g., send data to API
    },
  });

  return (
    <Container size="lg" py={40}>
      {/* Container for Image and Form */}
      <Group align="center" grow>
        {/* Left Side: Graphics or Hero Image */}
        <Box style={{ maxWidth: "500px" }}>
          <Image
            src="https://plus.unsplash.com/premium_photo-1681488262364-8aeb1b6aac56?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="E-commerce graphic"
            radius="md"
            fit="cover"
          />
        </Box>

        {/* Right Side: Registration Form */}
        <Box style={{ maxWidth: "500px", width: "100%" }}>
          <Paper shadow="md" radius="md" p="xl">
            <Box style={{ textAlign: "center", marginBottom: "20px" }}>
              <Title>Create Your Account</Title>
            </Box>

            <form onSubmit={formik.handleSubmit}>
              <Stack>
                <TextInput
                  label="First Name"
                  placeholder="Enter your first name"
                  withAsterisk
                  {...formik.getFieldProps("firstName")}
                  error={
                    formik.touched.firstName && formik.errors.firstName
                      ? formik.errors.firstName
                      : null
                  }
                />
                <TextInput
                  label="Last Name"
                  placeholder="Enter your last name"
                  withAsterisk
                  {...formik.getFieldProps("lastName")}
                  error={
                    formik.touched.lastName && formik.errors.lastName
                      ? formik.errors.lastName
                      : null
                  }
                />
                <TextInput
                  label="Mobile Number"
                  placeholder="Enter your 10-digit mobile number"
                  withAsterisk
                  {...formik.getFieldProps("mobileNo")}
                  error={
                    formik.touched.mobileNo && formik.errors.mobileNo
                      ? formik.errors.mobileNo
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
                  placeholder="Create a strong password"
                  withAsterisk
                  {...formik.getFieldProps("password")}
                  error={
                    formik.touched.password && formik.errors.password
                      ? formik.errors.password
                      : null
                  }
                />
              </Stack>

              <Space h="lg" />

              <Group align="center">
                <Button type="submit" fullWidth>
                  Register
                </Button>
              </Group>
            </form>
            <Link to="/login">
              <Text mt={"md"} style={{ textAlign: "center" }}>
                Already a member? Login!
              </Text>
            </Link>
          </Paper>
        </Box>
      </Group>
    </Container>
  );
};

export default RegisterUserPage;
