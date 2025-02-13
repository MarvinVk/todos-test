import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState, useMemo } from "react";
import styled from "styled-components";

import { getTodos } from "./services/todos";
import { TodoCard } from "./components/_molecules/TodoCard";
import { AddTodoForm } from "./components/_molecules/AddTodoForm";
import colors from "./constants/colors";
import sizes from "./constants/sizes";

import "./App.css";

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
  `,
  CardHolder: styled.li`
    margin-bottom: ${sizes.space}px;
  `,
};

const defaultColumns = [
  {
    column_id: 1,
    title: "Todo's",
    cards: [],
  },
  {
    column_id: 2,
    title: "Doing",
    cards: [],
  },
  {
    column_id: 3,
    title: "Done",
    cards: [],
  },
];

export const App = () => {
  const [columns, setColumns] = useState(defaultColumns);

  const { data } = useQuery({
    queryKey: ["todos"],
    queryFn: getTodos,
  });

  useEffect(() => {
    if (data) {
      // TODO: move data to context provide and move data to the right column
      columns[0].cards = data;
      setColumns(columns);
    }
  }, [data]);

  return (
    <div className="App">
      <Styled.Columns>
        {columns.map((column, index) => (
          <Styled.CardsHolder index={index}>
            <Styled.Cards>
              <Styled.CardsTitle>{column.title}</Styled.CardsTitle>
              {column.cards.map((card) => (
                <Styled.CardHolder key={card.id}>
                  <TodoCard title={card.title} />
                </Styled.CardHolder>
              ))}
            </Styled.Cards>
            <AddTodoForm onChange={setColumns} />
          </Styled.CardsHolder>
        ))}
      </Styled.Columns>
    </div>
  );
};

export default App;
