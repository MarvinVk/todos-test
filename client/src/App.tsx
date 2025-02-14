import { useContext } from 'react';
import styled from 'styled-components';

import './App.css';

import { Loader } from './components/_atoms';
import { AddTodoForm, TodoCard } from './components/_molecules';
import colors from './constants/colors';
import sizes from './constants/sizes';
import { TodoContext } from './context/todos';

const Styled = {
  LoaderHolder: styled.div`
    margin: ${sizes.space}px;
  `,
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
  const { columns, cards, isLoading } = useContext(TodoContext);

  return (
    <div className="App">
      {isLoading && (
        <Styled.LoaderHolder>
          <Loader />
        </Styled.LoaderHolder>
      )}
      <Styled.Columns>
        {columns.map((column, index) => (
          <Styled.CardsHolder key={column}>
            <div>
              <Styled.CardsTitle>{column}</Styled.CardsTitle>
              <Styled.Cards>
                {cards[index]?.map((card) => (
                  <Styled.CardHolder key={card.id}>
                    <TodoCard title={card.title} />
                  </Styled.CardHolder>
                ))}
              </Styled.Cards>
            </div>
            <AddTodoForm columnId={index} />
          </Styled.CardsHolder>
        ))}
      </Styled.Columns>
    </div>
  );
};

export default App;
