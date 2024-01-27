import React from 'react';

import '@testing-library/jest-dom';
import { fireEvent, getByText, render, screen } from '@testing-library/react';

import { AttachedModal } from '../src/index';

describe('AttachedModal', () => {
  const label =
    '        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\n' +
    '        standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make\n' +
    '        a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,\n' +
    '        remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing\n' +
    '        Lorem Ipsum passages, and more recently with desktop publishi';
  const headerText = 'Header';
  const footerText = 'Footer';

  test('should not render label when modal closed', () => {
    render(
      <AttachedModal isOpen={false} setIsOpen={jest.fn()}>
        {label}
      </AttachedModal>,
    );

    expect(screen.queryByText(label)).not.toBeInTheDocument();
  });

  test('should call setIsOpen when handleClose is called', () => {
    const setIsOpenMock = jest.fn();
    render(
      <AttachedModal isOpen setIsOpen={setIsOpenMock} Header={<button onClick={setIsOpenMock}>Close Button</button>}>
        {label}
      </AttachedModal>,
    );

    fireEvent.click(screen.getByText('Close Button'));
    expect(setIsOpenMock).toHaveBeenCalled();
  });

  test('should render and display Header component when provided', () => {
    render(<AttachedModal isOpen setIsOpen={jest.fn()} Header={<div>{headerText}</div>} />);

    expect(screen.getByText(headerText)).toBeVisible();
  });

  test('should render and display Footer component when provided', () => {
    render(<AttachedModal isOpen setIsOpen={jest.fn()} Footer={<div>{footerText}</div>} />);

    expect(screen.getByText(footerText)).toBeVisible();
  });
});
