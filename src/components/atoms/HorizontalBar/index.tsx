import React from 'react';
import styled from 'styled-components';

const HorizontalBarStyle = styled.hr`
  width: 100%;
`;

export const HorizontalBar = () => {
  return <HorizontalBarStyle data-testid="horizon-container" color="gray" />;
};
