import noop from 'lodash.noop';
import React from 'react';
import Question from '~/components/molecules/Question';
import { CombinedState } from '~/hooks/useCombinedState';
import type { CombinedQuestion } from '~/logic/entities/question';
import type { SelectionItem } from '~/logic/entities/selection';

/** Props for the `QuestionsDOM` component. */
export interface DOMProps {
  /** Do not use this property. */
  children?: never;
  /** The factory for a callback function to call when clicked. */
  onChangeFactory?: (index: number) => (selected: SelectionItem) => void;
  /** The questions information. */
  questions: readonly CombinedQuestion[];
  /** Whether to read-only. */
  readOnly?: boolean;
}

export interface OnChangeProps extends SelectionItem {
  index: number;
}

export interface UseSideEffectResult {
  onChangeFactory: (index: number) => (item: SelectionItem) => void;
  questions?: readonly CombinedQuestion[];
  result: boolean;
}

/** The DOM structure for expressing a list of question. */
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

export const useSideEffect = (): UseSideEffectResult => {
  const { questions, result, updateAnswer } = CombinedState.useContainer();
  return {
    onChangeFactory: (index) =>
      React.useMemo(() => ({ score }) => updateAnswer(index, score), []),
    questions,
    result,
  };
};

/** The radio button which is integrated a hook. */
export const Container: React.FC = () => {
  const { onChangeFactory, questions, result } = useSideEffect();
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
