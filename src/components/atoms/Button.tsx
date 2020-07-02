import React from 'react';

export interface Props {
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export const Component: React.FC<Props> = ({ children, disabled, onClick }) => (
  <button disabled={disabled} onClick={onClick} type="button">
    {children}
  </button>
);
Component.displayName = 'Button';

export default Component;
