import React from 'react';
import { Story, Meta } from '@storybook/react';

import { PositionCard, PositionCardI } from './Position';

export default {
	title: 'Cards/Position',
	component: PositionCard,
} as Meta;

const TemplateOne: Story<PositionCardI> = (args) => {
	return (
		<div style={{ display: 'flex', width: 'calc(100% / 3)'}}>
			<PositionCard {...args} />
		</div>
	);
};

const TemplateMultiples: Story<PositionCardI> = (args) => {
	return (
		<div style={{ display: 'flex'}}>
			<PositionCard {...args} />

			<PositionCard {...args} />

			<PositionCard {...args} />
		</div>
	);
};
export const One = TemplateOne.bind({});
One.args = {
};

export const Multiples = TemplateMultiples.bind({});
One.args = {
};