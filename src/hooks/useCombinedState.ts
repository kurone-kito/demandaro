import { createContainer } from 'unstated-next';
import useAnswers, { Results as AnswersResults } from './useAnswers';
import useResources, { Resources } from './useResources';
import useUsecase, { Results as UsecaseResults } from './useUsecase';
import useVisibleResult, {
  Results as VisibleResultResults,
} from './useVisibleResult';
import useWindow from './useWindow';

type ResultsBase = Omit<AnswersResults, 'resetAnswer'> &
  UsecaseResults &
  VisibleResultResults;

export interface Results extends ResultsBase {
  resources?: Resources;
}

const useCombinedState = (): Results => {
  const { resetAnswer, ...answerResults } = useAnswers();
  return {
    resources: useResources(),
    ...answerResults,
    ...useUsecase(useWindow()?.location),
    ...useVisibleResult({ onHided: resetAnswer }),
  };
};

export const CombinedState = createContainer(useCombinedState);

export default useCombinedState;
