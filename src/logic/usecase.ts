import {
  getCombinedQuestions,
  CombinedQuestion,
  QuestionsSource,
} from './entities/question';
import { createGetResult, Result } from './entities/result';
import { createGetTotalScore } from './entities/selection';

export interface Karte extends QuestionsSource {
  header?: string;
  results?: readonly Partial<Result>[];
}

export interface UseCase {
  header: string;
  questions: readonly CombinedQuestion[];
  getResult: (answers: readonly number[]) => readonly string[] | string;
}

export const createUseCase = (source?: Readonly<Karte>): Readonly<UseCase> => {
  const questions = getCombinedQuestions(source);
  const getResult = createGetResult(source?.results);
  const getTotalScore = createGetTotalScore(
    questions.map(({ selections: selection }) => selection)
  );
  return {
    header: source?.header ?? '',
    getResult: (answers) => getResult(getTotalScore(answers)),
    questions,
  };
};
