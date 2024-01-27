import React, { forwardRef } from 'react';

import styles from '../styles/attached-modal.module.css';

export interface IWrapperDesktop {
  children?: React.ReactNode | React.ReactNode[];
  wrapperStyles?: React.CSSProperties;
  buttonRect?: DOMRect | undefined;
  canFitBelowButton: boolean;
}

const AttachedWrapper = forwardRef<HTMLDivElement, IWrapperDesktop>(
  ({ children, wrapperStyles, buttonRect, canFitBelowButton }, ref) => {
    const buttonHeight = buttonRect?.height || 0;

    return (
      <div
        ref={ref}
        className={styles['attached-modal-wrapper']}
        style={{
          top: !canFitBelowButton ? 'auto' : buttonHeight + 4 + 'px',
          bottom: !canFitBelowButton ? buttonHeight + 4 + 'px' : 'auto',
          ...wrapperStyles,
        }}
      >
        {children}
      </div>
    );
  },
);

AttachedWrapper.displayName = 'AttachedWrapper';

export default AttachedWrapper;
