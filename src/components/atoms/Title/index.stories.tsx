import React from 'react';
import styled from 'styled-components';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Title } from '.';

export default {
  title: 'atom/Title',
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
