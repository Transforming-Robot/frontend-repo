import React from 'react';
import styled from 'styled-components';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from '.';

export default {
  title: 'atoms/Button',
  component: Button,
  argTypes: {
    label: {
      name: 'label',
      type: { name: 'string', required: true },
      description: '버튼 label prop',
      control: {
        type: 'text',
      },
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const DefaultButton = Template.bind({});
DefaultButton.args = {
  label: '기본 버튼',
};

const StyledButton = styled(Button)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px 16px;

  background: #4880ee;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  border-radius: 8px;
  border: 0;

  font-weight: 600;
  font-size: 16px;
  text-align: center;
  color: #ffffff;

  &:hover {
    background-color: #3c68be;

    cursor: pointer;
  }

  &:active {
    background: #83b4f9;

    box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
`;

const StyledButtonTemplate: ComponentStory<typeof StyledButton> = (args) => (
  <StyledButton {...args} />
);

export const ToLoginButton = StyledButtonTemplate.bind({});
ToLoginButton.args = {
  onClick: (event: React.MouseEvent) => {
    console.log(event);
  },
  label: '로그인 하러가기',
};

export const ToRegisterButton = StyledButtonTemplate.bind({});
ToRegisterButton.args = {
  label: '회원가입 하러가기',
  onClick: (event: React.MouseEvent) => {
    console.log(event);
  },
};

export const ToChatButton = StyledButtonTemplate.bind({});
ToChatButton.args = {
  label: '채팅 하러가기',
  onClick: (event: React.MouseEvent) => {
    console.log(event);
  },
};

export const RegisterButton = StyledButtonTemplate.bind({});
RegisterButton.args = {
  label: '가입하기',
  onClick: (event: React.MouseEvent) => {
    console.log(event);
  },
};

export const LoginButton = StyledButtonTemplate.bind({});
LoginButton.args = {
  label: '로그인',
  onClick: (event: React.MouseEvent) => {
    console.log(event);
  },
};

export const SendMessageButton = StyledButtonTemplate.bind({});
SendMessageButton.args = {
  label: '메시지 보내기',
  onClick: (event: React.MouseEvent) => {
    console.log(event);
  },
};
