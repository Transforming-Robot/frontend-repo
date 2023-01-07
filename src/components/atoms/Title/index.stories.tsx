import React from 'react';
import styled from 'styled-components';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Title } from '.';

export default {
  title: 'atoms/Title',
  component: Title,
} as ComponentMeta<typeof Title>;

const TitleComponent = styled(Title)``;

const TitleTemplate: ComponentStory<typeof TitleComponent> = (args) => (
  <TitleComponent {...args} />
);

export const TitleView = TitleTemplate.bind({});
TitleView.args = {
  title: 'ChatterBox',
};
