import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { PageLayout } from '.';
import { LoadingDots } from '../../components/atoms/LoadingDots';

import styled from 'styled-components';

// PageLayout 크기 맞추기 위한 임시 커버 컴포넌트
const TempContainer = styled.div`
  width: 1440px;
  height: 1024px;
`;

export default {
  title: 'layouts/PageLayout',
  component: PageLayout,
} as ComponentMeta<typeof PageLayout>;

const Template: ComponentStory<typeof PageLayout> = (args) => (
  <TempContainer>
    <PageLayout>{args.children}</PageLayout>
  </TempContainer>
);

export const Default = Template.bind({});
Default.args = {
  children: <div>레이아웃 테스트</div>,
};

export const LoadingPage = Template.bind({});
LoadingPage.args = {
  children: <LoadingDots />,
};
