import React from 'react';
import NoSelection from '~/components/atoms/NoSelection';
import Selection, {
  SelectionItemPropsBase,
} from '~/components/atoms/Selection';
import type { SelectionItem } from '~/logic/entities/selection';

/** Props for the `Selections` component. */
export interface Props extends SelectionItemPropsBase {
  /** The selections information. */
  selections: readonly SelectionItem[];
}

/** A Component for expressing a list of selection. */
export const Component: React.FC<Props> = ({
  sentence,
  onChange,
  readOnly,
  selections,
}) => (
  <ul>
    {selections.length ? (
      selections.map(({ body, score }) => (
        <Selection
          body={body}
          key={body}
          sentence={sentence}
          onChange={onChange}
          readOnly={readOnly}
          score={score}
        />
      ))
    ) : (
      <NoSelection />
    )}
  </ul>
);
Component.displayName = 'Selections';

export default Component;
