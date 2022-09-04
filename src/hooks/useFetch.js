import { useEffect, useState } from "react";

// Custom Hook para peticiones HTTP
export const useFetch = (url) => {
  // Estado inicial de este custom hook
  const [state, setState] = useState({
    data: null,
    isLoading: true,
    isError: null,
  });

  // Función asincrona para establecer comunicación con la API
  const getData = async (url) => {
    // Nueva petición
    setState({ ...state, isLoading: true });
    try {
      const response = await fetch(url);
      const data = await response.json();
      // Actualizar el estado con la data recuperada
      setState({
        data,
        isLoading: false,
        isError: null,
      });
    } catch (e) {
      // Sucedió un error, por tanto es importante actualizar el estado
      setState({
        data: null,
        isLoading: false,
        isError: e.getMessage(),
      });
    }
  };

  // Disparar efecto secundario solo si la URL cambia
  useEffect(() => {
    getData(url);
  }, [url]);

  // Retornar valores al cliente de este hook
  return {
    state,
    ...state,
  }
};
