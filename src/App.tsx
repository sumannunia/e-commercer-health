import TopBar from "./pages/home/components/Topbar";
import Header from "./pages/home/components/Header";
import AppRoutes from "./routes/AppRoutes";
import Footer from "./components/common/Footer";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchCart } from "./redux/slices/cartSlice";

function App() {
  return (
    <>
      <TopBar />
      <Header />
      {/* <SecondaryNav /> */}
      <AppRoutes />
      <Footer />
    </>
  );
}

export default App;
