import React from 'react';
import styled from 'styled-components';
import Colors from '../../styles/colors';
import { Text, TextColor, TextSize } from '../Text';

import { ToggleBase } from './Base';

/**
 * Styled
 */
const List = styled.ul`
	list-style: none;

	display: flex;
	flex-wrap: wrap;
	height: 100%;
	// min-height: 5rem;

	li::before {
		content: '';
		position: absolute;

		width: 10px;
		height: 10px;

		left: -1rem;
		top: 5px;
		background-color: ${Colors.toggle.dot};
		border-radius: 50%;
	}
`;

const ListItem = styled.li`
	list-style: none;
	width: 50%;
	position: relative;
	margin-bottom: 1rem;

	@media (max-width: 480px) {
		width: 100%;
	}
`;

export interface SimpleListI {
	title?: string;
	active?: boolean
	items?: string[];
	lock?: boolean;
};

export const ToggleSimpleList: React.FC<SimpleListI> = (props) => {
	const { lock = false, title, active = false, items = [] } = props;

	return (
		<ToggleBase 
			title={title}
			active={active}
			lock={lock}
			content={
				<List>
					{
						items.map((item) => {
							return (
								<ListItem key={item}>
									<Text color={TextColor.light} size={TextSize.large}>
										{ item }
									</Text>
								</ListItem>
							);
						})
					}
				</List>
			}
		/>
	);
};
