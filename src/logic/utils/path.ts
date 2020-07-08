import queryString from 'query-string';

export type GetKarteURLsOptions = Pick<Location, 'href' | 'search'>;

export const createYamlUrlgetter = (href: string) => {
  const baseUrl = href.split('?').shift();
  return (key: string) => `${baseUrl}yaml/${key}.yml`;
};

export const getKarteURLs = ({ href, search }: GetKarteURLsOptions) =>
  Object.keys(queryString.parse(search)).map(createYamlUrlgetter(href));
