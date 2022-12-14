export const todoReducer = (initialState, action) => {
    switch (action.type) {
        case '[TODO] Add Todo':
            // Evitar mutar el estado actual de la aplicación
            // Retornar un nuevo estado, respetando su tipo original (puede ser un arreglo, objeto, tipo primitivo, etc.)
            return [...initialState, action.payload];

        case '[TODO] Remove Todo':
            // Esto es válido, ya que filter retorna un nuevo arreglo con los elementos que cumplen la condición
            return initialState.filter(todo => todo.id !== action.payload);
        
        case '[TODO] Toggle Todo':
            // Map retorna un nuevo arreglo, si el id no coincide, se retorna el todo como tal, caso contrario, se retorna un objeto con la data del todo pero modificando su propiedad done
            return initialState.map(todo => todo.id === action.payload ? {...todo, done: !todo.done } : todo);
        case 'ABC':
            // ! Es normal que durante el desarrollo, no se tenga definida la lógica de cada tarea en el reducer. Por tanto, se sugiere retornar un Error para que en consola nos avise y no demos por hecho que la tarea esta completada
            throw new Error('Action.type === ABC no esta implementada');

        default:
            return initialState;
    }
}