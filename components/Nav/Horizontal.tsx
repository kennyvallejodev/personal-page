import Image from "next/image";
import React, { useState } from "react";
import styled from "styled-components";
import Colors from "../../styles/colors";
import { Text, TextColor, TextSize } from "../Text";
import { Title, TitleColor, TitleSize } from "../Title";

/**
 * Styled
 */
const Container = styled.nav`
  display: block;
  position: relative;
  margin: 0;

  @media (max-width: 620px) {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    padding: 1rem 0.5rem;
    box-sizing: border-box;
    background-color: ${Colors.secondary};

    z-index: 100;
  }
`;

const ListItem = styled.li`
  display: inline-block;
  padding: 0.5rem;
  margin: 0rem 1rem;
  box-sizing: border-box;
  transition: 0.25s ease;
  border-bottom: 4px solid transparent;

  a {
    text-decoration: none;
  }

  &:hover {
    border-bottom: 4px solid ${Colors.primary};

    p {
      color: ${Colors.primary};
    }
  }

  &.mobile-only {
    display: none;
  }

  @media (max-width: 620px) {
    display: block;
    width: 100%;
    margin-left: auto;
    margin-right: 0;

    &.mobile-only {
      display: inline-block;
    }

    p {
      font-size: 2rem !important;
    }
  }
`;

export interface HorizontalNavI {}

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;

  li:nth-child(1) {
    padding-left: 0;
    margin-left: 0;

    @media (max-width: 620px) {
      padding-left: 0.5rem;
      margin-left: auto;
    }
  }

  @media (max-width: 620px) {
    width: 50%;
    margin-left: auto;
    margin-top: 2rem;

    &.show {
      display: block;
    }

    &.hide {
      display: none;
    }
  }
`;

const MobileButton = styled.button`
  background-color: transparent;
  border: 0px;

  display: none;
  margin-left: auto;

  @media (max-width: 620px) {
    display: block;
  }
`;

export const HorizotalNav: React.FC<HorizontalNavI> = (props) => {
  const [showMobile, setShowMobile] = useState(false);

  function hideMobile() {
    setShowMobile(false);
  }

  return (
    <Container>
      <MobileButton onClick={() => setShowMobile(!showMobile)}>
        <Image
          src="/assets/icons/menu.svg"
          alt="Menu Burger Icon"
          width={50}
          height={50}
          objectFit="contain"
        />
      </MobileButton>

      <List className={showMobile ? "show" : "hide"}>
        <ListItem className="mobile-only">
          <a href="#home" onClick={hideMobile}>
            <Text label="Home" size={TextSize.regular} color={TextColor.dark} />
          </a>
        </ListItem>
        <ListItem>
          <a href="#positions" onClick={hideMobile}>
            <Text
              label="Positions"
              size={TextSize.regular}
              color={TextColor.dark}
            />
          </a>
        </ListItem>
        <ListItem>
          <a href="#skillset" onClick={hideMobile}>
            <Text
              label="Skillset"
              size={TextSize.regular}
              color={TextColor.dark}
            />
          </a>
        </ListItem>
        <ListItem>
          <a href="#goodcoder" onClick={hideMobile}>
            <Text
              label="Community"
              size={TextSize.regular}
              color={TextColor.dark}
            />
          </a>
        </ListItem>
        <ListItem>
          <a href="#qa" onClick={hideMobile}>
            <Text
              label="Q&amp;A"
              size={TextSize.regular}
              color={TextColor.dark}
            />
          </a>
        </ListItem>
        <ListItem>
          <a href="#contact" onClick={hideMobile}>
            <Text
              label="Contact Me"
              size={TextSize.regular}
              color={TextColor.dark}
            />
          </a>
        </ListItem>
      </List>
    </Container>
  );
};
