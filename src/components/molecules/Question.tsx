import React from 'react';
import QuestionFrame from '~/components/atoms/QuestionFrame';
import type { SelectionItemPropsBase } from '~/components/atoms/Selection';
import Selections from '~/components/molecules/Selections';
import type { CombinedQuestion } from '~/logic/entities/question';

/** Props for the `Question` component. */
export type Props = CombinedQuestion & Omit<SelectionItemPropsBase, 'sentence'>;

/** A Question component. */
export const Component: React.FC<Props> = ({
  body,
  onChange,
  readOnly,
  selections,
}) => (
  <QuestionFrame sentence={body}>
    <Selections
      sentence={body}
      onChange={onChange}
      readOnly={readOnly}
      selections={selections}
    />
  </QuestionFrame>
);
Component.displayName = 'Question';

export default Component;
