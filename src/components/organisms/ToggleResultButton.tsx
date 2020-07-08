import React from 'react';
import Button, { Props as ButtonProps } from '~/components/atoms/Button';
import { CombinedState } from '~/hooks/useCombinedState';

/** Props for the `ToggleResultButton` component. */
export interface Props extends ButtonProps {
  /**
   * An expression for deciding whether to disable the button.
   *
   * An argument stores whether to visible the result.
   */
  disabledWith: (result: boolean) => boolean;
}

/** A button to toggle the resulting visibility. */
const Container: React.FC<Props> = ({ children, disabledWith }) => {
  const { result, toggleResult } = CombinedState.useContainer();
  return (
    <Button disabled={disabledWith(result)} onClick={toggleResult}>
      {children}
    </Button>
  );
};
Container.displayName = 'ToggleResultButton';

export default Container;
