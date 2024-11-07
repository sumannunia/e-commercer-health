import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import AllProductsPage from "./pages/allProducts";
import TopBar from "./pages/home/components/Topbar";
import Header from "./pages/home/components/Header";
import ProductDetailsPage from "./pages/productDetails";

function App() {
  // notifications.show({ message: "hello" });
  return (
    <>
      <TopBar />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="all-products" element={<AllProductsPage />} />
        <Route path="product/:productId" element={<ProductDetailsPage />} />
        {/* <Route path="*" element={<Authenticated />} /> */}
      </Routes>
    </>
  );
}

export default App;
