import React, { useEffect, useState } from "react";

export const Messages = () => {
  // Estado inicial del componente
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Referencia al listener, para poder crearlo y removerlo
    const onMouseEvent = ({ x, y }) => {
      console.log(":) listener creado");
      setCoords({ x, y });
    };
    // Crear un listener cuando el componente se monta
    window.addEventListener("mousemove", onMouseEvent);

    // Retornar una función en useEffect, es el equivalente al ComponentWillUnmount
    return () => {
      console.log("Messages desmontado");
      // Si no controlamos la destrucción del listener, este queda en memoria y cuando se monte nuevamente el componente, se creará otro listener, lo que conlleva a una fuga importante de momoria
      window.removeEventListener("mousemove", onMouseEvent);
    };
  }, []);

  return (
    <div className="alert alert-danger">
      <h4 className="alert-heading">Upps</h4>
      <p>El usuario ya existe</p>
      <p className="mt-0">{JSON.stringify(coords)}</p>
    </div>
  );
};
