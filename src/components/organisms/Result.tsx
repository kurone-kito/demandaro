import React from 'react';
import ToggleResultButton from '~/components/organisms/ToggleResultButton';
import { UsecaseAndAnswer } from '~/hooks/useUsecaseAndAnswer';

export const DOM: React.FC = ({ children }) => (
  <summary>
    <h2>結果</h2>
    {!!children && <p>{children}</p>}
    <div>
      <ToggleResultButton condition={(result) => !result}>
        もう一度診断する！
      </ToggleResultButton>
    </div>
  </summary>
);
DOM.displayName = 'ResultDOM';

const Container: React.FC = () => {
  const { answers, getResult } = UsecaseAndAnswer.useContainer();
  return <DOM>{getResult?.(answers)}</DOM>;
};
Container.displayName = 'Result';

export default Container;
