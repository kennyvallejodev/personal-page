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
	display: block;
	width: 100%;
	height: 100%;
	max-height: 1080px;
	margin: 0;
	padding: 0;
	border: 1px solid red;

	background-color: ${Colors.secondary};

	@media (max-width: 1440px) {
		padding: 0rem 1.5rem;
		box-sizing: border-box;
	}
`;

const Content = styled.div`
	display: block;
	width: 100%;
	max-width: 1440px;
	margin: auto;
	padding: 2rem 0;
	box-sizing: border-box;
`;

const FlexContent = styled.div`
	display: flex;

	height: 100%;
	min-height: 800px;
	max-height: 1080px;
	align-items: center;

	@media (max-width: 660px) {
		min-height: 50vh;
	}
`;

const Bio = styled.div`
	width: 60%;

	p {
		margin-top: 2rem;
		line-height: 1.25;
	}

	@media (max-width: 660px) {
		width: 100%;
	}
`;

const ProfilePhoto = styled.div`
	width: 40%;
	text-align: center;

	@media (max-width: 660px) {
		display: none;
	}
`;

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

const PhotoContainer = styled.div``;

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
				<PhotoContainer>
					<Image
						alt='Profile Picture'
						src='/assets/profile-picture.svg'
						width={400}
						height={400}
						objectFit='contain'
					/>
				</PhotoContainer>
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
