import TopBar from "./pages/home/components/Topbar";
import Header from "./pages/home/components/Header";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <>
      <TopBar />
      <Header />
      {/* <SecondaryNav /> */}
      <AppRoutes />
    </>
  );
}

export default App;
