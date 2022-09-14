export const todoReducer = (initialState, action) => {
    switch (action.type) {
        case '[TODO] Add Todo':
            // Evitar mutar el estado actual de la aplicación
            // Retornar un nuevo estado, respetando su tipo original (puede ser un arreglo, objeto, tipo primitivo, etc.)
            return [...initialState, action.payload];
        case 'ABC':
            // ! Es normal que durante el desarrollo, no se tenga definida la lógica de cada tarea en el reducer. Por tanto, se sugiere retornar un Error para que en consola nos avise y no demos por hecho que la tarea esta completada
            throw new Error('Action.type === ABC no esta implementada');
        default:
            return initialState;
    }
}