import styled from "styled-components";

import colors from "../../constants/colors";
import sizes from "../../constants/sizes";

const Styled = {
  Component: styled.div`
    padding: ${sizes.space}px;
    border-radius: 10px;
    background-color: ${colors.white};
  `,
};

export const TodoCard = ({ title }) => {
  return <Styled.Component>{title}</Styled.Component>;
};
