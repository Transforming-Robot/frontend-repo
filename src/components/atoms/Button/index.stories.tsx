import React from 'react';

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

export const ToLoginButton = Template.bind({});
ToLoginButton.args = {
  onClick: (event: React.MouseEvent) => {
    console.log(event);
  },
  label: '로그인 하러가기',
};

export const ToRegisterButton = Template.bind({});
ToRegisterButton.args = {
  label: '회원가입 하러가기',
  onClick: (event: React.MouseEvent) => {
    console.log(event);
  },
};

export const ToChatButton = Template.bind({});
ToChatButton.args = {
  label: '채팅 하러가기',
  onClick: (event: React.MouseEvent) => {
    console.log(event);
  },
};

export const RegisterButton = Template.bind({});
RegisterButton.args = {
  label: '가입하기',
  onClick: (event: React.MouseEvent) => {
    console.log(event);
  },
};

export const LoginButton = Template.bind({});
LoginButton.args = {
  label: '로그인',
  onClick: (event: React.MouseEvent) => {
    console.log(event);
  },
};

export const SendMessageButton = Template.bind({});
SendMessageButton.args = {
  label: '메시지 보내기',
  onClick: (event: React.MouseEvent) => {
    console.log(event);
  },
};
