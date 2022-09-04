import React from "react";
import { useCounter } from "../../hooks/useCounter";

export const CounterWithCustomHook = () => {
  // Usar un custom hook del tipo contador, el cual retorna un objeto con el valor del estado actual de dicho contador, y varias funciones para moduficar su valor
  const { counter, incrementar, decrementar, resetear } = useCounter();

  return (
    <div className="mt-4">
      <h3>CounterWithCustomHook</h3>
      <p>Valor actua: {counter}</p>
      <button className="btn btn-success me-1" onClick={() => incrementar(5)}>
        +
      </button>
      <button className="btn btn-danger me-1" onClick={resetear}>
        Resetear
      </button>
      <button className="btn btn-warning" onClick={decrementar}>
        -1
      </button>
    </div>
  );
};
