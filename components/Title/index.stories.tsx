import React from "react";
import { Meta, Story } from "@storybook/react";

import { Title, TitleI } from "./index";

export default {
  title: "Title",
  component: Title,
} as Meta;

const Template: Story<TitleI> = (props) => <Title {...props} />;

export const OneLineTitle = Template.bind({});
OneLineTitle.args = {
  label: "This is one line title",
};

export const TwoLineTitle = Template.bind({});
TwoLineTitle.args = {
  label: "This is two \t\nline title.",
};

export const OneLineWithPrimaryColor = Template.bind({});
OneLineWithPrimaryColor.args = {
	children: (
		<>
			This is my <span className="primary">Primary Title</span>
		</>
	)
};

export const TwoLineWithPrimaryColor = Template.bind({});
TwoLineWithPrimaryColor.args = {
	children: (
		<>
			{"I'm "} <span className="primary">Kenny Vallejo</span><br />
			and {"I'm "}a Fullstack<br />
			Developer.
		</>
	)
};
