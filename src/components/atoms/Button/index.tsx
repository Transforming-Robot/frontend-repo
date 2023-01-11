import React from 'react';
import styled from 'styled-components';

interface Props {
  className?: string;
  label: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Container = styled.div`
  width: 100%;
`;

const StyledButton = styled.button`
  width: 100%;

  padding: 14px 16px;

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

export const Button = ({ className, label, onClick }: Props) => (
  <Container>
    <StyledButton className={className} onClick={onClick}>
      {label}
    </StyledButton>
  </Container>
);
