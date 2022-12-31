import React from 'react';
import { render, screen } from '@testing-library/react';

import App from './App';

describe('App 컴포넌트 렌더링 테스트', () => {
  it('renders headline', () => {
    render(<App />);

    const element = screen.getByText('Vite + React');
    expect(element).toBeInTheDocument();
    // screen.debug();
  });
});
