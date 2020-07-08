import React from 'react';

/** Props for the `QuestionFrame` component. */
export interface Props {
  /** A sentence for the question. */
  sentence: string;
}

/** The button component. */
export const Component: React.FC<Props> = ({ sentence: body, children }) => (
  <li>
    <p>{body}</p>
    {children}
  </li>
);
Component.displayName = 'QuestionFrame';

export default Component;
