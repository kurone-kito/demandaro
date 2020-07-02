import React from 'react';
import Button, { Props as ButtonProps } from '~/components/atoms/Button';
import { UsecaseAndAnswer } from '~/hooks/useUsecaseAndAnswer';

export interface Props extends ButtonProps {
  condition: (result: boolean) => boolean;
}

const Container: React.FC<Props> = ({ children, condition }) => {
  const { result, toggleResult } = UsecaseAndAnswer.useContainer();
  return (
    <Button disabled={condition(result)} onClick={toggleResult}>
      {children}
    </Button>
  );
};
Container.displayName = 'ToggleResult';

export default Container;
