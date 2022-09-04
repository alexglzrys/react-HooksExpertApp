import { useState } from "react";

// Custom Hook para inputs controlados.
// Podemos usarlo en cualquier formulario para desinflar la lógica de estar controlando todos sus inputs
export const useForm = (initialState = {}) => {
  const [formState, setFormState] = useState(initialState);

  const handleInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // utilidad para resetear el estado inicial de los inputs controlados
  const handleResetForm = (event) => {
    setFormState(initialState);
  }

  return {
    formState,
    handleInputChange,
    handleResetForm,
    // Necesario si deseamos que los componentes clientes, accedan de forma directa a las propiedades del estado
    ...formState,
  };
};
