import React from 'react';
import styled from 'styled-components';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { HorizontalBar } from '.';

export default {
  title: 'atom/HorizontalBar',
  component: HorizontalBar,
} as ComponentMeta<typeof HorizontalBar>;

const Template: ComponentStory<typeof HorizontalBar> = () => <HorizontalBar />;

const HorizontalBarComponent = styled(Template)`
  width: 232px;
  height: 1px;
  background: #d6dadf;
  border: 0;
`;

const HorizontalBarTemplate: ComponentStory<
  typeof HorizontalBarComponent
> = () => <HorizontalBarComponent />;

export const HorizontalBarView = HorizontalBarTemplate.bind({});
