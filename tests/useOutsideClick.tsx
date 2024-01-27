import { fireEvent, renderHook } from '@testing-library/react';

import { useOutsideClick } from '../src/hooks/useOutsideClick';

describe('useOutsideClick hook', () => {
  it('should call the callback when a click outside the ignored refs occurs', () => {
    const callback = jest.fn();
    const ref1 = { current: document.createElement('div') };
    const ref2 = { current: document.createElement('div') };
    const ignoredRefs = [ref1, ref2];

    renderHook(() => useOutsideClick(ignoredRefs, callback, true));

    fireEvent.click(document);

    expect(callback).toHaveBeenCalledTimes(1);
  });

  it('should not call the callback when a click inside any of the ignored refs occurs', () => {
    const callback = jest.fn();
    const ref1 = { current: document.createElement('div') };
    const ref2 = { current: document.createElement('div') };
    const ignoredRefs = [ref1, ref2];

    renderHook(() => useOutsideClick(ignoredRefs, callback, true));

    fireEvent.click(ref1.current);

    expect(callback).not.toHaveBeenCalled();
  });

  it('should call the callback when a touch event outside the ignored refs occurs', () => {
    const callback = jest.fn();
    const ref1 = { current: document.createElement('div') };
    const ref2 = { current: document.createElement('div') };
    const ignoredRefs = [ref1, ref2];

    renderHook(() => useOutsideClick(ignoredRefs, callback, true));

    fireEvent.touchStart(document);

    expect(callback).toHaveBeenCalledTimes(1);
  });

  it('should not call the callback when a touch event inside any of the ignored refs occurs', () => {
    const callback = jest.fn();
    const ref1 = { current: document.createElement('div') };
    const ref2 = { current: document.createElement('div') };
    const ignoredRefs = [ref1, ref2];

    renderHook(() => useOutsideClick(ignoredRefs, callback, true));

    fireEvent.touchStart(ref1.current);

    expect(callback).not.toHaveBeenCalled();
  });

  it('should not call the callback when isOpenPanel is false', () => {
    const callback = jest.fn();
    const ref1 = { current: document.createElement('div') };
    const ref2 = { current: document.createElement('div') };
    const ignoredRefs = [ref1, ref2];

    renderHook(() => useOutsideClick(ignoredRefs, callback, false));

    fireEvent.click(document);

    expect(callback).not.toHaveBeenCalled();
  });
});
