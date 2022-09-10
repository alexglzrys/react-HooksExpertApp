import React, { useCallback } from 'react'
import { Hijo } from './Hijo'
import { useState } from 'react';

export const Padre = () => {

    const numeros = [2,4,6,8,10];
    const [valor, setValor] = useState(0);

    /*const incrementar = ( num ) => {
        setValor( valor + num )
    }*/

    // Memorizar función enviada como prop a un componente Hijo, para evitar que se redibuje siempre a pesar que no está ligada directamente con el estado
    // useCallback, es para memorización de funciones pasadas como props
    // useMemo, es para memorizar funciones que no estan pasadas como props, pero forman parte del archivo o cuerpo del componente
    // React.memo, es para memorizar todo un componente como tal
    const incrementar = useCallback(
      (num) => {
        setValor((valor) => valor + num)
      },
      [],
    )
    

    return (
        <div className='mt-4'>
            <h1>Padre</h1>
            <p> Total: { valor } </p>

            <hr />

            {
                numeros.map( n => (
                    <Hijo 
                        key={ n }
                        numero={ n }
                        incrementar={ incrementar }
                    />
                ))
            }
            {/* <Hijo /> */}
        </div>
    )
}
