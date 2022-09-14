import React from 'react'
import { useState } from 'react'
import { useForm } from '../../hooks'

// Estado inicial del formulario
/*const initialState = {
    description: ''
}*/

export const TodoAdd = ({handleNewTodo}) => {
    // Declarar el estado de mi formulario
    //const [form, setForm] = useState(initialState)

    // Controlar los inputs del formulario con base al estado
    /*const handleInput = (e) => {
        const {name, value} = e.target;
        setForm({
            [name]: value
        });
    }*/

    // Usar el custom hook que nos permite controlar los Inputs del formulario.
    // En este caso el parámetro enviado es el estado inicial
    const {formState, handleInputChange, handleResetForm} = useForm({
        description: ''
    });

    // Evento personalizado para enviar un nuevo todo
    const handleFormSubmit = (e) => {
        e.preventDefault();
        e.stopPropagation();

        //if (form.description.trim() === '') {
        if (formState.description.trim() === '') {
            alert('Ingresa la descripción de la tarea');
            return false;
        }
        // Generar el cuerpo del todo
        const newTodo = {
            id: new Date().getTime(),
            // description: form.description.trim(),
            description: formState.description,
            done: false
        };
        
        // Ejecutar la función compartida por props para agregar el todo al estado global de la aplicación
        handleNewTodo(newTodo);
        // setForm(initialState);
        handleResetForm();
    }

  return (
    <form onSubmit={handleFormSubmit}>
        {/* <input type="text" 
        placeholder='¿Qué hay que hacer' 
        name='description' 
        className='form-control' 
        value={form.description} 
        onChange={handleInput} /> */}
        <input type="text" 
        placeholder='¿Qué hay que hacer' 
        name='description' 
        className='form-control' 
        value={formState.description} 
        onChange={handleInputChange} />

        <button type='submit' className='btn btn-outline-primary mt-1'>Agregar</button>
    </form>
  )
}
