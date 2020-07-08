import noop from 'lodash.noop';
import React from 'react';
import type { SelectionItem } from '~/logic/entities/selection';

/** Props for the `SelectionDOM` component. */
export interface DOMProps extends Props {
  /** The object reference for the input field. */
  inputRef?: React.RefObject<HTMLInputElement>;
}

/** Props for the `Selection` component. */
export type Props = SelectionItem & SelectionItemPropsBase;

/** Base props for related selection components */
export interface SelectionItemPropsBase {
  /** Do not use this property. */
  children?: never;
  /** A sentence for the question. */
  sentence: string;
  /** Callback to call when clicked. */
  onChange?: (selected: SelectionItem) => void;
  /** Whether to read-only. */
  readOnly?: boolean;
}

/** The DOM structure for the radio button. */
export const DOM: React.FC<DOMProps> = ({
  body,
  inputRef,
  sentence: name,
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

/** The custom hook for resetting selected. */
const useInputRefForReset = (readOnly?: boolean) => {
  const inputRef = React.useRef<HTMLInputElement>(null);
  React.useEffect(() => {
    if (!readOnly && inputRef.current) {
      inputRef.current.checked = false;
    }
  }, [readOnly]);
  return inputRef;
};

/** The radio button which is integrated a hook. */
const Container: React.FC<Props> = ({
  body,
  sentence: name,
  onChange,
  readOnly,
  score,
}) => (
  <DOM
    body={body}
    inputRef={useInputRefForReset(readOnly)}
    sentence={name}
    onChange={onChange}
    readOnly={readOnly}
    score={score}
  />
);
Container.displayName = 'Selection';

export default Container;
