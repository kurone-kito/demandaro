import React from 'react';

export interface Props {
  children?: never;
}

export const Component: React.FC<Props> = () => (
  <li>この問いに対応する回答一覧がありません。</li>
);
Component.displayName = 'NoSelection';

export default Component;
