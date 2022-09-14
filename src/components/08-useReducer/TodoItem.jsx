import React from 'react'

export const TodoItem = ({id, description, done, handleRemoveTodo, handleToggleTodo}) => {

    const onRemoveTodo = (id) => {
        // Notificar al componente padre que se desea eliminar una determinada tarea
        if (window.confirm('¿Seguro que deseas eliminar esta tarea?')) handleRemoveTodo(id);
    }

    const onToggleTodo = (id) => {
        handleToggleTodo(id);
    }
  
  return (
    <li className='list-group-item d-flex justify-content-between align-items-center'>
        {/* agregar una clase de CSS de forma condicional, siempre y cuando la tarea este completada */}
        <span onClick={() => onToggleTodo(id) } className={done ? 'text-decoration-line-through' : ''}>{description}</span>
        <button className='btn btn-danger' onClick={() => onRemoveTodo(id)}>Borrar</button>
    </li>
  )
}
