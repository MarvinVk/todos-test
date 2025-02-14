import { FC, FormEventHandler, useContext, useState } from 'react';
import styled from 'styled-components';

import colors from '../../constants/colors';
import sizes from '../../constants/sizes';
import { TodoContext } from '../../context/todos';
import { addTodo } from '../../services/todos';
import { Button, Input } from '../_atoms';

const Styled = {
  Component: styled.div`
    position: relative;
    bottom: 0;
    width: 100%;
    padding: ${sizes.space}px;
    border-radius: 10px;
    border-color: ${colors.neutral800};
    background-color: ${colors.neutral200};
  `,
  FormHolder: styled.div`
    display: flex;
    width: 100%;
  `,
  Title: styled.h4`
    font-weight: 600;
    font-size: 16px;
    margin: 0 0 ${sizes.space / 2}px;
  `,
  InputHolder: styled.div`
    width: 100%;
    margin-right: ${sizes.space / 2}px;
  `,
};

type AddTodoFormProps = {
  columnId: number;
};

export const AddTodoForm: FC<AddTodoFormProps> = ({ columnId }) => {
  const { addCard } = useContext(TodoContext);

  const [title, setTitle] = useState('');

  const handleSubmit: FormEventHandler = async (e) => {
    e.preventDefault();

    const response = await addTodo(title, 1);
    addCard(columnId, response);
  };

  return (
    <Styled.Component>
      <form onSubmit={handleSubmit}>
        <Styled.Title>Add new todo</Styled.Title>
        <Styled.FormHolder>
          <Styled.InputHolder>
            <Input
              type="text"
              name="title"
              placeholder="Enter a title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </Styled.InputHolder>
          <Button type="submit">Submit</Button>
        </Styled.FormHolder>
      </form>
    </Styled.Component>
  );
};
