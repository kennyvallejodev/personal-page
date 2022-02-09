import React from "react";
import styled from "styled-components";
import { PositionCard } from "../../components/Card/Position";
import { Title, TitleColor, TitleSize } from "../../components/Title";

import PositionsJson from "../../data/positions.json";

/**
 * Styled
 */
const Container = styled.div`
  display: block;
  width: 100%;
  height: 100%;
  min-height: 70vh;
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
  overflow-x: auto;
  margin: auto;
  padding: 4rem 0;
  box-sizing: border-box;
`;

const CardsContainer = styled.div`
  display: flex;
  margin: 4rem auto;
  margin-top: 2rem;
  padding-bottom: 2rem;

  align-items: stretch;
  max-width: 100%;

  flex-wrap: nowrap;
  justify-content: space-between;
  overflow-x: auto;

  .card-item {
    width: calc(100% / 3);
    min-width: 22rem;
    margin-right: 2rem;
    margin-top: 2rem;
  }

  @media (min-width: 700px) and (max-width: 1000px) {
    .card-item {
      width: calc(97.5% / 2);
      margin-bottom: 1rem;
    }
  }

  @media (max-width: 700px) {
    flex-wrap: wrap;

    .card-item {
      width: 100%;
      margin-bottom: 1rem;
      margin-right: 0rem;
    }
  }
`;

export const Positions: React.FC = (props) => {
  return (
    <Container id="positions">
      <Content>
        <Title
          size={TitleSize.regular}
          color={TitleColor.light}
          label="Positions"
          leftBorder
        />

        <CardsContainer>
          {PositionsJson.positions.map((position) => {
            return (
              <PositionCard
                key={position.id}
                roles={position.roles}
                company={position.company}
              />
            );
          })}
        </CardsContainer>
      </Content>
    </Container>
  );
};
