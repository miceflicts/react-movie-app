import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import 'bootstrap/dist/css/bootstrap.min.css';

interface Props {
  onAddTodo: (newTodo: {text: string}) => void;
}

function AddTodo({ onAddTodo }: Props) {
  const [newTodoText, updateNewTodoText] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    updateNewTodoText(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (newTodoText != ""){
      const newTodo = { text: newTodoText };
      onAddTodo(newTodo);
      updateNewTodoText('');
    } else {
      alert("you cant make a blank todo");
    };
  };

  return (
    <div className='d-flex w-100 h-100'>
      <Form.Control
        className='form-control shadow rounded-1'
        placeholder='type your todo'
        value={newTodoText}
        onChange={handleChange}
      />
      <Button variant='danger' className='rounded-1' onClick={handleSubmit}>
        Add
      </Button>
    </div>
  );
}

export default AddTodo;
