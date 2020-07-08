import React from 'react';

/** Props for the `NoQuestions` component. */
export interface Props {
  /** Do not use this property. */
  children?: never;
}

/** The component to display when questions data were not found. */
export const Component: React.FC<Props> = () => (
  <p>Specify the question data in the URL query.</p>
);
Component.displayName = 'NoQuestions';

export default Component;
