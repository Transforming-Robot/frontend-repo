import React from 'react';
import { render } from '@testing-library/react';

import { PageLayout } from '.';
import { LoadingDots } from '@/components/atoms';

describe('PageLayout 컴포넌트 테스트', () => {
  it('Loading Dots 컴포넌트가 children으로 렌더링되는지 테스트', () => {
    const components = render(
      <PageLayout>
        <LoadingDots />
      </PageLayout>,
    );

    const PageLayoutContainer = components.getByTestId('page-layout-container');
    expect(PageLayoutContainer).toBeInTheDocument();

    const children = components.getByTestId('loading-dots-container');
    expect(children).toBeInTheDocument();
  });
});
