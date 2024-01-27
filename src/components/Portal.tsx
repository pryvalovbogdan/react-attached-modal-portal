import React, { forwardRef } from 'react';
import { createPortal } from 'react-dom';

import styles from '../styles/attached-modal.module.css';

export interface IWrapperDesktop {
  children?: React.ReactNode | React.ReactNode[];
  portalStyles?: React.CSSProperties;
}

const Portal = forwardRef<HTMLDivElement, IWrapperDesktop>(({ children, portalStyles }, ref) => {
  return createPortal(
    <div ref={ref} className={styles['attached-modal-portal']} style={portalStyles}>
      {children}
    </div>,
    document.body,
  );
});

Portal.displayName = 'Portal';

export default Portal;
