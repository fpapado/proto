import styled from 'react-emotion';
import {
  space,
  display,
  width,
  color,
  borders,
  borderColor,
  borderWidth,
  borderRadius,
} from 'styled-system';

const Img = styled.img(
  space,
  display,
  width,
  color,
  borders,
  borderColor,
  borderWidth,
  borderRadius,
  {
    display: 'block',
    maxWidth: '100%',
    borderStyle: 'none',
  },
);

Img.defaultProps = {
  w: 1,
};

export default Img;
