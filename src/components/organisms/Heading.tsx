import React from 'react';
import { CombinedState } from '~/hooks/useCombinedState';

/** The DOM structure for the header. */
export const DOM: React.FC = ({ children }) => <header>{children}</header>;
DOM.displayName = 'HeadingDOM';

/** The custom hook for getting header sentence. */
export const useHeader = () => CombinedState.useContainer().header;

/** A heading component which is integrated a hook. */
const Container: React.FC = () => <DOM>{useHeader()}</DOM>;
Container.displayName = 'Heading';

export default Container;
