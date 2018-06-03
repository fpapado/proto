import styled from 'react-emotion';
import {
  space,
  width,
  fontSize,
  fontWeight,
  lineHeight,
  color,
} from 'styled-system';

const Cite = styled.cite(
  space,
  width,
  fontSize,
  fontWeight,
  lineHeight,
  color,
  {},
);

Cite.defaultProps = {};

export default Cite;
