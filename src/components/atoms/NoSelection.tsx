import React from 'react';

/** Props for the `NoSelection` component. */
export interface Props {
  /** Do not use this property. */
  children?: never;
}

/** The component to display when answers list for the question were not found. */
export const Component: React.FC<Props> = () => (
  <li>There are not any answers to this question.</li>
);
Component.displayName = 'NoSelection';

export default Component;
