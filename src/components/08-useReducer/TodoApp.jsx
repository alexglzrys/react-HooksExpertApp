import React from 'react'
import { useEffect } from 'react';
import { useReducer } from 'react'
import { TodoAdd } from './TodoAdd';
import { TodoItem } from './TodoItem';
import { TodoList } from './TodoList';
import { todoReducer } from './todoReducer';

// Estado inicial
const initialState = [
    /*{
        id: new Date().getTime(),
        description: 'Correr 10km en el cerro',
        done: false
    },
    {
        id: new Date().getTime() + 100,
        description: 'Aprender React 1 hora',
        done: false
    }*/
]

// Función inicializadora de estado para useReducer
const init = () => {
    // Como se están persistiendo los datos en LocalStorage, es necesario esta función inicializadora de estado,
    // ya que de no hacerlo, cada vez que se recargue la página, el contenido almacenado en LocalStorage se eliminará
    // esto es así ya que que cuando se carga el componente, se vuelve a inicializar el estado a un arreglo vacio
    // -- ver initialState
    // Para evitar ese comportamiento por defecto, inicializamos el estado de manera diferida, leerlo desde localStorage
    return JSON.parse(localStorage.getItem('todos')) || [];
}

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
     * Opcionalmente recibe un tercer argumento, una función que permita inicializar el estado de forma diferida
     * Retorna el estado actual, y la función despachadora de acciones
     */
    const [todos, dispatch] = useReducer(todoReducer, initialState, init);

    /**
     * Persistir y leér estado en LocalStorage
     * 
     * Esto se puede considerar como un efecto secundario
     * Se debe leér el estado desde el LocalStorage en el momento que se carga el componente
     * y se debe guardar el estado en LocalStorage cada vez que este cambia (se agrega, actualiza, o elimina una tarea)
     */
    useEffect(() => {
        // Persistir el estado cada vez que el arreglo de todos cambia
      localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])
    

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

    const handleRemoveTodo = (id) => {
        const action = {
            type: '[TODO] Remove Todo',
            payload: id
        };
        dispatch(action);
    }

  return (
    <div className='mt-4'>
        <h1>Todo App: 10 - <small>Pendientes: 2</small></h1>
        <hr />
        <div className="row">
            <div className="col-7">
               <TodoList>
                {/* TodoItem es responsable de informar a la Aplicación cuando una tarea se debe eliminar */}
                {todos.map(todo => <TodoItem key={todo.id} {...todo} handleRemoveTodo={handleRemoveTodo} />)}
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
