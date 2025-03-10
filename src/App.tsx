import TopBar from "./pages/home/components/Topbar";
import Header from "./pages/home/components/Header";
import AppRoutes from "./routes/AppRoutes";
import Footer from "./components/common/Footer";

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
