import React, { useMemo, useState } from 'react'
import { useCounter } from '../../hooks/useCounter'

// función con tareas complejas
// ? Esta tarea solo se debería realizar si laS variables o acciones que dependen de ella se actualizan.
// ! Mas no por que cualquiera de las variables de estado del componente cambian
const heaveStuff = (iterationNumber = 100) => {
    for (let i = 0; i<iterationNumber; i++) {
        console.log('Ahi vamos con la tarea...');
    }
    return `${iterationNumber} iteraciones realizadas`;
}

export const MemoHook = () => {
  const {counter, incrementar} = useCounter(5000)
  const [show, setShow] = useState(true)

  // Evitar que se vuelva a ejecutar lógica compleja en el componente solo por que cualquier variable de estado o props cambia
  // Memorizar el resultado de la operación, y volver a ejecutar la tarea solo si sus dependencias o algun dato en particular cambian
  const memorizeValue = useMemo(() => heaveStuff(counter), [counter]);

  return (
    <div className='mt-4'>
      <h1>Counter: <small>{counter}</small></h1>
      {/* <mark>{heaveStuff(counter)}</mark> */}
      <mark>{memorizeValue}</mark>
      <hr />
      {/* heaveStuff depende del counter, por tanto si cambia, debería ejecutarse */}
      <button className='btn btn-primary me-2' onClick={() => incrementar()}>+1</button>
      {/* heaveStuff no depende de la variable de estado show, sería un error de optimización que se volviera a ejecutar si esta variable cambia. por defecto así es */}
      <button className='btn btn-secondary' onClick={() => setShow(!show) }>Show | Hide {JSON.stringify(show) }</button>
    </div>
  )
}
