import React from 'react';
import Karte from '~/components/templates/Karte';
import { UsecaseAndAnswer } from '~/hooks/useUsecaseAndAnswer';

const Component: React.FC = () => (
  <UsecaseAndAnswer.Provider>
    <Karte />
  </UsecaseAndAnswer.Provider>
);
Component.displayName = 'App';

export default Component;
