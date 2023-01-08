import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

import { FormInput, Button, HorizontalBar } from '@/components/atoms';
import { useUserRegisterStore } from '@/stores';
import { apiURL } from '@/common/apiURL';

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;

  width: fit-content;
  height: fit-content;
`;

export function RegisterForm() {
  const [user, setUser] = useUserRegisterStore((state) => [
    state.user,
    state.setUser,
  ]);

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUser(event.target.value, event.target.id);
  };

  const onClickHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    axios.post(`${apiURL}/users/register`, user);
  };

  return (
    <FormContainer>
      <HorizontalBar />

      <FormInput
        id="email"
        label="이메일"
        placeHolder="이메일을 입력해주세요"
        value={user.email}
        onChange={onChangeHandler}
      />
      <FormInput
        id="password"
        type="password"
        label="비밀번호"
        placeHolder="비밀번호를 입력해주세요"
        value={user.password}
        onChange={onChangeHandler}
      />
      <FormInput
        id="passwordCheck"
        type="password"
        label="비밀번호 중복확인"
        placeHolder="비밀번호를 입력해주세요"
        value={user.passwordCheck}
        onChange={onChangeHandler}
      />
      <FormInput
        id="nickName"
        label="닉네임"
        placeHolder="닉네임을 입력해주세요"
        value={user.nickName}
        onChange={onChangeHandler}
      />

      <HorizontalBar />

      <Button label="가입하기" onClick={onClickHandler} />
    </FormContainer>
  );
}
