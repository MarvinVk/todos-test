import { FC } from 'react';
import styled from 'styled-components';

import colors from '../../constants/colors';

type LoaderStyleProps = {
  variant: 'dark' | 'light';
  size: number;
};

const Styled = {
  Loader: styled.div<LoaderStyleProps>`
    position: relative;
    width: ${({ size }) => size}px;
    height: ${({ size }) => size}px;
    border-radius: 50%;
    border: ${({ size }) => Math.round(size / 5)}px solid
      ${({ variant }) =>
        variant === 'light' ? colors.neutral800 : colors.neutral200};
  `,
  Line: styled.div<LoaderStyleProps>`
    position: absolute;
    left: -${({ size }) => Math.round(size / 5)}px;
    top: -${({ size }) => Math.round(size / 5)}px;
    width: ${({ size }) => size}px;
    height: ${({ size }) => size}px;
    border-radius: 50%;
    border: ${({ size }) => Math.round(size / 5)}px solid
      ${({ variant }) =>
        variant === 'light' ? colors.neutral100 : colors.neutral800};
    border-left-color: transparent;
    animation: spin 1s infinite;

    @keyframes spin {
      100% {
        transform: rotate(360deg);
      }
    }
  `,
};

type LoaderProps = {
  variant?: 'dark' | 'light';
  size?: number;
};

export const Loader: FC<LoaderProps> = ({ variant = 'dark', size = 30 }) => (
  <Styled.Loader variant={variant} size={size}>
    <Styled.Line variant={variant} size={size} />
  </Styled.Loader>
);
