import { useQuery } from '@tanstack/react-query';
import {
  createContext,
  FC,
  ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';

import { getTodos, TodoType } from '../services/todos';

const initialColumns: string[] = ["Todo's", 'Doing', 'Done'];

type TodoTypes = {
  columns: string[];
  cards: { [key: string]: TodoType[] };
  addCard: (todo: TodoType) => void;
  isLoading: boolean;
};

export const TodoContext = createContext<TodoTypes>({
  columns: initialColumns,
  cards: {},
  addCard: () => null,
  isLoading: false,
});

type TodoContextProviderProps = {
  children: ReactNode;
};

export const TodoContextProvider: FC<TodoContextProviderProps> = ({
  children,
}) => {
  const [cardsState, setCardsState] = useState<TodoType[]>([]);

  const { data, isLoading } = useQuery({
    queryKey: ['todos'],
    queryFn: getTodos,
  });

  const columnGroups = useMemo(
    () =>
      cardsState.reduce<{ [key: string]: TodoType[] }>(
        (acc, card) => ({
          ...acc,
          [card.column_id]: [...(acc[card.column_id] ?? []), card],
        }),
        {},
      ),
    [cardsState],
  );

  useEffect(() => {
    if (data) {
      setCardsState(data);
    }
  }, [data]);

  const addCard = useCallback((todo: TodoType) => {
    setCardsState((oldState) => [...oldState, todo]);
  }, []);

  return (
    <TodoContext.Provider
      value={{
        columns: initialColumns,
        cards: columnGroups,
        addCard,
        isLoading,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
