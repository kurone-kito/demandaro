import React from 'react';

export interface Props {
  /** Do not use this property. */
  children?: never;
}

export const Component: React.FC<Props> = () => (
  <p>問診データを URL クエリで指定してください。</p>
);
Component.displayName = 'NoQuestions';

export default Component;
