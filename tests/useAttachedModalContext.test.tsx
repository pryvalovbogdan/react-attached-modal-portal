import { render } from '@testing-library/react';
import React from 'react';

import { AttachedModalContextProvider, useAttachedModalContext } from '../src';

jest.spyOn(global.console, 'warn').mockImplementation();

describe('useAttachedModalContext', () => {
  it('returns the default context values if used outside AttachedModalContextProvider', () => {
    const TestComponent = () => {
      const context = useAttachedModalContext();
      return (
        <>
          <div id='isMobile'>{context.isMobile.toString()}</div>
          <div id='canModalFitBelowButton'>{context.canModalFitBelowButton.toString()}</div>
        </>
      );
    };

    const { baseElement } = render(
      <AttachedModalContextProvider>
        <TestComponent />
      </AttachedModalContextProvider>,
    );

    expect(baseElement.querySelector('#isMobile')?.textContent).toBe('false');
    expect(baseElement.querySelector('#canModalFitBelowButton')?.textContent).toBe('true');
  });

  it('should not call warns if it first render used without AttachedModalContextProvider', () => {
    const originalWarn = console.warn;
    console.warn = jest.fn();
    const Component = () => {
      useAttachedModalContext();

      return <div>TEst</div>;
    };

    render(<Component />);

    expect(console.warn).not.toHaveBeenCalledWith(
      'You need to add AttachedModalContextProvider above the current component to be able to use properties from useAttachedModalContext',
    );

    console.warn = originalWarn;
  });
});
