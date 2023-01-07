import React from 'react';
import styled from 'styled-components';

type TitleProps = {
  className?: string;
  title: string;
};

const Container = styled.div`
  display: flex;
`;
const TitleStyle = styled.h1`
  color: 1A1E27;
  font-family: 'Inter', sans-serif;
  font-size: 50px;
`;

export const Title = ({ className, title }: TitleProps) => {
  return (
    <Container data-testid="title-container">
      <TitleStyle className={className}>{title}</TitleStyle>
    </Container>
  );
};
