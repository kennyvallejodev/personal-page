import React from "react";
import styled from "styled-components";
import Colors from "../../styles/colors";
import { Text, TextAlign, TextColor, TextSize } from "../Text";
import Image from 'next/image';

import { ToggleBase } from "./Base";
import TechnologiesJson from "../../data/technologies.json";
import { Title, TitleColor, TitleSize } from "../Title";

/**
 * Styled
 */
const Container = styled.div`
	padding: 1.5rem;
	box-sizing: border-box;
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

	animation-name: fadeIn;
	animation-duration: 0.3s;

	@media (min-width: 520px) and (max-width: 700px) {
		width: calc(100% / 8);
	}

	@media (min-width: 400px) and (max-width: 520px) {
		width: calc(100% / 6);
	}

	@media (min-width: 300px) and (max-width: 400px) {
		width: calc(100% / 4);
	}

	@media (max-width: 300px) {
		width: 100%;
	}

	@keyframes fadeIn {
		from { opacity: 0; transform: translateX(-25px); }
		to { opacity: 1; transform: translateX(0px); }
	}

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
          {TechnologiesJson.categories.map((category) => {
            return (
              <Container key={category}>
                <Title size={TitleSize.small} color={TitleColor.light}>{category}</Title>
                <List>
                  {TechnologiesJson.items
                    .filter((v: ItemI) => v.category === category)
                    .map((item) => {
                      return (
                        <ListItem key={item.id}>
                          <ListItemIcon>
                            <Image
															src={item.icon} 
															alt={`${item.title} brand`} 
															width={60}
															height={60}
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
