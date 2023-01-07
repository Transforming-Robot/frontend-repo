import React from 'react';
import styled from 'styled-components';
import { Title, FormInput, Button } from '@/components/atoms';

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
  return (
    <Container>
      <Title title="ChatterBox" />
      <FormContainer>
        <FormInput label="이메일" placeHolder="이메일을 입력해주세요" />
        <FormInput label="비밀번호" placeHolder="비밀번호를 입력해주세요" />
        <FormInput
          label="비밀번호 중복확인"
          placeHolder="비밀번호를 입력해주세요"
        />
        <FormInput label="닉네임" placeHolder="닉네임을 입력해주세요" />
        <Button label="가입하기" />
      </FormContainer>
    </Container>
  );
}
