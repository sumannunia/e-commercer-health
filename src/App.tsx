import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import AllProductsPage from "./pages/allProducts";
import TopBar from "./pages/home/components/Topbar";
import Header from "./pages/home/components/Header";
import ProductDetailsPage from "./pages/productDetails";
import LoginUserForm from "./pages/LoginUser";
import RegisterUserPage from "./pages/RegisterUser";
import AppRoutes from "./routes/AppRoutes";

function App() {
  // notifications.show({ message: "hello" });
  return (
    <>
      <TopBar />
      <Header />
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="all-products" element={<AllProductsPage />} />
        <Route path="product/:productId" element={<ProductDetailsPage />} />
        <Route path="login" element={<LoginUserForm />} />
        <Route path="register" element={<RegisterUserPage />} />
        
      </Routes> */}
      <AppRoutes />
    </>
  );
}

export default App;
