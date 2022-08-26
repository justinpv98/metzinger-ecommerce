import React from "react";
import * as styled from "./Home.styles";

import { useDocumentTitle } from "../../hooks";

import WomenImage from "../../assets/home1.webp";
import MenImage from "../../assets/home2.webp";
import RunwayImage from "../../assets/home3.webp";

import Hero from "./components/Hero/Hero";
import Button from "../../components/Button/Button";

function Home() {
  useDocumentTitle()
  return (
    <main id="main">
      <Hero />
      <styled.Categories>
        <styled.CategoryContainer>
          <img src={WomenImage} alt="" loading="lazy" />
          <styled.CategoryContent>
            <styled.CategoryHeader>Women</styled.CategoryHeader>
            <styled.CategoryText>Summer 2022 Collection</styled.CategoryText>
            <styled.LinkButton to="/women">Shop Women's Clothing</styled.LinkButton>
          </styled.CategoryContent>
        </styled.CategoryContainer>
        <styled.CategoryContainer>
          <img src={MenImage} alt="" loading="lazy" />
          <styled.CategoryContent>
            <styled.CategoryHeader>Men</styled.CategoryHeader>
            <styled.CategoryText>Summer 2022 Collection</styled.CategoryText>
            <styled.LinkButton to="/men">Shop Men's Clothing</styled.LinkButton>
          </styled.CategoryContent>
        </styled.CategoryContainer>
      </styled.Categories>
      <styled.Banner>
        <styled.BannerImage
          style={{ backgroundImage: `url(${RunwayImage})` }}
          loading="lazy"
        />
        <styled.BannerContentWrapper>
          <styled.BannerContentContainer>
            <styled.SectionTitle>Exquisite Beauty</styled.SectionTitle>
            <p>Annual Runway Exhibition</p>
            <Button variant="primary">See Behind The Scenes</Button>
          </styled.BannerContentContainer>
        </styled.BannerContentWrapper>
      </styled.Banner>
    </main>
  );
}

export default Home;
