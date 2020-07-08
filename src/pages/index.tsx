import React from 'react';
import Karte from '~/components/templates/Karte';
import { CombinedState } from '~/hooks/useCombinedState';

const Component: React.FC = () => (
  <CombinedState.Provider>
    <Karte />
  </CombinedState.Provider>
);
Component.displayName = 'App';

export default Component;
