import React from 'react';
import { Story, Meta } from '@storybook/react';

import { HorizontalNavI, HorizotalNav } from './Horizontal';

export default {
	title: 'Navigation/Horizontal',
	component: HorizotalNav,
} as Meta;

const Template: Story<HorizontalNavI> = (args) => <HorizotalNav {...args} />;

export const Horizontal = Template.bind({});
