import React, { useState } from 'react';

import AddTodo from './components/todo-inputs/AddTodo';
import FilterTodo from './components/todo-inputs/FilterTodo';
import Todos from './components/todos';

import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';

interface Todo {
  text: string;
}

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filter, setFilter] = useState("All")

  const handleAddTodo = (newTodo: Todo) => {
    setTodos([...todos, newTodo]);
  };

  const handleOnFilter = (event: any) => {
    setFilter(event);
  };

  return (
    <>
      <div className='mainDiv d-flex flex-column border rounded shadow-lg'>
        <h1 className='mt-4 text-danger fw-bold fs-1'>TODO LIST</h1>
        <div className='inputDiv d-flex justify-content-center align-items-center gap-3 mt-4'>
          <AddTodo onAddTodo={handleAddTodo} />
          <FilterTodo onFilter={handleOnFilter}></FilterTodo>
        </div>
        <div className='todos d-flex justify-content-center align-items-center flex-column mt-4 gap-4'>
          {todos.map((todo, index) => {
            return <Todos filter={filter} text={todo.text} key={index}></Todos>
          })}
        </div>
      </div>
    </>
  );
}

export default App;
