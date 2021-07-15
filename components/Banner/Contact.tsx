import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';
import Colors from '../../styles/colors';
import { Title, TitleColor, TitleSize } from '../Title';

/**
 * Styled Components
 */
const Container = styled.div`
	align-items: stretch;
	background-color: ${Colors.banner.contact.background};
	border-radius: 2rem;
	display: flex;
	margin: auto;
	max-width: 1440px;
	width: 100%;
`;

const TitleContainer = styled.div`
	box-sizing: border-box;
	height: 100%;
	padding: 2rem;
	width: 50%;
`;

const ButtonContainer = styled.div`
	position: relative;
	width: 50%;

	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;	
	z-index: 0;
	padding: 0rem 3rem;
	box-sizing: border-box;
	overflow: hidden;
`;

const FixedIcon = styled.div`
	position: absolute;
	top: 2rem;
	right: -5rem;

	width: 70%;
	height: 100%;

	z-index: -1;
`;

const Button = styled.a`
	background-color: ${Colors.banner.contact.buttonBg};
	border-radius: 1rem;
	box-sizing: border-box;
	display: inline-block;
	padding: 1.5rem 1rem;
	text-decoration: none;
	width: auto;
`;

export interface ContactBannerI {
};

export const ContactBanner: React.FC<ContactBannerI> = (props) => {

	return (
		<Container>
			<TitleContainer>
				<Title 
					label={'Interested\nin working\nwith me?'}
					size={TitleSize.large} color={TitleColor.light}
				/>
			</TitleContainer>
			<ButtonContainer>
				<Button href='#'>
					<Title 
						label='Send me a message here!'
						size={TitleSize.small} color={TitleColor.dark}
					/>
				</Button>

				<FixedIcon>
					<Image
						alt='White Envelope'
						src='/assets/icons/enveloper--white.svg'
						// width={'100%'}
						// height={'100%'}
						layout='fill'
						// objectFit=''
						unoptimized
					/>
				</FixedIcon>
			</ButtonContainer>
		</Container>
	);
};
