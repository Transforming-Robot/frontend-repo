import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  min-height: 100vh;
`;

interface Props {
  children?: JSX.Element;
}

export function PageLayout({ children }: Props) {
  return <Container data-testid="page-layout-container">{children}</Container>;
}
