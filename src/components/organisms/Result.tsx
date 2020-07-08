import React from 'react';
import ToggleResultButton from '~/components/organisms/ToggleResultButton';
import { CombinedState } from '~/hooks/useCombinedState';

export const DOM: React.FC = ({ children }) => (
  <summary>
    <h2>結果</h2>
    {!!children && <p>{children}</p>}
    <div>
      <ToggleResultButton disabledWith={(result) => !result}>
        もう一度診断する！
      </ToggleResultButton>
    </div>
  </summary>
);
DOM.displayName = 'ResultDOM';

export const useResult = () => {
  const { answers, getResult } = CombinedState.useContainer();
  return getResult?.(answers);
};

const Container: React.FC = () => <DOM>{useResult()}</DOM>;
Container.displayName = 'Result';

export default Container;
