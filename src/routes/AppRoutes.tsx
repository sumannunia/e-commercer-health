import { Suspense } from "react";
import { Routes, Route, Outlet } from "react-router-dom";
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
import Ingredients from "../pages/ingridients/Ingridents";
import QuizPage from "../pages/quiz";
import QuizSuccessPage from "../pages/quiz/SuccessPage";
import QRCodePage from "../pages/qr-code";
import DietAndGut from "../pages/science/DietAndGut";
import { FaWhatsapp } from "react-icons/fa";
import { Loader, Text } from "@mantine/core";
import VedicAndGut from "../pages/science/VedicAndGut";
import ClinicalGutTest from "../pages/science/ClinicalGutTest";
import Fitness from "../pages/fitness";
import Exercise from "../pages/fitness/Exercise";
import Recipies from "../pages/recipies";
import PreProBiotics from "../pages/pre-pro-biotics";
import AboutUs from "../pages/about";

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
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/ingredients" element={<Ingredients />} />
          <Route path="/orders" element={<OrdersPage />} />
          <Route path="/quiz" element={<QuizPage />} />
          <Route path="/qr-app" element={<QRCodePage />} />
          <Route path="/science/" element={<Outlet />}>
            <Route path="diet-and-gut" element={<DietAndGut />} />
            <Route path="vedic-and-gut" element={<VedicAndGut />} />
            <Route path="clinical-gut-test" element={<ClinicalGutTest />} />
          </Route>
          <Route path="/fitness/" element={<Outlet />}>
            <Route path="yoga" element={<Fitness />} />
            <Route path="exercise" element={<Exercise />} />
          </Route>
          <Route path="/pre-pro-biotics/" element={<Outlet />}>
            <Route index element={<PreProBiotics />} />
          </Route>
          <Route path="/recipes/" element={<Outlet />}>
            <Route path="healthy" element={<Recipies />} />
          </Route>
          <Route path="/quiz-success" element={<QuizSuccessPage />} />
          <Route path="/products/:productId" element={<Outlet />}>
            <Route index element={<AllProductsPage />} />
            <Route path=":productName" element={<ProductDetailsPage />} />
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
      <div className="floatingIcon">
        <a href="#" target="_blank" className="whatsappicon">
          <span className="whatsappMessage">
            DO YOU WANT A FREE CHAT WITH DIETICIAN
          </span>
          <FaWhatsapp size={50} color="#fff" />
        </a>
        <Text className="whatsappCallText">Call our Expert now for help</Text>
      </div>
    </ErrorBoundary>
  );
};

export default AppRoutes;
