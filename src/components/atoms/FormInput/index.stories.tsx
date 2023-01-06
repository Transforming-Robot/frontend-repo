import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { FormInput } from '.';

export default {
  title: 'atoms/FormInput',
  component: FormInput,
} as ComponentMeta<typeof FormInput>;

const Template: ComponentStory<typeof FormInput> = (args) => (
  <FormInput {...args} />
);

export const FormEmailInput = Template.bind({});
FormEmailInput.args = {
  label: '이메일',
  placeHolder: '이메일을 입력해주세요',
};

export const FormPasswordInput = Template.bind({});
FormPasswordInput.args = {
  label: '비밀번호',
  placeHolder: '비밀번호를 입력해주세요',
};

export const FormPasswordCheckInput = Template.bind({});
FormPasswordCheckInput.args = {
  label: '비밀번호 중복 확인',
  placeHolder: '비밀번호를 입력해주세요',
};

export const FormNicknameInput = Template.bind({});
FormNicknameInput.args = {
  label: '닉네임',
  placeHolder: '닉네임을 입력해주세요',
};
