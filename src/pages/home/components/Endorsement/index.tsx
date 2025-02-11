import { useRef } from "react";

import videoFile from "../../../../assets/videos/video3.mp4";
import VideoJS from "../../../../components/common/Videojs";
import { Container } from "@mantine/core";
import { Carousel } from "@mantine/carousel";

const endrsements = [
  {
    id: 1,
    videoSrc: videoFile,
    type: "video",
  },
  {
    id: 1,
    videoSrc: videoFile,
    type: "video",
  },
  {
    id: 1,
    videoSrc: videoFile,
    type: "video",
  },
  {
    id: 1,
    videoSrc: videoFile,
    type: "video",
  },
  {
    id: 1,
    videoSrc: videoFile,
    type: "video",
  },
];

const Endorsement = () => {
  const playerRef = useRef(null);

  const videoJsOptions = (src: string) => {
    return {
      autoplay: true,
      controls: true,
      responsive: true,
      fluid: true,
      muted: true,
      height: 600,
      preload: "metadata",
      aspectRatio: "4:3",
      loop: true,
      sources: [
        {
          src: src,
          type: "video/mp4",
        },
      ],
    };
  };

  const handlePlayerReady = (player: any) => {
    playerRef.current = player;

    // You can handle player events here, for example:
    player.on("waiting", () => {
      console.log("player is waiting");
    });

    player.on("dispose", () => {
      console.log("player will dispose");
    });
  };
  return (
    <div>
      <Container size={"lg"} mb={"100"}>
        <Carousel
          slideSize="30%"
          // height={00}
          slideGap="md"
          withControls={false}
          align="start"
          slidesToScroll={1}
        >
          {endrsements.map((testimonial, index) => (
            <Carousel.Slide key={"carouselTestimonial" + index}>
              <VideoJS
                options={videoJsOptions(testimonial.videoSrc)}
                onReady={handlePlayerReady}
              />
            </Carousel.Slide>
          ))}
        </Carousel>
      </Container>
    </div>
  );
};

export default Endorsement;
