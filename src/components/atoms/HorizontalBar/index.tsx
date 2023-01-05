import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
`;

const HorizontalBarStyle = styled.hr`
  border: none;
`;

export const HorizontalBar = () => {
  return (
    <Container data-testid="horizon-container">
      <HorizontalBarStyle />
    </Container>
  );
};
