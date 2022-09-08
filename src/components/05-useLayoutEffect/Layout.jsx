import { useLayoutEffect, useRef, useState } from "react";
import { useCounter, useFetch } from "../../hooks";
import { Blockquote, Loader } from "../03-ejercicios/components";

export const Layout = () => {

  const { counter, incrementar } = useCounter(1);
  const { data, isError, isLoading, state } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${counter}`
  );
  // El API retorna siempre un array aunque sea un solo dato
  const { author, quote, series } = !!data && data[0];

  const divRef = useRef();
  const [myDiv, setMyDiv] = useState({width: 0, height: 0});

  // La firma y comportamiento general es la misma que useEffect
  // Se ejecuta cuando todo el contenido esta renderizado por completo en el navegador
  // Usar solo para calculos en el diseño de los elementos de DOM.
  useLayoutEffect(() => {
    // Calculamos el nuevo alto y ancho del elemento referenciado. Ya que la cita puede ser mas o menos extensa que la anterior.
    // En este sentido, este código se ejecutará cuando la data cambie
    const {width, height} = divRef.current.getBoundingClientRect();
    setMyDiv({width, height});
  }, [data]);

  return (
    <div className="mt-4">
      <h3>UseLayoutEffect</h3>
      <p>Este hook es muy util cuando necesitamos hacer cálculos con algunos de los elementos renderizados en el DOM. Es muy común querer calcular la altura de los elementos, sin embargo, en muchas ocasiones fracasamos ya que no termina de renderizar todo su contenido interno, dando como resultados valores incorrectos</p>
      <code>{JSON.stringify(myDiv)}</code>
      <div style={{'maxWidth': '500px'}} ref={divRef}>
        {/* Se recomienda que los elementos sitados dentro de las condiciones sean simples, si son más de 3 lineas, se recomienda encapsular en un componente
        En REACT el código debe ser fácil de leér y escribir */}
        {isLoading ? <Loader /> : <Blockquote author={author} quote={quote} />}
      </div>  
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
