import React from 'react';
import styled from 'styled-components';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { PageLayout } from '.';
import { Title, Button, LoadingDots } from '@/components/atoms';

export default {
  title: 'layouts/PageLayout',
  component: PageLayout,
} as ComponentMeta<typeof PageLayout>;

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  min-width: 50%;
  min-height: 50%;
`;

const Template: ComponentStory<typeof PageLayout> = (args) => (
  <PageLayout>{args.children}</PageLayout>
);

export const Default = Template.bind({});
Default.args = {
  children: <PageContainer>레이아웃 테스트</PageContainer>,
};

export const LoadingPage = Template.bind({});
LoadingPage.args = {
  children: (
    <PageContainer>
      <LoadingDots />
    </PageContainer>
  ),
};

const MainPageButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const MainPageBeforeLogin = Template.bind({});
MainPageBeforeLogin.args = {
  children: (
    <PageContainer>
      <Title title="ChatterBox" />
      <MainPageButtonContainer>
        <Button label="로그인 하러가기" />
        <Button label="회원가입 하러가기" />
      </MainPageButtonContainer>
    </PageContainer>
  ),
};

export const MainPageAfterLogin = Template.bind({});
MainPageAfterLogin.args = {
  children: (
    <PageContainer>
      <Title title="ChatterBox" />
      <MainPageButtonContainer>
        <Button label="채팅 하러가기" />
      </MainPageButtonContainer>
    </PageContainer>
  ),
};
