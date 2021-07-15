import React from 'react';
import styled from 'styled-components';
import Colors from '../../styles/colors';
import { Text, TextColor, TextSize } from '../Text';
import { Title, TitleColor, TitleSize } from '../Title';

/**
 * Styled
 */
const Container = styled.nav`
	display: block;
	position: relative;
	margin: 0;
`;

const List = styled.ul`
	list-style: none;
	margin: 0;
	padding: 0;

	li:nth-child(1) {
		padding-left: 0;
		margin-left: 0;
	}

`;
const ListItem = styled.li`
	display: inline-block;
	padding: 0.5rem;
	margin: 0rem 1rem;
	box-sizing: border-box;
	transition: .25s ease;
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
`;

export interface HorizontalNavI {

};

export const HorizotalNav: React.FC<HorizontalNavI> = (props) => {
	return (
		<Container>
			<List>
				<ListItem>
					<a href='#'>
						<Text 
							label='Intro'
							size={TextSize.regular} color={TextColor.dark}
						/>
					</a>
				</ListItem>
				<ListItem>
					<a href='#'>
						<Text 
							label='Positions'
							size={TextSize.regular} color={TextColor.dark}
						/>
					</a>
				</ListItem>
				<ListItem>		
					<a href='#'>
						<Text 
							label='Skillset'
							size={TextSize.regular} color={TextColor.dark}
						/>
					</a>
				</ListItem>
				<ListItem>
					<a href='#'>
						<Text 
							label='Goodcoder.js'
							size={TextSize.regular} color={TextColor.dark}
						/>
					</a>
				</ListItem>
				<ListItem>
					<a href='#'>
					<Text 
						label='Q&amp;A'
						size={TextSize.regular} color={TextColor.dark}
					/>
					</a>
				</ListItem>
				<ListItem>
					<a href='#'>
						<Text 
							label='Contact Me'
							size={TextSize.regular} color={TextColor.dark}
						/>
					</a>
				</ListItem>
			</List>
		</Container>
	);
};
