import noop from 'lodash.noop';
import React from 'react';
import Question from '~/components/molecules/Question';
import { UsecaseAndAnswer } from '~/hooks/useUsecaseAndAnswer';
import { CombinedQuestion } from '~/logic/entities/question';
import { SelectionItem } from '~/logic/entities/selection';

export interface OnChangeProps extends SelectionItem {
  index: number;
}

export interface DOMProps {
  /** Do not use this property. */
  children?: never;
  onChangeFactory?: (index: number) => (selected: SelectionItem) => void;
  questions: readonly CombinedQuestion[];
  readOnly?: boolean;
}

export const DOM: React.FC<DOMProps> = ({
  onChangeFactory,
  questions,
  readOnly,
}) => (
  <section>
    <ol>
      {questions.map(({ body, selections }, index) => (
        <Question
          body={body}
          key={body}
          onChange={(onChangeFactory ?? (() => noop))(index)}
          readOnly={readOnly}
          selections={selections}
        />
      ))}
    </ol>
  </section>
);
DOM.displayName = 'QuestionsDOM';

export const Container: React.FC = () => {
  const { questions, result, updateAnswer } = UsecaseAndAnswer.useContainer();
  const onChangeFactory = (index: number) =>
    React.useMemo(
      () => ({ score }: SelectionItem) => updateAnswer(index, score),
      []
    );
  return (
    (questions && (
      <DOM
        onChangeFactory={onChangeFactory}
        questions={questions}
        readOnly={result}
      />
    )) ??
    null
  );
};
Container.displayName = 'Questions';

export default Container;
