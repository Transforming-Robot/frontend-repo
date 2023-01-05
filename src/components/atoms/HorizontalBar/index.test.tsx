import React from 'react';
import { render, screen } from '@testing-library/react';
import { HorizontalBar } from '.';

describe('HorizontalBar 컴포넌트 테스트', () => {
  it('HorizontalBar 렌더링 테스트', () => {
    render(<HorizontalBar />);

    const HorizontalBarContainer = screen.getByTestId('horizon-container');

    expect(HorizontalBarContainer).toBeInTheDocument();
  });
});
