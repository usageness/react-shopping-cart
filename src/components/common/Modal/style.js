import styled, { css } from 'styled-components';
import PALETTE from '../../../constants/palette';

const modalStyles = {
  default: css`
    min-width: 40%;
    max-width: 80%;
    max-height: 80vh;
    margin: auto;
    border-radius: 1rem;
  `,
  full: css`
    width: 100%;
    height: 100vh;
  `,
};

export const ModalContainer = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: ${PALETTE.BLACK_TRANSPARENT_006};
`;

export const ModalInner = styled.div`
  position: relative;
  background: white;
  padding: ${({ isShowCloseButton }) => (isShowCloseButton ? '4rem 3rem' : '3rem')};
  ${({ type }) => modalStyles[type]};
`;

export const CloseButton = styled.button`
  position: absolute;
  background-color: transparent;
  border: none;
  top: 1.25rem;
  right: 1.25rem;
  cursor: pointer;
`;