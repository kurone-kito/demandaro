import React from 'react';
import useUpdateArrayState from './useUpdateArrayState';

export interface Results {
  answers: number[];
  resetAnswer: () => void;
  updateAnswer: (index: number, value: number) => void;
}

export default (): Results => {
  const [answers, setAnswers] = React.useState<number[]>([]);
  return {
    answers,
    resetAnswer: () => setAnswers([]),
    updateAnswer: useUpdateArrayState(setAnswers),
  };
};
