import React from 'react'

export const TodoItem = ({id, description, handleRemoveTodo}) => {

    const onRemoveTodo = (id) => {
        // Notificar al componente padre que se desea eliminar una determinada tarea
        if (window.confirm('¿Seguro que deseas eliminar esta tarea?')) handleRemoveTodo(id);
    }
  
  return (
    <li className='list-group-item d-flex justify-content-between align-items-center'>
        <span>{description}</span>
        <button className='btn btn-danger' onClick={() => onRemoveTodo(id)}>Borrar</button>
    </li>
  )
}
