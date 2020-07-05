import React from 'react';

export interface Props {
  children?: never;
}

export const Component: React.FC<Props> = () => (
  <p>問診データを URL クエリで指定してください。</p>
);
Component.displayName = 'NoQuestions';

export default Component;
