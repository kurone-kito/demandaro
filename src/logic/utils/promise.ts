export const isFullfiled = <T>(
  result: PromiseSettledResult<T>
): result is PromiseFulfilledResult<T> => 'value' in result;

export const firstFullfiledValueAsync = async <T>(values: Iterable<T>) =>
  (await Promise.allSettled(values)).find(isFullfiled)?.value;
