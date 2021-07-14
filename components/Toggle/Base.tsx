import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Colors from "../../styles/colors";
import { Title, TitleColor, TitleSize } from "../Title";

import ArrowBottom from "../../public/assets/icons/arrow-bottom.svg";
import CloseIcon from "../../public/assets/icons/close.svg";

/**
 * Styled Components
 */
const Container = styled.div``;

const Header = styled.div`
	cursor: pointer;
  align-items: center;
  background-color: ${Colors.toggle.header};
  box-sizing: border-box;
  display: flex;
  padding: 1.5rem;
  width: 100%;

	transition: 0.3s ease-in-out;

	&:hover {
		background-color: ${Colors.toggle.header}95;
	}

`;

const HeaderTitle = styled.div`
  width: calc(100% - 2rem);
`;

const HeaderIcon = styled.div`
  width: 2rem;

  img {
		height: 1.25rem;
		object-fit: cover;
  }
`;

const Content = styled.div`
	width: 100%;
	padding: 1rem;
	box-sizing: border-box;

	min-height: 8rem;
	height: 100%;
	background-color: #fff;

	border-radius: 0px 0px 1rem 1rem;
`;

export interface ToggleBaseI {
  title?: string;

  content?: React.ReactNode;

  active?: boolean;
}

export const ToggleBase: React.FC<ToggleBaseI> = (props) => {
  const { title, content, active = false } = props;
  const [isOpen, setOpen] = useState<boolean>(active);

	function handleClick () {
		setOpen(!isOpen);
	}

	useEffect(() => {
		setOpen(active);
	}, [active]);

  return (
    <Container>
      <Header onClick={handleClick}>
        <HeaderTitle>
          <Title color={TitleColor.light} size={TitleSize.regular}>
            {title}
          </Title>
        </HeaderTitle>

        <HeaderIcon>
          <img
            src={isOpen ? CloseIcon : ArrowBottom}
            alt={isOpen ? "Cross to Close" : "Arrow pointing to the bottom"}
          />
        </HeaderIcon>
      </Header>
			{
				isOpen && (
					<Content>{content}</Content>
				)
			}
    </Container>
  );
};
