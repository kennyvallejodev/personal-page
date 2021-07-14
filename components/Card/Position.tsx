import React from "react";
import styled from "styled-components";
import Colors from "../../styles/colors";

import Image from 'next/image';
import { Title, TitleColor, TitleSize } from "../Title";

import CosmicLogo from '../../public/assets/companies/cosmic-black-logo.svg';
import { Text, TextColor } from "../Text";

/**
 * Styled Components
 */
const Container = styled.div`
  width: 100%;
  height: 100%;
	margin: 1rem;
  min-height: calc(6rem * 3);

  // Background
  background-color: ${Colors.card.position.background};

  // Border Left
  border-left-width: 0.6rem;
  border-left-color: ${Colors.card.position.border};
  border-left-style: solid;

	border-radius: 0px 1rem 1rem 0px;

  // Padding
  padding: 2rem;
  box-sizing: border-box;

	&:nth-child(1) {
		margin-left: 0;
	}
	&:nth-last-child(1) {
		margin-right: 0;
	}
`;

const Header = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
	align-items: center;
  justify-content: space-between;
	
	// Padding
	padding-bottom: 1rem;
	margin-bottom: 2rem;
	box-sizing: border-box;

	border-bottom: 2px solid white;
`;

const HeaderIcon = styled.div`
	width: 4rem;
	height: 4rem;
	padding: 0.25rem;
	box-sizing: border-box;
	border-radius: 0.5rem;
	display: flex;
	align-items: center;
	justify-content: center;

	// Background
	background-color: ${Colors.card.position.logoBg};

	img {
		width: 100%;
		object-fit: cover;
	}
`;

const HeaderInfo = styled.div`
	width: calc(100% - 6rem);
	display: flex;
	flex-direction: column;

	align-items: flex-start;
	justify-content: flex-start;
`;

const List = styled.ul`

	li:nth-child(1) {
		&:after {
			height: 90%;
			top: 10%;
		}
	}

	li:nth-last-child(1) {
		&:after {
			height: 10%;
		}
	}
`;
const ListItem = styled.li`
	list-style: none;
	height: 100%;
	position: relative;
	padding-bottom: 2rem;
	box-sizing: border-box;

	&:before {
		position: absolute;
		content: '';
		
		height: 1rem;
		width: 1rem;

		border-radius: 50%;

		left: calc(1rem - 3.5rem);
		top: 10%;

		background-color: ${Colors.card.position.circle};
	}

	&:after {
		position: absolute;
		content: '';

		height: 100%;
		width: 1px;

		left: calc(1.5rem - 3.5rem);
		top: 0;

		background-color: ${Colors.card.position.line};
	}

`;

export interface PositionCardI {}

export const PositionCard: React.FC<PositionCardI> = (props) => {
  return (
    <Container>
      <Header>
        <HeaderIcon>
          <img 
						src={'https://kenny-page-assets.s3.us-west-2.amazonaws.com/cosmic-black-logo.svg'} 
						alt="COSMIC Brand" 
					/>
        </HeaderIcon>

        <HeaderInfo>
          <Title color={TitleColor.dark} size={TitleSize.small}>
            Cosmic Go
          </Title>
          <Text
						color={TextColor.dark}
						 label={"Bogota, Colombia"} />
        </HeaderInfo>
      </Header>

			<List>
				<ListItem>
					<Title size={TitleSize.small} color={TitleColor.primary}>
						Director of Technologies
					</Title>
					<Text color={TextColor.dark}>
						Jan 2021 - Jul 2021
					</Text>
				</ListItem>

				<ListItem>
					<Title size={TitleSize.small} color={TitleColor.primary}>
						Fullstack Engineer
					</Title>
					<Text color={TextColor.dark}>
						Sep 2019 - Jan 2021
					</Text>
				</ListItem>

				<ListItem>
					<Title size={TitleSize.small} color={TitleColor.primary}>
						Fullstack Engineer
					</Title>
					<Text color={TextColor.dark}>
						Sep 2019 - Jan 2021
					</Text>
				</ListItem>
			</List>
    </Container>
  );
};
