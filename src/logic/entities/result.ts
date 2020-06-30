export interface Result {
  body: readonly string[] | string;
  score: number;
}

export const emptyResult = Object.freeze<Result>({
  body: [],
  score: Number.NEGATIVE_INFINITY,
});

export const complete = (value?: Partial<Result>): Result => ({
  body: value?.body ?? emptyResult.body,
  score: value?.score ?? emptyResult.score,
});

export const createResultReducer = (score: number) => (
  accumulator: Result,
  currentValue?: Partial<Result>
) => {
  const { body, score: curScore } = complete(currentValue);
  return score >= curScore && curScore >= accumulator.score
    ? { body, score: curScore }
    : accumulator;
};

export const createGetResult = (source?: readonly Partial<Result>[]) => (
  score: number
) =>
  source?.length
    ? source.reduce(createResultReducer(score), emptyResult).body
    : [];
