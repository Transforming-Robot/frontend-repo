import React from 'react';
import styled from 'styled-components';
import { Title, FormInput, Button } from '@/components/atoms';
import { useUserRegisterStore } from '@/stores';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  width: fit-content;
  height: fit-content;
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export function RegisterForm() {
  const [user, setUser] = useUserRegisterStore((state) => [
    state.user,
    state.setUser,
  ]);

  return (
    <Container>
      <Title title="ChatterBox" />
      <FormContainer>
        <FormInput
          id="email"
          label="이메일"
          placeHolder="이메일을 입력해주세요"
          value={user.email}
          onChange={(event) => setUser(event.target.value, 'email')}
        />
        <FormInput
          id="password"
          label="비밀번호"
          placeHolder="비밀번호를 입력해주세요"
          value={user.password}
          onChange={(event) => setUser(event.target.value, 'password')}
        />
        <FormInput
          id="passwordCheck"
          label="비밀번호 중복확인"
          placeHolder="비밀번호를 입력해주세요"
          value={user.passwordCheck}
          onChange={(event) => setUser(event.target.value, 'passwordCheck')}
        />
        <FormInput
          id="nickName"
          label="닉네임"
          placeHolder="닉네임을 입력해주세요"
          value={user.nickName}
          onChange={(event) => setUser(event.target.value, 'nickName')}
        />
        <Button label="가입하기" />
      </FormContainer>
    </Container>
  );
}
