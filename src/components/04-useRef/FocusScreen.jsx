import { useRef } from "react"

export const FocusScreen = () => {

    // Este hook es interesante
    // 1. Principalmente se usa para asociar un elemento en el DOM mediante dicha referencia
    // 2. Otro uso, sirve para conservar valores mutables durante todo el ciclo de vida del componente, es decir, el valor no se perderá cuando el componente se vuelva a renderizar

    // Podemos pasarle un valor inicial, o nulo si es que el valor se le asociará con una referencia hacia un un elemento del DOM, o en su defecto, se le asignará durante un punto en el ciclo de vida o acción por parte del usuario
    const inputRef = useRef();

const setFocus = (event) => {
    // current, apunta al elemento input. Por tanto podemos acceder a sus propiedades y métodos
    // select(), interesante por que hace focus() + seleccionar el contenido del elemento
    inputRef.current.select();
}

  return (
    <div className="mt-4">
        <h3>Focus Screen</h3>
        <input type="text" placeholder="Ingrese su nombre" className="form-control" ref={inputRef} />
        <button className="btn btn-primary mt-2" onClick={setFocus}>Establecer foco</button>
    </div>
  )
}
