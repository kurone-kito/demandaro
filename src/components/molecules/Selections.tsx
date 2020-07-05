import React from 'react';
import NoSelection from '~/components/atoms/NoSelection';
import Selection, { ItemProps } from '~/components/atoms/Selection';
import { SelectionItem } from '~/logic/entities/selection';

export interface Props extends ItemProps {
  selections: readonly SelectionItem[];
}

export const Component: React.FC<Props> = ({
  name,
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
          name={name}
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
