import React from 'react';
import QuestionFrame from '~/components/atoms/QuestionFrame';
import { ItemProps } from '~/components/atoms/Selection';
import Selections from '~/components/molecules/Selections';
import { CombinedQuestion } from '~/logic/entities/question';

export type Props = CombinedQuestion & Omit<ItemProps, 'name'>;

export const Component: React.FC<Props> = ({
  body,
  onChange,
  readOnly,
  selections,
}) => (
  <QuestionFrame body={body}>
    <Selections
      name={body}
      onChange={onChange}
      readOnly={readOnly}
      selections={selections}
    />
  </QuestionFrame>
);
Component.displayName = 'Question';

export default Component;
