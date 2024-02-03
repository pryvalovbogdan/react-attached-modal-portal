import { render } from '@testing-library/react';
import React from 'react';

import { AttachedModalContextProvider, useAttachedModalContext } from '../src';
describe('AttachedModalContextProvider', () => {
  it('renders without crashing', () => {
    const { baseElement } = render(
      <AttachedModalContextProvider>
        <div>Test Child</div>
      </AttachedModalContextProvider>,
    );

    expect(baseElement).toMatchSnapshot();
  });

  it('Should contain Desktop text based on property', () => {
    const Component = () => {
      const { isMobile } = useAttachedModalContext();

      return isMobile ? 'Mobile' : 'Desktop';
    };

    const { baseElement, getAllByText } = render(
      <AttachedModalContextProvider>
        <Component />
      </AttachedModalContextProvider>,
    );

    expect(getAllByText('Desktop')).toHaveLength(1);
  });
});
