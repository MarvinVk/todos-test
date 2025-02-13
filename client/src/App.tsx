import { useContext } from 'react';
import styled from 'styled-components';

import './App.css';

import { AddTodoForm } from './components/_molecules/AddTodoForm';
import { TodoCard } from './components/_molecules/TodoCard';
import colors from './constants/colors';
import sizes from './constants/sizes';
import { TodoContext } from './context/todos';

const Styled = {
  Columns: styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: ${sizes.space}px;
    padding: ${sizes.space}px;
  `,
  CardsHolder: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 20px;
    padding: ${sizes.space}px;
    background-color: ${colors.neutral100};
  `,
  Cards: styled.ol`
    margin: 0;
    padding: 0;
    list-style: none;
  `,
  CardsTitle: styled.h3`
    font-weight: 600;
    font-size: 20px;
    margin: 0 0 ${sizes.space}px;
  `,
  CardHolder: styled.li`
    margin-bottom: ${sizes.space}px;
  `,
};

export const App = () => {
  const { columns } = useContext(TodoContext);

  return (
    <div className="App">
      <Styled.Columns>
        {columns.map((column) => (
          <Styled.CardsHolder key={column.column_id}>
            <Styled.CardsTitle>{column.title}</Styled.CardsTitle>
            <Styled.Cards>
              {column.cards.map((card) => (
                <Styled.CardHolder key={card.id}>
                  <TodoCard title={card.title} />
                </Styled.CardHolder>
              ))}
            </Styled.Cards>
            <AddTodoForm columnId={column.column_id} />
          </Styled.CardsHolder>
        ))}
      </Styled.Columns>
    </div>
  );
};

export default App;
