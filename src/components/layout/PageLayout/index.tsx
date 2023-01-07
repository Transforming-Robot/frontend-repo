import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background: #ffffff;
`;

interface Props {
  children?: JSX.Element;
}

export function PageLayout({ children }: Props) {
  return <Container data-testid="page-layout-container">{children}</Container>;
}
