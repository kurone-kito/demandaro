import noop from 'lodash.noop';
import React from 'react';
import { SelectionItem } from '~/logic/entities/selection';

export interface ItemProps {
  /** Do not use this property. */
  children?: never;
  name: string;
  onChange?: (selected: SelectionItem) => void;
  readOnly?: boolean;
}

type Props = SelectionItem & ItemProps;

export interface DOMProps extends Props {
  inputRef?: React.RefObject<HTMLInputElement>;
}

export const DOM: React.FC<DOMProps> = ({
  body,
  inputRef,
  name,
  onChange,
  readOnly,
  score,
}) => (
  <li>
    <label>
      <input
        disabled={readOnly}
        name={name}
        onChange={React.useCallback(
          () => (onChange ?? noop)({ body, score }),
          []
        )}
        readOnly={readOnly}
        ref={inputRef}
        tabIndex={0}
        type="radio"
        value={score}
      />
      {body}
    </label>
  </li>
);
DOM.displayName = 'SelectionDOM';

const useInputRefForReset = (readOnly?: boolean) => {
  const inputRef = React.useRef<HTMLInputElement>(null);
  React.useEffect(() => {
    if (!readOnly && inputRef.current) {
      inputRef.current.checked = false;
    }
  }, [readOnly]);
  return inputRef;
};

const Container: React.FC<Props> = ({
  body,
  name,
  onChange,
  readOnly,
  score,
}) => (
  <DOM
    body={body}
    inputRef={useInputRefForReset(readOnly)}
    name={name}
    onChange={onChange}
    readOnly={readOnly}
    score={score}
  />
);
Container.displayName = 'Selection';

export default Container;
