import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { LoadingDots } from '.';

export default {
  title: 'atoms/LoadingDots',
  component: LoadingDots,
} as ComponentMeta<typeof LoadingDots>;

const Template: ComponentStory<typeof LoadingDots> = () => <LoadingDots />;

export const Default = Template.bind({});
Default.args = {};
