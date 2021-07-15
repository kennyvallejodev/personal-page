import React from 'react';
import { Story, Meta } from '@storybook/react';

import { FaqToggle, FaqI } from './Faq';

export default {
	title: 'Toggles/Faq',
	component: FaqToggle,
} as Meta;

const Template: Story<FaqI> = (args) => <FaqToggle {...args} />;

export const Faq = Template.bind({});
Faq.args = {

};
