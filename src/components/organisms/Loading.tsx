import React from 'react';
import { UsecaseAndAnswer } from '~/hooks/useUsecaseAndAnswer';

export interface DOMProps {
  /** Do not use this property. */
  children?: never;
  open?: boolean;
}

export const DOM: React.FC<DOMProps> = ({ open }) => (
  <dialog open={open}>{open && <p>問診データを読み込み中。。</p>}</dialog>
);
DOM.displayName = 'LoadingDOM';

const Container: React.FC = () => (
  <DOM open={!UsecaseAndAnswer.useContainer().loaded} />
);
Container.displayName = 'Loading';

export default Container;
