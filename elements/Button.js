import styled from 'react-emotion';
import theme from '../theme';
import {
  space,
  width,
  display,
  fontSize,
  fontWeight,
  lineHeight,
  color,
  borders,
  borderColor,
  borderWidth,
  borderRadius,
  hover,
  active,
  focus,
} from 'styled-system';

const Button = styled.button(
  space,
  width,
  display,
  fontSize,
  fontWeight,
  lineHeight,
  color,
  borders,
  borderColor,
  borderWidth,
  borderRadius,
  hover,
  active,
  focus,
  {
    boxSizing: 'border-box',
    overflow: 'visible',
    textTransform: 'none',
    fontFamily: 'inherit',
  },
);

Button.defaultProps = {
  m: 0,
};

export default Button;
