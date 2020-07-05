import queryString from 'query-string';
import { Karte, createUseCase, UseCase } from '~/logic/usecase';
import yaml from 'js-yaml';

export const isFullfiled = <T>(
  result: PromiseSettledResult<T>
): result is PromiseFulfilledResult<T> => 'value' in result;

export const getKarteURLs = ({
  href,
  search,
}: Pick<Location, 'href' | 'search'>) => {
  const baseUrl = href.split('?').shift();
  const query = queryString.parse(search);
  return Object.keys(query).map((name) => `${baseUrl}karte/${name}.yml`);
};

export const getUsecaseAsync = async (
  urls: string[]
): Promise<[string | undefined, Readonly<UseCase>]> => {
  const tasks = urls.map<Promise<[string, string]>>(async (url) => [
    url,
    await (await fetch(url)).text(),
  ]);
  const promises = await Promise.allSettled(tasks);
  const [url, body] = promises.find(isFullfiled)?.value ?? [];
  const obj = body ? yaml.safeLoad(body) : undefined;
  return [url, createUseCase(obj as Readonly<Karte> | undefined)];
};
