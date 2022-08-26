import React, { useEffect, useState } from "react";
import * as styled from "./Hero.styles";
import HeroImage1 from "../../../../assets/hero1.webp";
import HeroImage2 from "../../../../assets/hero2.webp";

import Slider from "react-slick";

import Button from "../../../../components/Button/Button";

const slides = [
  {
    image: HeroImage1,
    title: "New Summer Collection",
    copy: "Get something special for your loved ones.",
  },
  {
    image: HeroImage2,
    title: "Just For Men Catalogue",
    copy: "Get something special for your loved ones.",
  },
];

function Hero() {
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    if (percent < 100) {
      const interval = setInterval(() => {
        setPercent(percent + 1);
        if (percent === 99) {
          setPercent(0);
        }
      }, 15);
      return () => clearInterval(interval);
    }
  }, [percent]);

  const settings = {
    fade: true,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 5250,
  };

  return (
    <styled.HeroWrapper>
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index}>
            <styled.ImageContainer>
              <styled.Image src={slide.image} alt="" />
            </styled.ImageContainer>
            <styled.ContentWrapper>
              <styled.TextContainer>
                <styled.Header>{slide.title}</styled.Header>
                <p>{slide.copy}</p>
                <Button variant="secondary">Get the latest fashion</Button>
              </styled.TextContainer>
              <styled.CounterContainer>
                <p>
                  <styled.CurrentPage>{index + 1}</styled.CurrentPage>/
                  {slides.length}
                </p>
              </styled.CounterContainer>
            </styled.ContentWrapper>
          </div>
        ))}
      </Slider>
    </styled.HeroWrapper>
  );
}

export default Hero;
