import React from 'react';
import useWindow from './useWindow';
import { createYamlUrlgetter } from '~/logic/utils/path';
import { loadYAMLAsync } from '~/logic/utils/loader';

export type Resources = Record<string, string | undefined>;

export default () => {
  const [resources, setResources] = React.useState<Resources | undefined>();
  const href = useWindow()?.location.href;
  const yamlUrl = createYamlUrlgetter(href ?? '')('resources');
  React.useEffect(() => {
    loadYAMLAsync(yamlUrl).then((obj) => setResources(obj as Resources));
  }, [yamlUrl]);
  return resources;
};
