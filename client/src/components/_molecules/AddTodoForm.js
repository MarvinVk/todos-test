import React, { useState } from "react";
import styled from "styled-components";

import { addTodo } from "../../services/todos";

const Styled = {
  Input: styled.input`
    padding: 10px 8px;
  `,
};

export const AddTodoForm = ({ onChange }) => {
  const [title, setTitle] = useState(undefined);
  const [order, setOrder] = useState(undefined);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await addTodo(title, order);
    onChange(response);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add todo:</h3>
      <Styled.Input
        type="text"
        placeholder="title (string)"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <Styled.Input
        type="text"
        placeholder="order (int)"
        value={order}
        onChange={(e) => setOrder(e.target.value)}
      />

      <button type="submit">Submit</button>
    </form>
  );
};
