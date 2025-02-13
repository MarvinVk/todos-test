import { FormEventHandler, useState } from 'react';

import { addTodo } from '../../services/todos';
import { Button, Input } from '../_atoms';

export const AddTodoForm = () => {
  const [title, setTitle] = useState('');

  const handleSubmit: FormEventHandler = async (e) => {
    e.preventDefault();

    const response = await addTodo(title, 1);
    console.log('response :>> ', response);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add todo:</h3>
      <Input
        type="text"
        name="title"
        placeholder="title (string)"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <Button type="submit">Submit</Button>
    </form>
  );
};
