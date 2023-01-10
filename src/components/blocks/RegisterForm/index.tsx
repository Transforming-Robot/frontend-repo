import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

import { FormInput, Button, HorizontalBar } from '@/components/atoms';
import { useUserRegisterStore } from '@/stores';
import { apiURL } from '@/common/apiURL';
import { validationTest } from '@/utils';

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;

  width: 400px;
  height: fit-content;
`;

export function RegisterForm() {
  const [user, setUser, setUserValidation] = useUserRegisterStore((state) => [
    state.user,
    state.setUser,
    state.setUserValidation,
  ]);

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const id = event.target.id;
    const validationResult =
      id === 'passwordCheck'
        ? validationTest(id, value, user.password.value)
        : validationTest(id, value);

    setUser(value, id);
    setUserValidation(validationResult, id);
  };

  const onClickHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (
      user.email.validation &&
      user.password.validation &&
      user.passwordCheck.validation &&
      user.nickName.validation
    ) {
      axios.post(`${apiURL}/users/register`, user);
    } else return;
  };

  return (
    <FormContainer>
      <HorizontalBar />

      <FormInput
        id="email"
        label="이메일"
        placeHolder="이메일을 입력해주세요"
        value={user.email.value}
        onChange={onChangeHandler}
        validation={user.email.validation}
        required
      />
      <FormInput
        id="password"
        type="password"
        label="비밀번호"
        placeHolder="비밀번호를 입력해주세요"
        value={user.password.value}
        onChange={onChangeHandler}
        validation={user.password.validation}
        required
      />
      <FormInput
        id="passwordCheck"
        type="password"
        label="비밀번호 중복확인"
        placeHolder="비밀번호를 입력해주세요"
        value={user.passwordCheck.value}
        onChange={onChangeHandler}
        validation={user.passwordCheck.validation}
        required
      />
      <FormInput
        id="nickName"
        label="닉네임"
        placeHolder="닉네임을 입력해주세요"
        value={user.nickName.value}
        onChange={onChangeHandler}
        validation={user.nickName.validation}
        maxLength={5}
        required
      />

      <HorizontalBar />

      <Button label="가입하기" onClick={onClickHandler} />
    </FormContainer>
  );
}
