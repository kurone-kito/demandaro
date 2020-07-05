import React from 'react';
import { UsecaseAndAnswer } from '~/hooks/useUsecaseAndAnswer';

export const DOM: React.FC = ({ children }) => <header>{children}</header>;
DOM.displayName = 'HeadingDOM';

const Container: React.FC = () => (
  <DOM>{UsecaseAndAnswer.useContainer().header}</DOM>
);
Container.displayName = 'Heading';

export default Container;
