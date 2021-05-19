import styled, { css } from 'styled-components';
import PALETTE from '../../../constants/palette';

const animation = {
  scale: css`
    transform: scale(1.2);
  `,
};

export const Button = styled.button`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  ${({ color }) => color && `color: ${color};`}
  ${({ fontSize }) => fontSize && `font-size: ${fontSize};`}
  ${({ backgroundColor }) => backgroundColor && `background-color: ${backgroundColor};`}
  border: ${({ borderColor }) => (borderColor ? `1px solid ${borderColor}` : 'none')};
  ${({ cursor }) => cursor && `cursor: ${cursor};`}
  outline: none;

  &:hover {
    ${({ hoverAnimation }) => hoverAnimation && animation[hoverAnimation]}
  }
`;