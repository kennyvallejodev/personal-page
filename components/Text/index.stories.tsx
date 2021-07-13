import React from 'react';
import { Meta, Story } from '@storybook/react';

import { Text, TextI } from './index';

export default {
	title: 'Text',
	component: Text,
} as Meta;

const Template:Story<TextI> = (props) => <Text {...props} />;

export const OneLineText = Template.bind({});
OneLineText.args = {
	label: 'This is one line text.',
};

export const TwoLineText = Template.bind({});
TwoLineText.args = {
	label: 'This is two \t\nline text.',
};
