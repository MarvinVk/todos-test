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
    border-radius: 20px;
    background-color: ${colors.neutral100};
  `,
  Cards: styled.ol`
    margin: 0;
    list-style: none;
    padding: ${sizes.space}px;
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
        {columns.map((column, index) => (
          <Styled.CardsHolder key={index}>
            <Styled.Cards>
              <Styled.CardsTitle>{column.title}</Styled.CardsTitle>
              {column.cards.map((card) => (
                <Styled.CardHolder key={card.id}>
                  <TodoCard title={card.title} />
                </Styled.CardHolder>
              ))}
            </Styled.Cards>
            <AddTodoForm />
          </Styled.CardsHolder>
        ))}
      </Styled.Columns>
    </div>
  );
};

export default App;
