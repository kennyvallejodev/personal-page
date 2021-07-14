import React from 'react';
import { Story, Meta } from '@storybook/react';

import { ToggleBase, ToggleBaseI } from './Base';

export default {
	title: 'Toggles/Base',
	component: ToggleBase,
} as Meta;

const Template: Story<ToggleBaseI> = (args) => {
	return (
		<div style={{ width: '60%' }}>
			<ToggleBase {...args} />
		</div>
	);
};

export const Base = Template.bind({});
Base.args = {
	title: 'Skills and Knowledge',	
};