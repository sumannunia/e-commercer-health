/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
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

import classes from "./styles.module.css";
import axiosInstance from "../../../utils/axiosInstance";
import { RootState } from "../../../redux/store";
import { useSelector } from "react-redux";
import { notifications } from "@mantine/notifications";
import { handleApiError } from "../../../utils/apiErrorHandler";

// Product Categories and Status Options
const categoryOptions = [
  { value: "ELECTRONICS", label: "Electronics" },
  { value: "FASHION", label: "Fashion" },
  { value: "FURNITURE", label: "FURNITURE" },
  { value: "BOOKS", label: "Books" },
  { value: "GROCERIES", label: "GROCERIES" },
];

const statusOptions = [
  { value: "AVAILABLE", label: "Available" },
  { value: "OUTOFSTOCK", label: "Out of Stock" },
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
  productImage: Yup.mixed().required("Product image is required"),
});

const AddProductPage = () => {
  const [imagePreviews, setImagePreviews] = useState<string[]>([]);
  const token = useSelector((state: RootState) => state?.auth?.user?.token);
  const handleAddProduct = async (items: any) => {
    const {
      description,
      manufacturer,
      price,
      productImage,
      productName,
      quantity,
      category,
      status,
    } = items;
    const formData = new FormData();
    formData.append("prodName", productName);
    formData.append("description", description);
    formData.append("price", price);
    formData.append("quantity", quantity);
    formData.append("manufacturer", manufacturer);
    formData.append("images", productImage[0]);
    formData.append("category", category);
    formData.append("status", status);
    // productImage.map((img: any) => formData.append("images", img));

    try {
      const req = await axiosInstance.post("/products", formData, {
        headers: {
          token: token,
          "Content-Type": "multipart/form-data",
        },
      });

      if (req.status === 202) {
        console.log("Product added successfully");
        notifications.show({
          title: "Successful",
          message: "Successfully added the product",
          color: "green",
        });
      } else {
        notifications.show({
          title: "Failed",
          message: "Unable to add product. Please contact support or try again",
          color: "red",
        });
      }
    } catch (error) {
      handleApiError(error);
    }
  };
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
      console.log("Form values:", values);
      handleAddProduct(values);
      // Handle form submission here (e.g., API call to save the product)
    },
  });

  // Handle Image Preview
  // Handle multiple image previews
  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      // Store selected files in Formik's state
      formik.setFieldValue("productImage", Array.from(files));

      // Generate image previews
      const filePreviews = Array.from(files).map((file) => {
        const reader = new FileReader();
        return new Promise<string>((resolve) => {
          reader.onloadend = () => resolve(reader.result as string);
          reader.readAsDataURL(file);
        });
      });

      // Wait for all image previews to be generated and set them in state
      Promise.all(filePreviews).then((previews) => setImagePreviews(previews));
    }
  };

  return (
    <Container size="md" py={40}>
      <Paper shadow="md" radius="md" p="xl">
        <Title mb="lg">Add Product</Title>

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
              onChange={(value) => formik.setFieldValue("price", value)} // Handle change manually
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
              placeholder="Enter quantity"
              withAsterisk
              min={1}
              value={formik.values.quantity}
              onChange={(value) => formik.setFieldValue("quantity", value)} // Handle change manually
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
                label="Product Images"
                placeholder="Choose product images"
                withAsterisk
                type="file"
                multiple
                onChange={handleImageChange}
                error={
                  formik.touched.productImage && formik.errors.productImage
                    ? formik.errors.productImage
                    : null
                }
              />
              {/* Image Preview */}
              {imagePreviews.length > 0 && (
                <Box mt="md">
                  <Text>Image Previews:</Text>
                  <Group mt="sm" gap="sm">
                    {imagePreviews.map((preview, index) => (
                      <div
                        className={classes.previewImageWrapper}
                        key={"previewImage-" + index}
                      >
                        <Image
                          key={index}
                          src={preview}
                          alt={`Preview ${index + 1}`}
                          radius="md"
                          width={100}
                        />
                      </div>
                    ))}
                  </Group>
                </Box>
              )}
            </Box>

            {/* Submit Button */}
            <Group align="flex-end" justify="flex-end">
              <Link to="/admin/product">
                <Button type="submit" size="md">
                  Cancel
                </Button>
              </Link>
              <Button type="submit" size="md">
                Add Product
              </Button>
            </Group>
          </Stack>
        </form>
      </Paper>
    </Container>
  );
};

export default AddProductPage;
