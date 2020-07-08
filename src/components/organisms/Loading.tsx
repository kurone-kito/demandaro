import React from 'react';
import { CombinedState } from '~/hooks/useCombinedState';

/** Props for the `LoadingDOM` component. */
export interface DOMProps {
  /** Do not use this property. */
  children?: never;
  open?: boolean;
}

export const DOM: React.FC<DOMProps> = ({ open }) => (
  <dialog open={open}>{open && <p>質問データを読み込み中。。</p>}</dialog>
);
DOM.displayName = 'LoadingDOM';

export const useLoading = () => !CombinedState.useContainer().loaded;

const Container: React.FC = () => <DOM open={useLoading()} />;
Container.displayName = 'Loading';

export default Container;
