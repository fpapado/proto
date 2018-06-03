import styled from 'react-emotion';
import {
  space,
  width,
  fontSize,
  fontWeight,
  lineHeight,
  color,
} from 'styled-system';

const B = styled.b(space, width, fontSize, fontWeight, lineHeight, color, {});

B.defaultProps = {
  fontWeight: 'bolder',
};

export default B;
