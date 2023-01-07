import React from 'react';
import styled from 'styled-components';

interface Props {
  id: string;
  className?: string;
  label: string;
  placeHolder: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Container = styled.div`
  position: relative;
`;

const Label = styled.div`
  position: absolute;
  top: -4px;
  left: 14px;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 12px;

  color: #1a1e27;
  background-color: #ffffff;
`;

const StyledInput = styled.input`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 14px;

  border: 1.8px solid #64768c;
  border-radius: 8px;

  padding: 12px 12px;

  &::placeholder {
    color: #b1b8c0;
  }
`;

export const FormInput = ({
  id,
  className,
  label,
  placeHolder,
  value,
  onChange,
}: Props) => (
  <Container>
    <Label>{label}</Label>
    <StyledInput
      id={id}
      className={className}
      placeholder={placeHolder}
      value={value}
      onChange={onChange}
      spellCheck={false}
    />
  </Container>
);
