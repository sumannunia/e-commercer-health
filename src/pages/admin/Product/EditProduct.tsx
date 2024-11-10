import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  TextInput,
  Textarea,
  NumberInput,
  Select,
  Button,
  Box,
  Group,
  Container,
  Paper,
  Image,
  Stack,
  Title,
  Text,
} from "@mantine/core";
import { Link } from "react-router-dom";

// Product Categories and Status Options
const categoryOptions = [
  { value: "electronics", label: "Electronics" },
  { value: "fashion", label: "Fashion" },
  { value: "home", label: "Home & Kitchen" },
  { value: "books", label: "Books" },
];

const statusOptions = [
  { value: "available", label: "Available" },
  { value: "out_of_stock", label: "Out of Stock" },
];

// Form Validation Schema using Yup
const validationSchema = Yup.object({
  productName: Yup.string().required("Product Name is required"),
  price: Yup.number()
    .min(1, "Price must be at least $1")
    .required("Price is required"),
  description: Yup.string().required("Description is required"),
  manufacturer: Yup.string().required("Manufacturer is required"),
  quantity: Yup.number()
    .min(1, "Quantity must be at least 1")
    .required("Quantity is required"),
  category: Yup.string().required("Category is required"),
  status: Yup.string().required("Status is required"),
  productImage: Yup.mixed().nullable(), // Optional in case they don't want to change the image
});

const EditProductPage = () => {
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  // Simulate fetching the existing product data from an API
  const productData = {
    productName: "Smartphone",
    price: 699.99,
    description:
      "A powerful smartphone with excellent camera and battery life.",
    manufacturer: "TechCorp",
    quantity: 50,
    category: "electronics",
    status: "available",
    productImage: null, // Assume a file object or image URL
  };

  // Initialize Formik with the product data
  const formik = useFormik({
    initialValues: {
      productName: "",
      price: 0,
      description: "",
      manufacturer: "",
      quantity: 1,
      category: "",
      status: "",
      productImage: null,
    },
    validationSchema,
    onSubmit: (values) => {
      console.log("Updated product data:", values);
      // Handle form submission (e.g., send updated data to API)
    },
  });

  // Populate the form with the fetched product data when the page loads
  useEffect(() => {
    formik.setValues({
      productName: productData.productName,
      price: productData.price,
      description: productData.description,
      manufacturer: productData.manufacturer,
      quantity: productData.quantity,
      category: productData.category,
      status: productData.status,
      productImage: productData.productImage, // This could be a file or URL depending on your case
    });

    // If productImage is a URL, set the image preview
    if (productData.productImage) {
      setImagePreview(productData.productImage as string);
    }
  }, [productData]);

  // Handle Image Preview
  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      formik.setFieldValue("productImage", file);

      // Create a preview URL for the image
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <Container size="md" py={40}>
      <Paper shadow="md" radius="md" p="xl">
        <Title mb="lg">Edit Product</Title>

        <form onSubmit={formik.handleSubmit}>
          <Stack gap="md">
            {/* Product Name */}
            <TextInput
              label="Product Name"
              placeholder="Enter product name"
              withAsterisk
              {...formik.getFieldProps("productName")}
              error={
                formik.touched.productName && formik.errors.productName
                  ? formik.errors.productName
                  : null
              }
            />

            {/* Price */}
            <NumberInput
              label="Price"
              placeholder="Enter price"
              withAsterisk
              min={1}
              value={formik.values.price}
              onChange={(value) => formik.setFieldValue("price", value)}
              error={
                formik.touched.price && formik.errors.price
                  ? formik.errors.price
                  : null
              }
            />

            {/* Description */}
            <Textarea
              label="Description"
              placeholder="Enter product description"
              withAsterisk
              minRows={4}
              {...formik.getFieldProps("description")}
              error={
                formik.touched.description && formik.errors.description
                  ? formik.errors.description
                  : null
              }
            />

            {/* Manufacturer */}
            <TextInput
              label="Manufacturer"
              placeholder="Enter manufacturer name"
              withAsterisk
              {...formik.getFieldProps("manufacturer")}
              error={
                formik.touched.manufacturer && formik.errors.manufacturer
                  ? formik.errors.manufacturer
                  : null
              }
            />

            {/* Quantity */}
            <NumberInput
              label="Quantity"
              placeholder="Enter available quantity"
              withAsterisk
              min={1}
              value={formik.values.quantity}
              onChange={(value) => formik.setFieldValue("quantity", value)}
              error={
                formik.touched.quantity && formik.errors.quantity
                  ? formik.errors.quantity
                  : null
              }
            />

            {/* Category Dropdown */}
            <Select
              label="Category"
              placeholder="Select category"
              withAsterisk
              data={categoryOptions}
              value={formik.values.category} // Bind the value from Formik
              onChange={(value) => formik.setFieldValue("category", value)} // Update Formik on change
              error={
                formik.touched.category && formik.errors.category
                  ? formik.errors.category
                  : null
              }
            />

            {/* Status Dropdown */}
            <Select
              label="Status"
              placeholder="Select status"
              withAsterisk
              data={statusOptions}
              value={formik.values.status} // Bind the value from Formik
              onChange={(value) => formik.setFieldValue("status", value)} // Update Formik on change
              error={
                formik.touched.status && formik.errors.status
                  ? formik.errors.status
                  : null
              }
            />

            {/* Product Image Upload */}
            <Box>
              <TextInput
                label="Product Image"
                placeholder="Choose product image"
                type="file"
                onChange={handleImageChange}
                error={
                  formik.touched.productImage && formik.errors.productImage
                    ? formik.errors.productImage
                    : null
                }
              />

              {/* Image Preview */}
              {imagePreview && (
                <Box mt="md">
                  <Text>Image Preview:</Text>
                  <Image
                    src={imagePreview}
                    alt="Product Preview"
                    radius="md"
                    height={200}
                  />
                </Box>
              )}
            </Box>

            {/* Submit Button */}
            {/* Submit Button */}
            <Group align="flex-end" justify="flex-end">
              <Link to="/admin/product">
                <Button type="submit" size="md">
                  Cancel
                </Button>
              </Link>
              <Button type="submit" size="md">
                Save Product
              </Button>
            </Group>
          </Stack>
        </form>
      </Paper>
    </Container>
  );
};

export default EditProductPage;
