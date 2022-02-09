import Image from "next/image";
import React from "react";
import styled from "styled-components";
import { HorizotalNav } from "../../components/Nav/Horizontal";
import { Text, TextColor, TextSize } from "../../components/Text";
import { Title, TitleColor, TitleSize } from "../../components/Title";
import { ToggleSimpleList } from "../../components/Toggle/SimpleList";
import Colors from "../../styles/colors";

import SkillsJson from "../../data/skills.json";
import LangsJson from "../../data/spoken-langs.json";
import { ToggleComplexList } from "../../components/Toggle/ComplexList";
import { PhotoCarousel } from "../../components/Carousel/Photos";

/**
 * Styled
 */
const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 60vh;
  margin: 0;
  padding: 0;

  background-color: white;

  @media (max-width: 1440px) {
    padding: 0rem 1.5rem;
    box-sizing: border-box;
  }
`;

const Content = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: 0rem auto;
  padding: 4rem 0;
  box-sizing: border-box;
`;

const FlexContent = styled.div`
  display: flex;

  height: 100%;
  min-height: 50vh;
  margin-top: 3rem;
  align-items: center;

  @media (max-width: 730px) {
    min-height: auto;
  }
`;

const BrandInfo = styled.div`
  width: 60%;
  position: relative;

  @media (max-width: 730px) {
    width: 100%;
    text-align: center;
    p {
      white-space: normal;

      text-align: center !important;
    }
  }

  p {
    line-height: 1.3;
  }
`;

const CarouselContainer = styled.div`
  width: 40%;
  padding: 1rem;
  box-sizing: border-box;

  @media (max-width: 730px) {
    display: none;
  }
`;

const ButtonsContainer = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-top: 3rem;

  @media (max-width: 730px) {
    justify-content: center;
  }
`;

const ButtonPrimary = styled.a`
  display: flex;

  position: relative;
  width: auto;
  padding: 0.5rem 1rem;
  box-sizing: border-box;

  background-color: ${Colors.primary};

  border: 2px solid ${Colors.primary};
  border-radius: 0.75rem;

  transition: 0.25s ease;

  margin-right: 1.5rem;

  p {
    margin-left: 1rem;
  }

  &:hover {
    background-color: ${Colors.primary}80;
    border: 2px solid ${Colors.primary}80;
  }
`;

const ButtonSecondary = styled.a`
  display: flex;
  width: auto;
  padding: 0.5rem 1rem;
  box-sizing: border-box;

  border-radius: 0.75rem;

  border: 2px solid ${Colors.secondary};

  transition: 0.3s ease;

  p {
    margin-left: 1rem;
  }

  &:hover {
    background-color: ${Colors.secondary}30;
  }
`;

export const GoodCoder: React.FC = (props) => {
  return (
    <Container id="goodcoder">
      <Content>
        <Title
          size={TitleSize.regular}
          color={TitleColor.light}
          label="Goodcoder.js"
          leftBorder
        />

        <FlexContent>
          <BrandInfo>
            <Text
              size={TextSize.large}
              color={TextColor.light}
              label={"In my spare time i create content for\nmy brand:"}
            />

            <Image
              alt="GoodCoder Brand"
              src={"/assets/logos/goodcoder.svg"}
              width={400}
              height={100}
              layout="intrinsic"
              objectFit="contain"
            />

            <Text
              size={TextSize.large}
              color={TextColor.light}
              label={`Goodcoder.js is a brand that I created on Technology and Javascript, 
							whose purpose is to teach concepts and good practices about 
							programming languages.
							`}
            />

            <ButtonsContainer>
              {/* <ButtonPrimary href='https://goodcoder.app/' target='_blank'>
								<Image
									src={'/assets/icons/web.svg'}
									alt='Worldwide Icon'
									height={20}
									width={20}
									unoptimized
								/>
								<Text
									size={TextSize.regular}
									color={TextColor.light}
									label='VISIT WEBSITE'
								/>
							</ButtonPrimary> */}

              <ButtonSecondary
                href="https://www.instagram.com/goodcoder.js/"
                target="_blank"
              >
                <Image
                  src={"/assets/icons/instagram.svg"}
                  alt="Instagram Icon"
                  height={20}
                  width={20}
                  unoptimized
                />
                <Text
                  size={TextSize.regular}
                  color={TextColor.light}
                  label="FOLLOW ON IG"
                />
              </ButtonSecondary>
            </ButtonsContainer>
          </BrandInfo>

          <CarouselContainer>
            <PhotoCarousel />
          </CarouselContainer>
        </FlexContent>
      </Content>
    </Container>
  );
};
