import React, { CSSProperties } from "react";
import styled from "styled-components";
import Colors from "../../styles/colors";

export enum TitleSize {
  small = "sm",
  regular = "md",
  large = "lg",
	xlarge = "xlg"
}

export enum TitleColor {
  light = "light",
  dark = "dark",
  primary = "primary",
}

export enum TitleAlign {
  left = "l",
  center = "c",
  right = "r",
}

export enum TitleWeight {
  regular = "r",
  bold = "b",
}

export enum TitleTypes {
  header = 'header',
  large = 'large',
  medium = 'medium',
};

export interface TitleI {
  /**
   * Content of the text
   */
  label?: string;
  /**
   * @description Text Size
   * @default 'regular'
   */
  size?: TitleSize;

  /**
   * @description Text Color Assigned
   * @default 'light'
   */
  color?: TitleColor;

  /**
   * @description Align Text Position
   */
  align?: TitleAlign;

  /**
   * @description Text Font Weight
   */
  weight?: TitleWeight;

  /**
   * @description Title Types 
   */
  type?: TitleTypes;

  /**
   * Custom ClassNames
   */
  className?: string;

  /**
   * Custom CSS Style
   */
  style?: CSSProperties;
}

const TitlesBaseStyles = `
  // Font Stuff
  font-family: Poppins;
  line-height: 1;

  white-space: pre-line;

  // Padding, Margin and Stuff
  margin: 0;
  padding: 0;

  width: auto;

  // Font Sizes 👇👇
  &.size-${TitleSize.small} {
    font-size: 1.5rem;
  }

  &.size-${TitleSize.regular} {
    font-size: 2rem;
  }

  &.size-${TitleSize.large} {
    font-size: 3rem;
  }

  &.size-${TitleSize.xlarge} {
    font-size: 4rem;
  }

  // Font Weight 👇👇
  &.weight-${TitleWeight.regular} {
    font-weight: regular;
  }

  &.weight-${TitleWeight.bold} {
    font-weight: bold;
  }

  // Colors 👇👇
  &.color-${TitleColor.light} {
    color: ${Colors.text.light};
  }

  &.color-${TitleColor.dark} {
    color: ${Colors.text.dark};
  }

  &.color-${TitleColor.primary} {
    color: ${Colors.text.primary};
  }

  // Align Position 👇👇
  &.align-${TitleAlign.left} {
    text-align: left;
  }

  &.align-${TitleAlign.center} {
    text-align: center;
  }

  &.align-${TitleAlign.right} {
    text-align: right;
  }

  .primary {
    color: ${Colors.text.primary};
  }
`;

const Header = styled.h1`${TitlesBaseStyles}`;
const LargeTitle = styled.h2`${TitlesBaseStyles}`;
const MediumTitle = styled.h3`${TitlesBaseStyles}`;

const Types = {
  [TitleTypes.header] : Header,
  [TitleTypes.large] : LargeTitle,
  [TitleTypes.medium] : MediumTitle,
};

export const Title: React.FC<TitleI> = ({
  label,
  size = TitleSize.regular,
  color = TitleColor.light,
  align = TitleAlign.left,
  weight = TitleWeight.regular,
  type = TitleTypes.large,
  children,
  ...props
}) => {
  let ClassesStr = props.className || "";
  let Component = Header;

  if (type) Component = Types[type];
  if (size) ClassesStr += ` size-${size}`;
  if (color) ClassesStr += ` color-${color}`;
  if (align) ClassesStr += ` align-${align}`;
  if (weight) ClassesStr += ` weight-${weight}`;

  return (
    <Component style={props.style} className={ClassesStr}>
      {label || children}
    </Component>
  );
};
