import React from 'react';
import { render, screen } from '@testing-library/react';

import { LoadingDots } from '.';

describe('LoadingDots 컴포넌트 테스트', () => {
  it('로딩 점들 렌더링 테스트', () => {
    render(<LoadingDots />);

    const LoadingDotContainer = screen.getByTestId('loading-dots-container');

    expect(LoadingDotContainer).toBeInTheDocument();
    expect(LoadingDotContainer.children.length).toBe(3);
  });
});
