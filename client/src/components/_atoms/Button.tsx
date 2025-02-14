import React, { FC, MouseEvent, useCallback } from 'react';
import styled from 'styled-components';

import colors from '../../constants/colors';
import { Loader } from './';

const Styled = {
  Button: styled.button`
    display: flex;
    padding: 10px 14px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    color: ${colors.neutral100};
    border: 1px solid ${colors.neutral800};
    border-radius: 10px;
    background-color: ${colors.neutral800};
  `,
  LoaderHolder: styled.span`
    margin-right: 8px;
  `,
};

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  disabled?: boolean;
  loading?: boolean;
  onClick?: (event?: MouseEvent) => void;
  children: React.ReactNode;
}

export const Button: FC<ButtonProps> = ({
  type = 'button',
  className = '',
  disabled = false,
  loading = false,
  onClick,
  children,
}) => {
  const handler = useCallback(
    (event: MouseEvent) => {
      if (disabled) {
        event.preventDefault();
      }
      if (onClick && !loading && !disabled) {
        onClick(event);
      }
    },
    [disabled, onClick, loading],
  );

  return (
    <Styled.Button
      type={type}
      className={className}
      disabled={disabled || loading}
      onClick={handler}
    >
      {loading && (
        <Styled.LoaderHolder>
          <Loader size={17} variant="light" />
        </Styled.LoaderHolder>
      )}
      {children}
    </Styled.Button>
  );
};
