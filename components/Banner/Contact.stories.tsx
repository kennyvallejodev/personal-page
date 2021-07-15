import React from 'react';
import { Meta, Story } from '@storybook/react';

import { ContactBanner, ContactBannerI } from './Contact';

export default {
	title: 'Banners/Contact',
	component: ContactBanner,
} as Meta;

const Template: Story<ContactBannerI> = (args) => <ContactBanner {...args} />;

export const Contact = Template.bind({});
Contact.args = {
};
