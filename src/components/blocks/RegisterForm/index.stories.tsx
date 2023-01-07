import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { RegisterForm } from '.';

export default {
  title: 'blocks/RegisterForm',
  component: RegisterForm,
} as ComponentMeta<typeof RegisterForm>;

const Template: ComponentStory<typeof RegisterForm> = () => <RegisterForm />;

export const RegisterFormStory = Template.bind({});
RegisterFormStory.args = {};
