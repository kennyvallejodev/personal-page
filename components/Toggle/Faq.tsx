import Image from "next/image";
import React from "react";
import styled from "styled-components";

import QuestionJson from "../../data/faq.json";
import { Text, TextColor, TextSize } from "../Text";
import { Title, TitleColor, TitleSize } from "../Title";

/**
 * Styled
 */
const Container = styled.div`
  margin: auto;
  max-width: 1440px;
  width: 100%;
`;

const List = styled.div``;

const ListItem = styled.div`
	box-sizing: border-box;
	padding-bottom: 1rem;
  border-bottom: 1px solid #999;
  cursor: pointer;
  margin-bottom: 1.5rem;
`;

const ListHeader = styled.div`
  align-items: center;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  padding: 1rem 0rem;
`;

const HeaderTitle = styled.div`
  width: 90%;
`;
const HeaderIcon = styled.div`
  width: 10%;
	text-align: center;
`;

const ListContent = styled.div``;

export interface FaqI {}

interface QuestionI {
  id: number;
  question: string;
  answer: string;
  show?: boolean;
}

export const FaqToggle: React.FC<FaqI> = (props) => {
  const [items, setItems] = React.useState<QuestionI[]>(QuestionJson.questions);

  function toggleShow(id: number) {
    setItems(
      items.map((item) => {
        return {
          ...item,
          show: item.id === id ? (item.show ? false : true) : item.show,
        };
      })
    );
  }

  return (
    <Container>
      <List>
        {items.map((question) => {
          return (
            <ListItem 
							onClick={() => toggleShow(question.id)}
							key={question.id}>
              <ListHeader >
                <HeaderTitle>
                  <Title
                    size={TitleSize.regular}
                    label={question.question}
                    color={TitleColor.dark}
                  />
                </HeaderTitle>
                <HeaderIcon>
                  <Image
                    alt={
                      question.show
                        ? "Cross to Close the FAQ"
                        : "Arrow Bottom with Primary Color"
                    }
                    src={
                      question.show
                        ? "assets/icons/close--primary.svg"
                        : "/assets/icons/arrow-bottom--primary.svg"
                    }
                    width={question.show ? 15 : 20}
                    height={question.show ? 15 : 20}
                    objectFit="contain"
                    unoptimized
                  />
                </HeaderIcon>
              </ListHeader>
              {question.show && (
                <ListContent>
                  <Text
                    label={question.answer}
                    color={TextColor.dark}
                    size={TextSize.large}
                  />
                </ListContent>
              )}
            </ListItem>
          );
        })}
      </List>
    </Container>
  );
};
