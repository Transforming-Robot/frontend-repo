import React from 'react';
import styled, { keyframes } from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;

const bounce = keyframes`
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-12px);
    }
    100% {
      transform: translateY(0);
    }
`;

const Dot = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;

  animation: ${bounce} 1s infinite;
`;

const DotLeft = styled(Dot)`
  background: #83b4f9;

  animation-delay: 0.1s;
`;

const DotMid = styled(Dot)`
  background: #4880ee;

  animation-delay: 0.2s;
`;

const DotRight = styled(Dot)`
  background: #1f4ef5;

  animation-delay: 0.3s;
`;

export function LoadingDots() {
  return (
    <Container data-testid="loading-dots-container">
      <DotLeft />
      <DotMid />
      <DotRight />
    </Container>
  );
}
