import { RefObject, useEffect } from 'react';

export const useOutsideClick = (
  ignoredRefs: Array<RefObject<Element>>,
  callBack: (event: MouseEvent | Event) => void,
  isOpenPanel: boolean,
) => {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ignoredRefs.every(({ current }) => current && !current.contains(event.target as Node)) && isOpenPanel) {
        callBack(event);
      }
    };

    const handleTouchOutside = (event: Event) => {
      // Added document.body for Portal case
      if (
        ignoredRefs.every(
          ({ current }) => current && (!current.contains(event.target as Node) || current === document.body),
        ) &&
        isOpenPanel
      ) {
        callBack(event);
      }
    };

    document.addEventListener('click', handleClickOutside, true);
    document.addEventListener('touchstart', handleTouchOutside, true);

    return () => {
      document.removeEventListener('click', handleClickOutside, true);
      document.removeEventListener('touchstart', handleTouchOutside, true);
    };
  }, [isOpenPanel]);
};
