import React from "react";
import styled from "styled-components";
import Colors from "../../styles/colors";
import { Text, TextAlign, TextColor, TextSize } from "../Text";
import Image from 'next/image';

import { ToggleBase } from "./Base";
import { categories, items } from "../../data/technologies.json";
import { Title, TitleColor, TitleSize } from "../Title";

/**
 * Styled
 */
const Container = styled.div`
`;
const List = styled.div`
  display: flex;
	margin-top: 1rem;
  flex-wrap: wrap;
  height: 100%;
  min-height: 5rem;
	align-items: flex-start;
`;

const ListItem = styled.div`
  list-style: none;
	width: calc(100% / 10);
  position: relative;
	margin: 1rem;
	margin-left: 0;
  margin-bottom: 1rem;

	display: flex;
	flex-direction: column;

`;

const ListItemIcon = styled.div`
	width: 100%;
	// max-width: 5rem;
	height: 100%;
	min-height: 5rem;
	max-height: 5rem;
	padding: 0.5rem 0.25rem;
	box-sizing: border-box;
	overflow: hidden;
	display: flex;
	justify-content: center;
	align-items: center;
	margin: auto;

	text-align: center;

	border-radius: 1rem;
	background-color: ${Colors.card.technology.background};
`;
const ListItemLabel = styled.div`
	width: 100%;
	display: block;
	text-align: center;
	margin-top: 0.5rem;
`;

export interface CompleListI {
  title?: string;
  active?: boolean;
}

interface ItemI {
  id: number;
  title: string;
  category: string;
  icon: string;
}

export const ToggleComplexList: React.FC<CompleListI> = (props) => {
  const { title, active = false } = props;

  return (
    <ToggleBase
      title={title}
      active={active}
      content={
        <>
          {categories.map((category) => {
            return (
              <Container key={category}>
                <Title size={TitleSize.small} color={TitleColor.light}>{category}</Title>
                <List>
                  {items
                    .filter((v: ItemI) => v.category === category)
                    .map((item) => {
                      return (
                        <ListItem key={item.id}>
                          <ListItemIcon>
                            <Image
															src={item.icon} 
															alt={`${item.title} brand`} 
															width={75}
															height={75}
															objectFit='contain'
															unoptimized
														/>
                          </ListItemIcon>
                          <ListItemLabel>
                            <Text
															align={TextAlign.center}
															size={TextSize.small} color={TextColor.light}>
                              {item.title}
                            </Text>
                          </ListItemLabel>
                        </ListItem>
                      );
                    })}
                </List>
              </Container>
            );
          })}
        </>
      }
    />
  );
};
