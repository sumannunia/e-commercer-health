import React from "react";
import { Carousel } from "@mantine/carousel";
import { useNavigate } from "react-router-dom";
import { Image } from "@mantine/core";
import styles from "./BannerCarousel.module.css";

const banners = [
  {
    src: "https://via.placeholder.com/800x400?text=Banner+1",
    alt: "Banner 1",
    link: "/page1",
  },
  {
    src: "https://via.placeholder.com/800x400?text=Banner+2",
    alt: "Banner 2",
    link: "/page2",
  },
  {
    src: "https://via.placeholder.com/800x400?text=Banner+3",
    alt: "Banner 3",
    link: "/page3",
  },
  {
    src: "https://via.placeholder.com/800x400?text=Banner+4",
    alt: "Banner 4",
    link: "/page4",
  },
];

const BannerCarousel: React.FC = () => {
  const navigate = useNavigate();

  const handleBannerClick = (link: string) => {
    navigate(link);
  };

  return (
    <Carousel
      withIndicators
      height={400}
      loop
      className={styles.carouselContainer}
      slideSize="100%"
      slideGap="sm"
      align="center"
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
