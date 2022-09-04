// Los hooks personalizados son simples funciones que retornan un valor
// El valor de retorno puede ser un objeto o un arreglo, aunque se recomienda que sea un objeto pues se tiene más control sobre que cosas se usarán (desestructuración) desde el componente cliente
// Los hooks personalizados pueden tener su propio estado interno o hacer uso de otros custom hooks, o hooks de React
// Su función principal es concentrar logica que se puede repetir en varias partes de mi aplicación. Igualmente ayudan a desinflar los componentes pues la lógica compleja se concentra en otro archivo 

import { useState } from "react"

export const useCounter = (initialState = 10) => {
    const [counter, setCounter] = useState(initialState)

    // Métodos para modificar el estado interno de este hook
    const incrementar = (value = 1) => setCounter(counter + value);
    const decrementar = () => {
        if (counter === 0) return true;
        setCounter(counter - 1);
    } 
    const resetear = () => setCounter(initialState);

    // Retornamos el estado actual, y una o varias funciones para modificarlo
    return {
        counter,
        incrementar,
        decrementar,
        resetear
    }
}