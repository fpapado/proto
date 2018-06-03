import React from 'react';
import Div from '../elements/Div';
import H1 from '../elements/H1';
import P from '../elements/P';

const Index = props => (
  <Div bg="bg" py={[5, 6, 7]} px={[4, 5, 6]}>
    <H1 fontSize={[2, 4, 6]} color="fuschia.7">
      Proto
    </H1>
    <P fontSize={[2, 3]} color="blue.6" lineHeight="copy">
      Setup for prototyping static sites with x0, emotion, styled-system and
      react.
      <br />
      Read the docs for more information:)
    </P>
  </Div>
);

export default Index;
