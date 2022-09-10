import React, { useCallback, useState } from 'react'
import { useCounter } from '../../hooks'
import { ShowIncrement } from './ShowIncrement';

export const CallbackHook = () => {
  const [counter, setCounter] = useState(10)

  // Recordar esta función
  const incrementarContador = useCallback(
    (aumento) => {
        // useCounter, necesita la versión de callback para que pueda funcionar correctamente dentro del hook useCallback
      setCounter((counter) => counter + aumento)
    },
    [],
  )
  

  // Esta función si se pasa como props, siempre cambiará (espacio en memoria) si el padre se le actualiza su estado
  /*const incrementar = () => {
    setCounter(counter + 1)
  }*/
  return (
    <div className='mt-4'>
        <h1>useCallback Hook {counter}</h1>
        {/* Este componente no debería volverse a redibujar si el estado cambia, ya que no esta directamente ligado al estado.
        Solo pasa por props la función que se encarga de incrementarlo.

        Pero aunque se use React.Memo, se redibujará, ya que el componente padre, al redibujarse guarda en un nuevo espacio de memoria
        la referencia a la función incrementar, por lo que cambia la prop en si, y hae que showincrement se vuelva a repintar
        
        Por tanto es un buen lugar para usar el hook useCallback, que memoriza la referencia en memoria de la función pasada como props
        Lo que ayuda a que no se vuelva a repintar el componente hijo si el estado del padre cambia*/}
       <ShowIncrement incrementar={incrementarContador} />
    </div>
  )
}
