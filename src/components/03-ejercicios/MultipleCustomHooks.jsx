import { useCounter, useFetch } from "../../hooks";
import { Blockquote, Loader } from "./components";

export const MultipleCustomHooks = () => {
  // Custom hooks, uno para peticiones HTTP, y el otro para controlar un contador, cuyo valor sirve como parámetro de ruta dinámico para solicitar diferentes peticiones a la API de https://breakingbadapi.com/
  const { counter, incrementar } = useCounter(1);
  const { data, isError, isLoading, state } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${counter}`
  );

  // El API retorna siempre un array aunque sea un solo dato

  // Para acceder facilmente a esa información, verificamos que la data sea true (operador de circuito convierte cualquier valor a un boolenano, al declararlo doble, lo convierte a su inverso boolenano) y que exista algo en la posición[0],
  const { author, quote, series } = !!data && data[0];

  return (
    <div className="mt-4">
      <h3>Multiple Custom Hooks</h3>
      {/* Se recomienda que los elementos sitados dentro de las condiciones sean simples, si son más de 3 lineas, se recomienda encapsular en un componente
      En REACT el código debe ser fácil de leér y escribir */}
      {isLoading ? <Loader /> : <Blockquote author={author} quote={quote}/>}
      <button
        className="btn btn-warning"
        disabled={isLoading}
        onClick={() => incrementar(1)}
      >
        Siguiente cita
      </button>
    </div>
  );
};
