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
import { FaqToggle } from "../../components/Toggle/Faq";

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

const QAContainer = styled.div`
	padding: 7.5rem 0rem;
	box-sizing: border-box;
`;

export const QA: React.FC = (props) => {

	return (
		<Container id='qa'>
			<Content>
        <Title
          size={TitleSize.regular}
          color={TitleColor.dark}
          label="Q&amp;A"
          leftBorder
        />

				<QAContainer>
					<FaqToggle />
				</QAContainer>
			</Content>
		</Container>
	);
};