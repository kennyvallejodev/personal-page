import React from 'react';
import { Story, Meta } from '@storybook/react';

import { CompleListI, ToggleComplexList } from './ComplexList';

export default {
	title: 'Toggles/Complex List',
	component: ToggleComplexList,
} as Meta;

const Template: Story<CompleListI> = (args) => {
	return (
		<div style={{ width: '60%' }}>
			<ToggleComplexList {...args} />
		</div>
	);
}

export const ComplexList = Template.bind({});
ComplexList.args = {
	title: 'Tools and Technologies',
	active: true,
};