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

/**
 * Styled
 */
const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 60vh;
  margin: 0;
  padding: 0;

  background-color: ${Colors.secondary};
`;

const Content = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: 0rem auto;
  padding: 4rem 0;
  box-sizing: border-box;
`;

const ListContainer = styled.div`
	width: 60%;
	margin: auto;
	margin-top: 5rem;
`;

const ListItem = styled.div`
  margin: 1.5rem auto;
`;

export const Skillset: React.FC = (props) => {
  return (
    <Container id='skillset'>
      <Content>
        <Title
          size={TitleSize.regular}
          color={TitleColor.dark}
          label="Skillset"
          leftBorder
        />

        <ListContainer>
          <ListItem>
            {/* Skills And Knowledge */}
            <ToggleSimpleList
              items={SkillsJson.skills}
              title="Skills and Knowledge"
							active
            />
          </ListItem>

          <ListItem>
            {/* Tools and Technologies */}
            <ToggleComplexList title="Tools and Technologies" />
          </ListItem>

          <ListItem>
            {/* Spoken Languages */}
            <ToggleSimpleList
              items={LangsJson.langs}
              title="Spoken Languages"
            />
          </ListItem>
        </ListContainer>
      </Content>
    </Container>
  );
};
