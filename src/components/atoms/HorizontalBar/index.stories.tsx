import React from 'react';
import styled from 'styled-components';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { HorizontalBar } from '.';

export default {
  title: 'atoms/HorizontalBar',
  component: HorizontalBar,
} as ComponentMeta<typeof HorizontalBar>;

const HorizontalBarComponent = styled(HorizontalBar)``;

const HorizontalBarTemplate: ComponentStory<
  typeof HorizontalBarComponent
> = () => <HorizontalBarComponent />;

export const HorizontalBarView = HorizontalBarTemplate.bind({});
