import React, { CSSProperties } from "react";
import styled from "styled-components";
import Colors from "../../styles/colors";

export enum TextSize {
  small = "s",
  regular = "m",
  large = "l",
}

export enum TextColor {
  light = "light",
  dark = "dark",
  primary = "primary",
}

export enum TextAlign {
	left = 'l',
	center = 'c',
	right = 'r',
}

export enum TextWeight {
	regular = 'r',
	bold = 'b',
}

export interface TextI {
  /**
   * Content of the text
   */
  label?: string;
  /**
   * @description Text Size
   * @default 'regular'
   */
  size?: TextSize;

  /**
   * @description Text Color Assigned
   * @default 'light'
   */
  color?: TextColor;

	/**
	 * @description Align Text Position
	 */
	align?: TextAlign;

	/**
	 * @description Text Font Weight 
	 */
	weight?: TextWeight;

  /**
   * Custom ClassNames
   */
  className?: string;

  /**
   * Custom CSS Style
   */
  style?: CSSProperties;
}

const TextComponent = styled.p`
  // Font Stuff
  font-family: Poppins;
  line-height: 1.33rem;

  white-space: pre-line;

  // Padding, Margin and Stuff
  margin: 0;
  padding: 0;

  width: auto;

	// Font Sizes 👇👇
	&.size-${TextSize.small} {
		font-size: 0.75rem;
	}

	&.size-${TextSize.regular} {
		font-size: 1rem;
	}

	&.size-${TextSize.large} {
		font-size: 1.25rem;
	}

	// Font Weight 👇👇
	&.weight-${TextWeight.regular} {
		font-weight: regular;
	}

	&.weight-${TextWeight.bold} {
		font-weight: bold;
	}

	// Colors 👇👇
	&.color-${TextColor.light} {
		color: ${Colors.text.light};
	}

	&.color-${TextColor.dark} {
		color: ${Colors.text.dark};
	}

	&.color-${TextColor.primary} {
		color: ${Colors.text.primary};
	}

	// Align Position 👇👇
	&.align-${TextAlign.left} {
		text-align: left;
	}

	&.align-${TextAlign.center} {
		text-align: center;
	}

	&.align-${TextAlign.right} {
		text-align: right;
	}
`;

export const Text: React.FC<TextI> = ({
  label,
  size = TextSize.regular,
  color = TextColor.light,
	align = TextAlign.left,
	weight = TextWeight.regular,
  children,
  ...props
}) => {
  let ClassesStr = props.className || "";
  if (size) ClassesStr += ` size-${size}`;
  if (color) ClassesStr += ` color-${color}`;
	if (align) ClassesStr += ` align-${align}`;
	if (weight) ClassesStr += ` weight-${weight}`;

  return (
    <TextComponent style={props.style} className={ClassesStr}>
      {label || children}
    </TextComponent>
  );
};
