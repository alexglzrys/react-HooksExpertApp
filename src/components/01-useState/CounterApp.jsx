import { useState } from "react";

export const CounterApp = () => {
  // Declarar estado interno del componente
  // const [state, setState] = useState({

  // Desestructurar el objeto que retorna este estado
  const [{ contador1, contador2, contador3 }, setState] = useState({
    contador1: 10,
    contador2: 20,
    contador3: 30,
  });

  const handleIncrementarContador1 = () => {
    // Para cambiar una propiedad del estado desestructurado, nos obliga a usar la forma de callback en los parámetros del setState
    setState((state) => {
      return { ...state, contador1: state.contador1 + 1 };
    });
  };

  return (
    <div>
      <ul>
        <li>
          {/* La desestructuración del estado de tipo objeto, permite acceder directamente a las propiedades */}
          Contador 1: <strong>{contador1}</strong>
        </li>
        <li>
          Contador 2: <strong>{contador2}</strong>
        </li>
        <li>
          Contador 3: <strong>{contador3}</strong>
        </li>
      </ul>
      <button
        className="btn btn-secondary"
        onClick={handleIncrementarContador1}
      >
        Incrementar contador 1
      </button>
    </div>
  );
};
