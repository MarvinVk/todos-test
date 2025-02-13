import React, { FC } from 'react';
import styled from 'styled-components';

import colors from '../../constants/colors';

const Styled = {
  Input: styled.input`
    appearance: none;
    padding: 10px 8px;
    border-radius: 10px;
    border-color: ${colors.neutral300};
    background-color: ${colors.white};
  `,
};

type InputProps = {
  type?: string;
  name: string;
  value?: string;
  placeholder?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Input: FC<InputProps> = ({
  type = 'text',
  name,
  value,
  placeholder,
  onChange,
}) => {
  return (
    <Styled.Input
      type={type}
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};
