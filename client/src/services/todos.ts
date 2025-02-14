export type TodoType = {
  id: number;
  column_id: number;
  title: string;
  order: number;
};

export type ColumnType = {
  column_id: number;
  title: string;
  cards: TodoType[];
};

export const getTodos = async () => {
  let url = '/';
  if (process.env.NODE_ENV === 'development') {
    url = 'http://localhost:6060/';
  }

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error(error);
  }
};

export const addTodo = async (
  columnId: number,
  title: string,
  order: number,
) => {
  let url = '/';
  if (process.env.NODE_ENV === 'development') {
    url = 'http://localhost:6060/';
  }

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ column_id: columnId, title, order }),
  });

  return response.json();
};

export const updateTodo = async () => {};
