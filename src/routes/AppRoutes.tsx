import { Suspense } from "react";
import { Routes, Route, Outlet } from "react-router-dom";

import { Loader } from "@mantine/core";
import Home from "../pages/home";
import ErrorBoundary from "../utils/ErrorBoundary";

import RegisterUserPage from "../pages/RegisterUser";
import LoginUserForm from "../pages/LoginUser";
import CheckoutPage from "../pages/Checkout";
import OrdersPage from "../pages/Orders";
import CartPage from "../pages/Cart";

import ProtectedRoute from "../components/common/ProtectedRoute";
import Products from "../pages/admin/Product";
import AddProductPage from "../pages/admin/Product/AddProduct";
import EditProductPage from "../pages/admin/Product/EditProduct";
import RegisterPage from "../pages/RegisterSeller";
import ProductDetailsPage from "../pages/productDetails";
import AllProductsPage from "../pages/allProducts";
import LoginForm from "../pages/LoginSeller";

const AppRoutes = () => {
  return (
    <ErrorBoundary>
      {/* <Layout> */}
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register/seller" element={<RegisterPage />} />
          <Route path="/register" element={<RegisterUserPage />} />
          <Route path="/login/seller" element={<LoginForm />} />
          <Route path="/login" element={<LoginUserForm />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/orders" element={<OrdersPage />} />
          <Route path="/products" element={<Outlet />}>
            <Route index element={<AllProductsPage />} />
            <Route path=":productId" element={<ProductDetailsPage />} />
          </Route>
          <Route
            path="/admin"
            element={<ProtectedRoute allowedUserType="seller" />}
          >
            <Route path="product" element={<Outlet />}>
              <Route index element={<Products />} />
              <Route path="add" element={<AddProductPage />} />
              <Route path=":prouctId" element={<Outlet />}>
                <Route path="edit" element={<EditProductPage />} />
              </Route>
            </Route>
          </Route>
          {/* <Route path="/products" element={<Products />} />
          <Route path="/checkout" element={<Checkout />} /> */}
          <Route path="*" element={<div>Page Not Found</div>} />{" "}
          {/* 404 handling */}
        </Routes>
      </Suspense>
      {/* </Layout> */}
    </ErrorBoundary>
  );
};

export default AppRoutes;
