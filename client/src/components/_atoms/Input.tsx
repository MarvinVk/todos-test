import React, { CSSProperties, FC } from 'react';
import styled from 'styled-components';

import colors from '../../constants/colors';

const Styled = {
  Input: styled.input`
    padding: 10px 14px;
    width: 100%;
    font-size: 16px;
    border-radius: 10px;
    border-color: ${colors.neutral300};
    border: 1px solid ${colors.neutral800};
    background-color: ${colors.white};
  `,
};

type InputProps = {
  type?: string;
  name: string;
  value?: string;
  placeholder?: string;
  style?: CSSProperties;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Input: FC<InputProps> = ({
  type = 'text',
  name,
  value,
  placeholder,
  style,
  onChange,
}) => (
  <Styled.Input
    type={type}
    name={name}
    value={value}
    placeholder={placeholder}
    onChange={onChange}
    style={style}
  />
);
