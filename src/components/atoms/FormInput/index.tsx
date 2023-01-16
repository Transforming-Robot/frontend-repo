import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

interface Props {
  id: string;
  className?: string;
  type?: string;
  label: string;
  placeHolder: string;
  value?: string;
  validation?: boolean;
  maxLength?: number;
  required?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

interface StyledInputProps {
  value?: string;
  validation?: boolean;
}

const Container = styled.div`
  position: relative;
  height: fit-content;

  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  position: absolute;
  top: -4px;
  left: 14px;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 12px;

  @media (prefers-color-scheme: light) {
    color: #1a1e27;
    background-color: #ffffff;
  }
`;

const StyledInput = styled.input<StyledInputProps>`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 14px;

  border: 1.8px solid #64768c;
  border-radius: 8px;

  padding: 12px 12px;

  outline: none;

  border-color: ${(props) => !props.validation && props.value !== '' && 'red'};
  border-color: ${(props) =>
    props.validation && props.value !== '' && '#00d300'};

  &::placeholder {
    color: #b1b8c0;
  }
`;

const ValidationDescription = styled.div`
  color: red;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 14px;

  padding: 8px;
`;

export function FormInput({
  id,
  className,
  type,
  label,
  placeHolder,
  value,
  validation,
  maxLength,
  required,
  onChange,
}: Props) {
  const [descriptionMessage, setDescriptionMessage] = useState('');

  useEffect(() => {
    switch (id) {
      case 'email':
        setDescriptionMessage('이메일 형식에 맞게 입력해주세요');
        break;
      case 'password':
        setDescriptionMessage(
          '비밀번호는 숫자 + 영문 + 특수문자 조합 8자리 이상이여야 합니다',
        );
        break;
      case 'passwordCheck':
        setDescriptionMessage('비밀번호가 일치하지 않습니다.');
        break;
      case 'nickName':
        setDescriptionMessage('닉네임은 2자리 이상 5자리 이하여야 합니다');
        break;
    }
  }, []);

  return (
    <Container>
      <Label htmlFor={id}>{label}</Label>
      <StyledInput
        id={id}
        className={className}
        type={type}
        placeholder={placeHolder}
        value={value}
        onChange={onChange}
        spellCheck={false}
        validation={validation}
        maxLength={maxLength}
        required={required}
      />
      {!validation && value !== '' ? (
        <ValidationDescription>{descriptionMessage}</ValidationDescription>
      ) : null}
    </Container>
  );
}
