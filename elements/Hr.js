import styled from 'react-emotion';
import {
  space,
  width,
  color,
  borders,
  borderColor,
  borderWidth,
} from 'styled-system';

const Hr = styled.hr(space, width, color, borders, borderColor, borderWidth, {
  boxSizing: 'content-box',
  height: 0,
  overflow: 'visible',
});

Hr.defaultProps = {};

export default Hr;
