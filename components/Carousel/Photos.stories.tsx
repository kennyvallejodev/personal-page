import React from 'react';
import { Story, Meta } from '@storybook/react';

import { PhotoCarousel, PhotoCarouselI } from './Photos';

export default {
	title: 'Carousel/Photos',
	component: PhotoCarousel,
} as Meta;

const Template: Story<PhotoCarouselI> = (args) => {
	return (
		<div style={{ width: '50%'}}>
			<PhotoCarousel {...args} />
		</div>
	);
};


export const Photos = Template.bind({});
Photos.args = {

};
