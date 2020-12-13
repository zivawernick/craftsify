import React from "react";
import { Carousel, CarouselItem, CarouselControl } from "reactstrap";

import css from "./Carrousel.module.css";
import VideoFrame from "../../atoms/VideoFrame";

function VideoCarrousel({ courses }) {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [animating, setAnimating] = React.useState(false);

  const { id, name, videoList: items } = courses.find(
    (item) => (item.name = "Sewing")
  );
  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const videoSlides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
      >
        <VideoFrame src={item} key={id} title={name} />
      </CarouselItem>
    );
  });
  return (
    <Carousel
      className={css.carr_main}
      activeIndex={activeIndex}
      next={next}
      previous={previous}
    >
      {videoSlides}
      <CarouselControl
        direction="prev"
        directionText="Previous"
        onClickHandler={previous}
      />
      <CarouselControl
        direction="next"
        directionText="Next"
        onClickHandler={next}
      />
    </Carousel>
  );
}

export default VideoCarrousel;
