import React from 'react';

export interface Props {
  body: string;
}

export const Component: React.FC<Props> = ({ body, children }) => (
  <li>
    <p>{body}</p>
    {children}
  </li>
);
Component.displayName = 'QuestionFrame';

export default Component;
