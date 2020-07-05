import React from 'react';
import NoQuestiohns from '~/components/atoms/NoQuestiohns';
import Heading from '~/components/organisms/Heading';
import Loading from '~/components/organisms/Loading';
import Questions from '~/components/organisms/Questions';
import Result from '~/components/organisms/Result';
import ToggleResultButton from '~/components/organisms/ToggleResultButton';
import { UsecaseAndAnswer } from '~/hooks/useUsecaseAndAnswer';

export interface DOMProps {
  /** Do not use this property. */
  children?: never;
  fail?: boolean;
  loaded?: boolean;
  result?: boolean;
}

export const DOM: React.FC<DOMProps> = ({ fail, loaded, result }) => (
  <article>
    {loaded && (
      <>
        <Heading />
        <Questions />
        {result ? (
          <Result />
        ) : (
          <ToggleResultButton condition={(result) => result}>
            結果を見る！
          </ToggleResultButton>
        )}
      </>
    )}
    {fail && <NoQuestiohns />}
    <Loading />
  </article>
);
DOM.displayName = 'KarteDOM';

const Container: React.FC = () => {
  const { fail, loaded, result } = UsecaseAndAnswer.useContainer();
  return <DOM fail={fail} loaded={loaded} result={result} />;
};
Container.displayName = 'Karte';

export default Container;
