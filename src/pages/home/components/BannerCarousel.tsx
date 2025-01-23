import React, { useRef } from "react";
import { Carousel } from "@mantine/carousel";
import { useNavigate } from "react-router-dom";
import { Image } from "@mantine/core";
import Autoplay from "embla-carousel-autoplay";
import styles from "./BannerCarousel.module.css";
import liver from "../../../assets/images/gut-health-img/gut-Recovered.jpg";
import acidity from "../../../assets/images/gut-health-img/colorie.jpg";
import bloating from "../../../assets/images/gut-health-img/diet-plan.png";
import constipation from "../../../assets/images/gut-health-img/gut-Recovered.jpg";
import indigestion from "../../../assets/images/gut-health-img/herble-product.jpg";
const banners = [
  {
    src: liver,
    alt: "liver",
    link: "/page1",
  },
  {
    src: acidity,
    alt: "acidity",
    link: "/page2",
  },
  {
    src: bloating,
    alt: "bloating",
    link: "/page3",
  },
  {
    src: indigestion,
    alt: "indigestion",
    link: "/page4",
  },
  {
    src: constipation,
    alt: "constipation",
    link: "/page4",
  },
];

const BannerCarousel: React.FC = () => {
  const navigate = useNavigate();
  const autoplay: any = useRef(Autoplay({ delay: 6000 }));

  const handleBannerClick = (link: string) => {
    navigate(link);
  };

  return (
    <Carousel
      withIndicators
      // height={600}
      loop
      className={styles.carouselContainer}
      slideSize="100%"
      slideGap="sm"
      align="center"
      plugins={[autoplay.current]}
      // onMouseEnter={autoplay.current.stop}
      // onMouseLeave={autoplay.current.reset}
    >
      {banners.map((banner, index) => (
        <Carousel.Slide
          key={index}
          onClick={() => handleBannerClick(banner.link)}
        >
          <Image
            src={banner.src}
            alt={banner.alt}
            fit="cover"
            className={styles.bannerImage}
          />
        </Carousel.Slide>
      ))}
    </Carousel>
  );
};

export default BannerCarousel;
