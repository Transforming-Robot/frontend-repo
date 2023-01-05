import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
`;

const HorizontalBarStyle = styled.hr`
  width: 232px;
  height: 1px;
  background: #d6dadf;
  border: 0;
`;

export const HorizontalBar = () => {
  return (
    <Container data-testid="horizon-container">
      <HorizontalBarStyle></HorizontalBarStyle>
    </Container>
  );
};
