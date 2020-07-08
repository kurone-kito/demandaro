import { Karte, createUseCase, UseCase } from '~/logic/usecase';
import yaml from 'js-yaml';
import { firstFullfiledValueAsync } from './promise';

type MaybeKarte = Readonly<Karte> | undefined;

export const loadYAMLAsync = async (url: string) => {
  if (typeof fetch === 'undefined') {
    throw new Error('Cannot call in SSR.');
  }
  return yaml.safeLoad(await (await fetch(url)).text());
};

export const getUsecaseAsync = async (
  urls: string[]
): Promise<[string | undefined, Readonly<UseCase>]> => {
  const tasks = urls.map(
    async (url) => [url, await loadYAMLAsync(url)] as [string, MaybeKarte]
  );
  const [url, karte] = (await firstFullfiledValueAsync(tasks)) ?? [];
  return [url, createUseCase(karte)];
};
