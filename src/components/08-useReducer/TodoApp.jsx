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
    /**
     * useReducer
     * 
     * Es una alternativa al useState, 
     * Se recomienda usarlo cuando la lógica de la tarea es compleja, o hay multiples cambios en el estado
     * A diferencia de useState, se requiere de una función Reducer, que declare todas las acciones posibles a ejecutar.
     * Las acciones se envían al reducer por medio de una función despachadora, misma que ofrece el hook
     * 
     * En pocas palabras nos permite controlar el estado de la aplicación, mediante el uso de un reducer; 
     * mismo que define la lógica y las posibles tareas a ejecutar.
     * 
     * Recibe como argumentos, la función Reducer (misma que debemos programar nosotros) y el estado inicial
     * Retorna el estado actual, y la función despachadora de acciones
     */
    const [todos, dispatch] = useReducer(todoReducer, initialState);

    const handleNewTodo = (todo) => {
        console.log({todo});

        // Generar el cuerpo de la acción a despachar en el Reducer
        const action = {
            type: '[TODO] Add Todo',
            payload: todo
        };

        // Despachar la acción en el Reducer
        dispatch(action);
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
