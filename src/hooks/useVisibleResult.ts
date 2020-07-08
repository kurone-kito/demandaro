import noop from 'lodash.noop';
import React from 'react';

export interface Options {
  onHided?: () => void;
  onVisibled?: () => void;
}

export interface Results {
  result: boolean;
  toggleResult: () => void;
}

export default ({ onHided, onVisibled }: Options): Results => {
  const [result, setResult] = React.useState<boolean>(false);
  const setter: React.SetStateAction<boolean> = (r) => {
    ((r ? onVisibled : onHided) ?? noop)();
    return !r;
  };
  return { result, toggleResult: () => setResult(setter) };
};
