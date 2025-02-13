import { useQuery } from '@tanstack/react-query';
import {
  createContext,
  FC,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from 'react';

import { ColumnType, getTodos, TodoType } from '../services/todos';

type TodoTypes = {
  columns: ColumnType[];
  addCard: (todo: TodoType) => void;
};

const initialColumns: ColumnType[] = [
  {
    column_id: 1,
    title: "Todo's",
    cards: [],
  },
  {
    column_id: 2,
    title: 'Doing',
    cards: [],
  },
  {
    column_id: 3,
    title: 'Done',
    cards: [],
  },
];

export const TodoContext = createContext<TodoTypes>({
  columns: initialColumns,
  addCard: () => null,
});

type TodoContextProviderProps = {
  children: ReactNode;
};

export const TodoContextProvider: FC<TodoContextProviderProps> = ({
  children,
}) => {
  const [columnsState, setColumnsState] = useState(initialColumns);

  const { data } = useQuery({
    queryKey: ['todos'],
    queryFn: getTodos,
  });

  useEffect(() => {
    if (data) {
      // TODO: move data to context provide and move data to the right column
      columnsState[0].cards = data;
      setColumnsState(columnsState);
    }
  }, [data]);

  const addCard = useCallback((todo: TodoType) => {
    // setColumnsState(todo);
  }, []);

  return (
    <TodoContext.Provider
      value={{
        columns: columnsState,
        addCard,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
