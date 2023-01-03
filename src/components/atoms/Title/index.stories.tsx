import React from 'react';
import styled from 'styled-components';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Title } from '.';

export default {
  title: 'atom/Title',
  component: Title,
} as ComponentMeta<typeof Title>;

const Template: ComponentStory<typeof Title> = (args) => <Title {...args} />;

const TitleComponent = styled(Template)`
  color: 1A1E27;
  font-family: 'Inter', sans-serif;
  font-size: 50;
`;

const TitleTemplate: ComponentStory<typeof TitleComponent> = (args) => (
  <TitleComponent {...args} />
);

export const TitleView = TitleTemplate.bind({});
TitleView.args = {
  title: 'ChatterBox',
};
