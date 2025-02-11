import React, { useRef } from "react";
import { Carousel } from "@mantine/carousel";
import { useNavigate } from "react-router-dom";
import { Button, Container, Grid, Image, Text, Title } from "@mantine/core";
import Autoplay from "embla-carousel-autoplay";
import styles from "./BannerCarousel.module.css";
import liver from "../../../assets/images/banner1.png";
import acidity from "../../../assets/images/banner2.png";
import bloating from "../../../assets/images/banner3.png";
import constipation from "../../../assets/images/banner4.png";
// import indigestion from "../../../assets/images/gut-health-img/herble-product.jpg";
import { IconArrowRight } from "@tabler/icons-react";

const banners = [
  {
    src: liver,
    alt: "liver",
    link: "products/liver-detox",
    title: "100% Natural Herbal Product",
    description:
      "Heal your gut with the power of vedic wisdom vedic care for a happier, healthier gut",
    buttonText: "Shop Now",
  },
  {
    src: acidity,
    alt: "acidity",
    link: "/page2",
    title: "Harmony For Your Gut!",
    description:
      "Ayurveda, Science and lifestyle ancient wisdom meets modern science for gut health.",
    buttonText: "Get Your Personalized Plan Today",
  },
  {
    src: bloating,
    alt: "bloating",
    link: "/page3",
    title: "Calorie Counter",
    description:
      "Smart calories, stronger gut counting calories with your gut in mind your gut’s best friend is calorie counting",
    buttonText: "Start Now",
  },
  // {
  //   src: indigestion,
  //   alt: "indigestion",
  //   link: "/page4",
  // },
  {
    buttonText: "Start Now",
    src: constipation,
    alt: "constipation",
    link: "/page4",
    title: "Heal Your Gut With Every Meal",
    description:
      "Cooking up gut health: One recipe at a time. Get your personalized plan today!",
  },
];

const BannerCarousel: React.FC = () => {
  const navigate = useNavigate();
  const autoplay: any = useRef(Autoplay({ delay: 6000 }));

  const handleBannerClick = (link: string) => {
    navigate(link);
  };

  return (
    <div className={styles.section}>
      <Container size="lg">
        <Carousel
          withIndicators={false}
          withControls={false}
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
              {/* <Image
            src={banner.src}
            alt={banner.alt}
            fit="cover"
            className={styles.bannerImage}
          /> */}
              <Grid gutter="xl" align="center">
                {/* Left Content */}
                <Grid.Col span={{ md: 6, lg: 6 }}>
                  <Title className={styles.title}>{banner.title}</Title>
                  <Text className={styles.description} mt="sm">
                    {banner.description}
                  </Text>
                  <Button
                    className={styles.button}
                    rightSection={<IconArrowRight size={18} />}
                    mt={"30px"}
                  >
                    {banner.buttonText}
                  </Button>
                </Grid.Col>
                {/* Right Image */}
                <Grid.Col span={{ md: 6, lg: 6 }}>
                  <Image
                    src={banner.src}
                    alt="Natural Herbal Product"
                    radius="md"
                    className={styles.image}
                  />
                </Grid.Col>
              </Grid>
            </Carousel.Slide>
          ))}
        </Carousel>
      </Container>
    </div>
  );
};

export default BannerCarousel;
