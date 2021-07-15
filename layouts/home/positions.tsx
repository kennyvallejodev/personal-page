import React from 'react';
import styled from 'styled-components';
import { PositionCard } from '../../components/Card/Position';
import { Title, TitleColor, TitleSize } from '../../components/Title';

import PositionsJson from '../../data/positions.json';

/**
 * Styled
 */
const Container = styled.div`
	width: 100%;
	height: 100%;
	min-height: 70vh;
	margin: 0;
	padding: 0;

	background-color: white;
`;

const Content = styled.div`
	width: 100%;
	max-width: 1440px;
	margin: auto;
	padding: 4rem 0;
	box-sizing: border-box;
`;

const CardsContainer = styled.div`
	display: flex;
	margin: 4rem auto;

	align-items: stretch;
`;

export const Positions: React.FC = (props) => {
	return (
		<Container>
			<Content>
				<Title
					size={TitleSize.regular}
					color={TitleColor.light}
					label="Positions"
					leftBorder
				/>

				<CardsContainer>
					{
						PositionsJson.positions.map((position) => {
							return (
								<PositionCard 
									key={position.id}
									roles={position.roles}
									company={position.company}
								/>
							);
						})
					}
				</CardsContainer>
			</Content>
		</Container>
	);	
};

