import React from 'react';
import { getUsecaseAsync } from '~/logic/utils/loader';
import { getKarteURLs, GetKarteURLsOptions } from '~/logic/utils/path';
import type { UseCase } from '~/logic/usecase';

export type Options = GetKarteURLsOptions;

export interface Results extends Partial<UseCase> {
  fail: boolean;
  loaded: boolean;
}

export default (location?: Options): Results => {
  const [usecase, setUsecase] = React.useState<Readonly<UseCase> | undefined>();
  const [finished, setFinished] = React.useState<boolean>(false);
  const sources = location ? getKarteURLs(location) : [];
  React.useEffect(() => {
    getUsecaseAsync(sources).then(([url, receivedUsecase]) => {
      setFinished(!!url);
      setUsecase(receivedUsecase);
    });
  }, [sources.join(), sources.length]);
  const fail = !sources.length;
  return { fail, loaded: !fail && !!finished, ...usecase };
};
