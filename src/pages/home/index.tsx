import SecondaryNav from "./components/SecondaryNav";
import BannerCarousel from "./components/BannerCarousel";
import ProductCarousel from "./components/ProductCarousel";
import SingleBanner from "./components/SingleBanner";

const Home = () => {
  return (
    <>
      <SecondaryNav />
      <SingleBanner />
      <BannerCarousel />
      <ProductCarousel />
    </>
  );
};

export default Home;
