import React from 'react'
import { useReducer } from 'react'
import { TodoAdd } from './TodoAdd';
import { TodoItem } from './TodoItem';
import { TodoList } from './TodoList';
import { todoReducer } from './todoReducer';

// Estado inicial
const initialState = [
    {
        id: new Date().getTime(),
        description: 'Correr 10km en el cerro',
        done: false
    },
    {
        id: new Date().getTime() + 100,
        description: 'Aprender React 1 hora',
        done: false
    }
]

export const TodoApp = () => {
    const [todos, dispatch] = useReducer(todoReducer, initialState);

    const handleNewTodo = (todo) => {
        console.log({todo});
    }

  return (
    <div className='mt-4'>
        <h1>Todo App: 10 - <small>Pendientes: 2</small></h1>
        <hr />
        <div className="row">
            <div className="col-7">
               <TodoList>
                    {todos.map(todo => <TodoItem key={todo.id} {...todo} />)}
               </TodoList>
            </div>
            <div className="col-5">
                <h4>Agregar TODO</h4>
                <hr />
                <TodoAdd handleNewTodo={handleNewTodo}/>
            </div>
        </div>
    </div>
  )
}
