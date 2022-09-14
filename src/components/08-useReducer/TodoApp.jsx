import React from 'react'
import { useTodos } from '../../hooks/useTodos';
import { TodoAdd } from './TodoAdd';
import { TodoItem } from './TodoItem';
import { TodoList } from './TodoList';

export const TodoApp = () => {
    // * Llamar al custom hook que permite trabajar con TODOS
    const { todos, todosCount, pendingTodosCount, handleNewTodo, handleRemoveTodo, handleToggleTodo} = useTodos();

  return (
    <div className='mt-4'>
        <h1>Todo App: </h1>
        <p>Tareas: {todosCount} - <strong>Pendientes: {pendingTodosCount}</strong></p>
        <hr />
        <div className="row">
            <div className="col-7">
               <TodoList>
                {/* TodoItem es responsable de informar a la Aplicación cuando una tarea se debe eliminar */}
                {todos.map(todo => <TodoItem key={todo.id} {...todo} handleRemoveTodo={handleRemoveTodo} handleToggleTodo={handleToggleTodo} />)}
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
