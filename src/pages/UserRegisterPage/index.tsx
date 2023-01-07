import React from 'react';
import styled from 'styled-components';

import { Title } from '@/components/atoms';
import { RegisterForm } from '@/components/blocks';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;

  width: fit-content;
  height: fit-content;
`;

export function UserRegisterPage() {
  return (
    <Container>
      <Title title="ChatterBox" />
      <RegisterForm />
    </Container>
  );
}
