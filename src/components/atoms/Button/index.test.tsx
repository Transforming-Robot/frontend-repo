import React from 'react';
import { vi } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';

import { Button } from '.';

describe('Button 컴포넌트 테스트', () => {
  it('버튼 렌더링 테스트', () => {
    render(<Button label="테스트 버튼" />);

    const DefaultButton = screen.getByText('테스트 버튼');

    expect(DefaultButton).toBeInTheDocument();
  });

  it('테스트 버튼을 누르면 onClick 이벤트 핸들러가 몇 번 수행됐는지 확인하는 테스트F', () => {
    const onClickHandler = vi.fn();
    render(
      <>
        <Button label="테스트 버튼" onClick={onClickHandler} />
      </>,
    );

    expect(onClickHandler).toHaveBeenCalledTimes(0);

    const defaultButton = screen.getByText('테스트 버튼');

    fireEvent.click(defaultButton);
    expect(onClickHandler).toHaveBeenCalledTimes(1);
    fireEvent.click(defaultButton);
    expect(onClickHandler).toHaveBeenCalledTimes(2);
  });
});
