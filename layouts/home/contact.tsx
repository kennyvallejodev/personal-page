
import Image from "next/image";
import React from "react";
import styled from "styled-components";
import { HorizotalNav } from "../../components/Nav/Horizontal";
import { Text, TextColor, TextSize } from "../../components/Text";
import { Title, TitleColor, TitleSize } from "../../components/Title";
import { ToggleSimpleList } from "../../components/Toggle/SimpleList";
import Colors from "../../styles/colors";

import SocialJson from "../../data/social.json";
import { ToggleComplexList } from "../../components/Toggle/ComplexList";
import { PhotoCarousel } from "../../components/Carousel/Photos";
import { ContactBanner } from "../../components/Banner/Contact";

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
`;

const Content = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: 0rem auto;
  padding: 4rem 0;
  box-sizing: border-box;
`;

const BannerContainer = styled.div`
	margin-top: 5rem;
`;

const SocialContainer = styled.div`
	display: flex;
	justify-content: space-between;
	margin: 2rem auto;
	width: 30%;
`;

const SocialItem = styled.div`
	align-items: center;
	display: flex;
	justify-content: center;
	background-color: ${Colors.secondary};
	border-radius: 0.75rem;
	box-sizing: border-box;
	padding: 0.75rem 1rem;
	transition: 0.35s ease;

	&:hover {
		background-color: ${Colors.primary};
	}
`;

export const Contact: React.FC = (props) => {

	return (
		<Container id='contact'>
			<Content>
        <Title
          size={TitleSize.regular}
          color={TitleColor.light}
          label="Contact"
          leftBorder
        />

				<BannerContainer>
					<ContactBanner />
				</BannerContainer>

				<SocialContainer>
					{
						SocialJson.social.map((social) => {
							return (
								<a href={social.link} target="_blank" key={social.id}>
									<SocialItem>
											<Image
												src={social.icon}
												alt={`${social.network} brand`}
												height={50}
												width={50}
												unoptimized
												objectFit='contain'
											/>
									</SocialItem>
								</a>
							);
						})
					}
				</SocialContainer>
			</Content>
		</Container>
	);
};