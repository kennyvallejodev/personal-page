import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';
import { HorizotalNav } from '../../components/Nav/Horizontal';
import { Text, TextColor, TextSize } from '../../components/Text';
import { Title, TitleColor, TitleSize } from '../../components/Title';
import Colors from '../../styles/colors';

/**
 * Styled
 */
const Container = styled.div`
	width: 100%;
	height: 100%;
	min-height: 90vh;
	max-height: 1080px;
	margin: 0;
	padding: 0;

	background-color: ${Colors.secondary};
`;

const Content = styled.div`
	width: 100%;
	max-width: 1440px;
	margin: auto;
	padding: 2rem 0;
	box-sizing: border-box;
`;

const FlexContent = styled.div`
	display: flex;

	height: 100%;
	min-height: 80vh;
	max-height: 1080px;
	align-items: center;

`;

const Bio = styled.div`
	p {
		margin-top: 2rem;
		line-height: 1.25;
	}
`;

const ProfilePhoto = styled.div``;

const ScrollButton = styled.div`
	display: block;
	position: relative;

	cursor: pointer;

	width: 4rem;
	height: auto;
	margin: 2rem auto;
	transition: .25s ease-in-out;

	&:hover {
		transform: translateY(5px);
	}

`;

export const HeaderBio: React.FC = (props) => {
	return (
		<FlexContent>
			<Bio>
				<Title
					size={TitleSize.xlarge}
					color={TitleColor.dark}>
					{"I'm"} <span className="primary">Kenny Vallejo,</span><br />
					a Full Stack<br />Developer
					{/* and {"I'm"} a Fullstack<br/>
					Developer. */}
				</Title>

				<Text
					size={TextSize.xlarge}
					color={TextColor.dark}
					label={`It's a pleasure to me receiving you in my Website.
					Here you can find everything about my skills 
					and recent projects.
					`}
				/>
			</Bio>
			<ProfilePhoto>

			</ProfilePhoto>
		</FlexContent>
	);
};

export const Header: React.FC = (props) => {

	function handleClick() {

	}

	return (
		<Container>
			<Content>
				<HorizotalNav />
				<HeaderBio />

				<ScrollButton onClick={handleClick}>
					<a href='#positions'>
						<Image
							alt='Arrow pointing to the bottom'
							src='/assets/icons/arrow-bottom-scroll.svg'
							width={60}
							height={60}
							unoptimized
						/>	
					</a>
				</ScrollButton>
			</Content>
		</Container>
	);
};
