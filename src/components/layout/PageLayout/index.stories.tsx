import React from 'react';
import styled from 'styled-components';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { PageLayout } from '.';
import { Title, Button, LoadingDots, FormInput } from '@/components/atoms';

export default {
  title: 'layouts/PageLayout',
  component: PageLayout,
} as ComponentMeta<typeof PageLayout>;

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Template: ComponentStory<typeof PageLayout> = (args) => (
  <PageLayout>{args.children}</PageLayout>
);

export const LoadingPage = Template.bind({});
LoadingPage.args = {
  children: (
    <PageContainer>
      <LoadingDots />
    </PageContainer>
  ),
};

export const MainPageBeforeLogin = Template.bind({});
MainPageBeforeLogin.args = {
  children: (
    <PageContainer>
      <Title title="ChatterBox" />
      <ButtonContainer>
        <Button label="로그인 하러가기" />
        <Button label="회원가입 하러가기" />
      </ButtonContainer>
    </PageContainer>
  ),
};

export const MainPageAfterLogin = Template.bind({});
MainPageAfterLogin.args = {
  children: (
    <PageContainer>
      <Title title="ChatterBox" />
      <ButtonContainer>
        <Button label="채팅 하러가기" />
      </ButtonContainer>
    </PageContainer>
  ),
};

export const RegisterPage = Template.bind({});
RegisterPage.args = {
  children: (
    <PageContainer>
      <Title title="ChatterBox" />
      <FormContainer>
        <FormInput label="이메일" placeHolder="이메일을 입력해주세요" />
        <FormInput label="비밀번호" placeHolder="비밀번호를 입력해주세요" />
        <FormInput
          label="비밀번호 중복체크"
          placeHolder="비밀번호를 입력해주세요"
        />
        <FormInput label="닉네임" placeHolder="닉네임을 입력해주세요" />
        <ButtonContainer>
          <Button label="가입하기" />
        </ButtonContainer>
      </FormContainer>
    </PageContainer>
  ),
};

export const LoginPage = Template.bind({});
LoginPage.args = {
  children: (
    <PageContainer>
      <Title title="ChatterBox" />
      <FormContainer>
        <FormInput label="이메일" placeHolder="이메일을 입력해주세요" />
        <FormInput label="비밀번호" placeHolder="비밀번호를 입력해주세요" />
        <ButtonContainer>
          <Button label="로그인" />
        </ButtonContainer>
      </FormContainer>
    </PageContainer>
  ),
};
