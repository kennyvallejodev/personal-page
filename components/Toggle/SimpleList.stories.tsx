import React from 'react';
import { Story, Meta } from '@storybook/react';

import { ToggleSimpleList, SimpleListI } from './SimpleList';

export default {
	title: 'Toggles/Simple List',
	component: ToggleSimpleList,
} as Meta;

const Template: Story<SimpleListI> = (args) => {
	return (
		<div style={{ width: '60%' }}>
			<ToggleSimpleList {...args} />
		</div>
	);
};

export const OneColumn = Template.bind({});
OneColumn.args = {
	title: 'Spoken Languages',	
	items: [
		'English',
		'Spanish'
	],
	active: true,
};

export const TwoColumn = Template.bind({});
TwoColumn.args = {
	title: 'Skills and Knowledge',	
	items: [
		'Adaptive Web Design',
		'Front-End Development',
		'Back-End Development',
		'Hybrid Mobile Development',
		'Infrastructure',
		'Database Management',
		'Code Review',
		'Project Management',
		'Analysis Capacity',
	],
	active: true,
};