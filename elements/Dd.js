import styled from 'react-emotion';
import {
  space,
  display,
  width,
  fontSize,
  fontWeight,
  color,
  borderColor,
  borderWidth,
} from 'styled-system';

const Dd = styled.dd(
  space,
  display,
  width,
  fontSize,
  fontWeight,
  color,
  borderColor,
  borderWidth,
  {},
);

Dd.defaultProps = {};

export default Dd;
