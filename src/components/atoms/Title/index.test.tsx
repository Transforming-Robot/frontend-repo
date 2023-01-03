import React from 'react';
import { render, screen } from '@testing-library/react';
import { Title } from '.';

describe('Title 컴포넌트 테스트', () => {
  it('Title 렌더링 테스트', () => {
    render(<Title title={'ChatterBox'} />);

    const TitleContainer = screen.getByTestId('title-container');

    expect(TitleContainer).toBeInTheDocument();
  });
});
