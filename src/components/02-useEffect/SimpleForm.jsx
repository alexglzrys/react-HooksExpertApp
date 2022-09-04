import React, { useEffect, useState } from "react";
import { Messages } from "./Messages";

export const SimpleForm = () => {
  // Estado inicial del formualario
  const [formState, setFormState] = useState({
    username: "alejandro",
    email: "alex@gmail.com",
  });

  // Desestructurar el estado para un acceso más limpio a las propiedades del mismo
  const { username, email } = formState;

  // useEffect permite disparar efectos secundarios en el componente.
  // Generalmente se le usa para llamadas API, o disparar una acción cuando alguna propiedad cambia de valor, se desmonta el componente, se renderiza (redibuja por actualización), o se monta por primera y unica vez.
  // Lo anterior depende de las dependencias enviadas al useEffect como sendundo parámetro
  // React recomienda un useEffect para cada caso a controlar, es decir, deben estar encargados de una tarea en particular
  // La regla de oro es que durante el montaje, TODOS los useEffect se disparan

  // solo se dispara una sola vez (cuando es montado)
  useEffect(() => {
    console.log("useEffect called");
  }, []);

  // Se ejecuta solo cuando el estado cambia
  useEffect(() => {
    console.log("FormState change");
  }, [formState]);

  // Se dispara solo cuando el valor del email cambia
  useEffect(() => {
    console.log("Email changed");
  }, [email]);


  // función para controlar los inputs del formulario
  const handleInputChange = ({ target }) => {
    // Considerar el nombre del control de formularioo y su respectivo valor
    const { name, value } = target;
    // cambiar el estado del formulario
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div className="mt-4">
      <h3>Simple Form</h3>
      {username === "jsconestilo" && <Messages />}
      <form>
        <div className="mb-2">
          <input
            type="text"
            name="username"
            id="username"
            className="form-control"
            placeholder="username"
            value={username}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <input
            type="email"
            name="email"
            id="email"
            className="form-control"
            placeholder="usuario@correo.com"
            value={email}
            onChange={handleInputChange}
          />
        </div>
      </form>
    </div>
  );
};
