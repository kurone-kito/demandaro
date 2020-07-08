import React from 'react';

/** Props for the `Button` component. */
export interface Props {
  /** Whether to disable. */
  disabled?: boolean;
  /** Callback to call when clicked. */
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

/** The button component. */
export const Component: React.FC<Props> = ({ children, disabled, onClick }) => (
  <button disabled={disabled} onClick={onClick} type="button">
    {children}
  </button>
);
Component.displayName = 'Button';

export default Component;
