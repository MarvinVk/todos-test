import React, { FC, MouseEvent, useCallback } from 'react';
import styled from 'styled-components';

import colors from '../../constants/colors';

const Styled = {
  Button: styled.button`
    padding: 10px 8px;
    font-size: 14px;
    color: ${colors.neutral100};
    border-radius: 10px;
    border-color: ${colors.neutral800};
    background-color: ${colors.neutral800};
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
      {children}
    </Styled.Button>
  );
};
