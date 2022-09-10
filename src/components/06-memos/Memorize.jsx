import React, { useState } from 'react'
import { useCounter } from '../../hooks/useCounter'
import { Small } from './Small'

export const Memorize = () => {
  const {counter, incrementar} = useCounter(10)
  const [show, setShow] = useState(true)
  return (
    <div className='mt-4'>
      {/* 
      Este componente debería redibujarse sólo si sus props cambian.
      - En la práctica no es así, Si el estado del componente padre cambia, este se redibuja, obligando así a sus hijos a redibujarse también, aunque internamnte no hayan recibido cambio alguno
          Esto puede afectar si dentro de los componentes hijos, tenemos lógica compleja, ya que se estaría ejeuctando y repitiendo constantemente
          Sin que se necesario hacerlo
      */}
      <h1>Counter: <Small value={counter} /></h1>
      <hr />
      {/* Si modificamos el estado del contador, debería redibujarse el componente Small */}
      <button className='btn btn-primary me-2' onClick={() => incrementar()}>+1</button>
      {/* Si modificamos el estado de show, no debería afectar al componente Small
      Para que esto así suceda, tenemos que decirle a React que memorice el estado actual del componente */}
      <button className='btn btn-secondary' onClick={() => setShow(!show) }>Show | Hide {JSON.stringify(show) }</button>
    </div>
  )
}
