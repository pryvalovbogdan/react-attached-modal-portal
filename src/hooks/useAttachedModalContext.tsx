import React, { createContext, useContext, Context, useRef, useEffect } from 'react';

interface IAttachedModalContext {
  isMobile: boolean;
  canModalFitBelowButton: boolean;
  setCanModalFitBelowButton?: React.Dispatch<React.SetStateAction<boolean>>;
  setIsMobile?: React.Dispatch<React.SetStateAction<boolean>>;
}

const defaultContext: IAttachedModalContext = {
  isMobile: false,
  canModalFitBelowButton: true,
};
export const AttachedModalContext: Context<IAttachedModalContext> = createContext(defaultContext);

export const useAttachedModalContext = (): IAttachedModalContext => {
  const context = useContext(AttachedModalContext);
  const isFirstRender = useRef(true);

  /** Warn for users not to forget to add provider for context **/
  useEffect(() => {
    if (!isFirstRender.current) {
      if (!context.setIsMobile || !context.setCanModalFitBelowButton) {
        console.warn(
          'You need to add AttachedModalContextProvider above current component to be able to use properties from useAttachedModalContext',
        );
      }
    }

    isFirstRender.current = false;
  }, [context]);

  return context;
};
