import React, { useState } from 'react';

import { AttachedModalContext } from '../hooks/useAttachedModalContext';

export const AttachedModalContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [canModalFitBelowButton, setCanModalFitBelowButton] = useState<boolean>(true);

  return (
    <AttachedModalContext.Provider
      value={{
        isMobile,
        canModalFitBelowButton,
        setCanModalFitBelowButton,
        setIsMobile,
      }}
    >
      {children}
    </AttachedModalContext.Provider>
  );
};
