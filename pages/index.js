import React from 'react';
import Div from '../elements/Div';
import H1 from '../elements/H1';
import P from '../elements/P';
import A from '../elements/A';
import theme from '../theme';

const Index = props => (
  <Div color="black.1" bg="bg" py={[5, 6, 7]} px={[4, 5, 6]}>
    <H1 fontSize={[2, 4, 6]} color="fuschia.7">
      Proto
    </H1>
    <P fontSize={[2, 3]} lineHeight="copy">
      Setup for prototyping static sites with x0, emotion, styled-system and
      react.
      <br />
      Read the docs for more information:
      <br />
      <A
        color="blue.5"
        hover={{
          color: 'blue.7',
          textDecorationColor: theme.colors.blue[7],
        }}
        active={{ color: 'blue.5' }}
        css={{ textDecorationColor: theme.colors.blue[2] }}
        href="https://github.com/fpapado/proto"
      >
        https://github.com/fpapado/proto
      </A>
    </P>
  </Div>
);

export default Index;
