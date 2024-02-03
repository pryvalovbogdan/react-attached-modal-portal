import React, { Ref, useCallback, useEffect, useRef, useState } from 'react';

import { useOutsideClick } from '../hooks/useOutsideClick';
import AttachedWrapper from './AttachedWrapper';
import Portal from './Portal';

import styles from '../styles/attached-modal.module.css';
import { useAttachedModalContext } from '../hooks/useAttachedModalContext';

export type Props = {
  children?: React.ReactNode | React.ReactNode[];
  Header?: React.ReactElement;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  withScroll?: boolean;
  Footer?: React.ReactElement;
  wrapperStyles?: React.CSSProperties;
  bodyStyles?: React.CSSProperties;
  buttonRect?: DOMRect | undefined;
  OpenModalBtn?: React.ReactElement;
};

const breakpoints = {
  mobile: 576,
};

const AttachedModal = ({
  children,
  Footer,
  Header,
  OpenModalBtn,
  isOpen,
  setIsOpen,
  withScroll,
  wrapperStyles,
  bodyStyles,
  buttonRect,
  ...props
}: Props) => {
  const [scrollPosition, setScrollPosition] = useState<number>(0);
  const [isMobileWidth, setIsMobileWidth] = useState<boolean>(window.innerWidth <= breakpoints.mobile);
  const [modalHeight, setModalHeight] = useState(0);

  const modalRef = useRef<HTMLDivElement | null>(null);
  const elementRef = useRef<HTMLDivElement | null>(null);
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const ref: Ref<HTMLDivElement> = useCallback(
    (node: HTMLDivElement | null) => {
      if (!node) {
        return;
      }

      modalRef.current = node;

      if (node?.clientHeight) {
        setModalHeight(node.clientHeight);
      }
    },
    [children, isOpen],
  );

  const { setIsMobile, setCanModalFitBelowButton } = useAttachedModalContext();

  const bottomHeight = window.innerHeight - (buttonRect?.bottom || 0);
  const canModalFitBelowButton = bottomHeight >= modalHeight;

  const onBodyScrollHandle = (e: React.UIEvent<HTMLDivElement>) => {
    if (!withScroll) {
      return;
    }

    const scrollPosition = (e.target as HTMLElement).scrollTop;

    setScrollPosition(scrollPosition);
  };

  const onWindowResizeHandle = () => {
    setIsMobileWidth(window.innerWidth <= breakpoints.mobile);
  };

  const onCloseHandle = (e: MouseEvent | Event) => {
    e.stopPropagation();
    setIsOpen(false);
  };

  useEffect(() => {
    if (!withScroll) {
      return;
    }

    if (elementRef.current) {
      elementRef.current.scrollTop = scrollPosition;
    }
  }, [scrollPosition, withScroll, elementRef.current]);

  useEffect(() => {
    window.addEventListener('resize', onWindowResizeHandle);

    return () => {
      window.removeEventListener('resize', onWindowResizeHandle);
      setScrollPosition(elementRef.current?.scrollTop || 0);
    };
  }, []);

  useEffect(() => {
    setCanModalFitBelowButton && setCanModalFitBelowButton(canModalFitBelowButton);
  }, [canModalFitBelowButton]);

  useEffect(() => {
    setIsMobile && setIsMobile(isMobileWidth);
  }, [isMobileWidth]);

  const Wrapper = isMobileWidth ? Portal : AttachedWrapper;

  useOutsideClick([modalRef, wrapperRef], onCloseHandle, isOpen);

  return (
    <div {...props} className={styles['modal-container']}>
      {OpenModalBtn && React.isValidElement(OpenModalBtn) && React.cloneElement(OpenModalBtn)}
      {isOpen && (
        <Wrapper
          ref={wrapperRef}
          wrapperStyles={wrapperStyles}
          canFitBelowButton={canModalFitBelowButton}
          buttonRect={buttonRect}
        >
          <div
            ref={ref}
            className={styles['modal-container__wrapper']}
            style={{
              position: canModalFitBelowButton && !isMobileWidth ? 'inherit' : 'absolute',
              bottom: canModalFitBelowButton && !isMobileWidth ? 'auto' : 0,
              borderRadius: isMobileWidth ? '16px 16px 0px 0px' : 8,
              ...wrapperStyles,
            }}
          >
            {Header && React.isValidElement(Header) && React.cloneElement(Header)}
            <div
              ref={elementRef}
              className={styles['modal-container__body']}
              onScroll={onBodyScrollHandle}
              style={{
                ...(withScroll && {
                  maxHeight: isMobileWidth ? 'calc(100vh - 16px - 250px)' : '40vh',
                  minHeight: 200,
                  overflowY: 'auto',
                  scrollbarWidth: 'thin',
                }),
                ...bodyStyles,
              }}
            >
              {children}
            </div>
            {Footer && React.isValidElement(Footer) && React.cloneElement(Footer)}
          </div>
        </Wrapper>
      )}
    </div>
  );
};

export default AttachedModal;
