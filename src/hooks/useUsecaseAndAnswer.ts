import React from 'react';
import { createContainer } from 'unstated-next';
import { getKarteURLs, getUsecaseAsync } from '~/logic/loader';
import { UseCase } from '~/logic/usecase';
import useUpdateArrayState from './useUpdateArrayState';
import useWindow from './useWindow';

export interface UsecaseAndAnserType extends Partial<UseCase> {
  answers: number[];
  fail: boolean;
  loaded: boolean;
  result: boolean;
  toggleResult: () => void;
  updateAnswer: (index: number, value: number) => void;
}

const useUsecaseAndAnswer = (): UsecaseAndAnserType => {
  const [usecase, setUsecase] = React.useState<Readonly<UseCase> | undefined>();
  const [answers, setAnswers] = React.useState<number[]>([]);
  const [result, setResult] = React.useState<boolean>(false);
  const [source, setSource] = React.useState<string | undefined>();
  const w = useWindow();
  const sources = w ? getKarteURLs(w.location) : [];
  React.useEffect(() => {
    getUsecaseAsync(sources).then(([url, receivedUsecase]) => {
      setSource(url);
      setUsecase(receivedUsecase);
    });
  }, [sources.join(), sources.length]);
  const fail = !sources.length;
  return {
    answers,
    fail,
    loaded: !fail && !!source,
    result,
    toggleResult: () =>
      setResult((f) => {
        if (f) {
          setAnswers([]);
        }
        return !f;
      }),
    updateAnswer: useUpdateArrayState(setAnswers),
    ...usecase,
  };
};

export const UsecaseAndAnswer = createContainer(useUsecaseAndAnswer);

export default useUsecaseAndAnswer;
