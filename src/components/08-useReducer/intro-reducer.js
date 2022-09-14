// 1. Estado inicial de la aplicación
const initialState = [
    {
        id: 1,
        todo: 'Recolectar la basura',
        done: false
    }
];

// 2. Función Reducer

// Siempre recibe el estado actual, y la acción a ejecutar
// Siempre debe retornar un nuevo estado
// * Debe ser una función pura, no debe disparar efectos secundarios (llamar a otras funciones para realizar la tarea), debe ser sincrona, y no debe llamar al LocalStorage o SessionStorage (estas son funciones que pueden causar un error).  
const todoReducer = (state = initialState, action = {}) => {
    // ! Internamente el reducer tiene un mapa (estructura condicional) con las acciones que puede ejecutar. Si la acción no se encuentra, simplemente se retorna el estado actual
    if (action.type === '[TODO] add todo') {
        // ? El estado no se debe mutar, (prohibido hacer push), siempre se debe retornan un nuevo estado.
        // * La destructuración es el candidato ideal para hacer este tipo de tareas
        return [...state, action.payload];
    }

    return state;
}

// Usar el reducer
let todos = todoReducer();
console.log(todos);

/*****************************************
 * 
 * Agregar un nuevo TODO a mi estado
 * 
 ****************************************/

// Objeto que representa un nuevo todo
const newTodo = {
    id: 2,
    todo: 'Ir a correr al cerro',
    done: false
};

// Accion
// * Representa el qué se debe hacer, y la carga útil (datos) que se necesitan para llevar a cabo dicha acción
const addTodoAction = {
    type: '[TODO] add todo',
    payload: newTodo
}

// Agregar un nuevo todo
// * Invocar al reducer con el estado actual y la acción a ejecutar (Agregar un nuevo todo)
todos = todoReducer(todos, addTodoAction);
console.log(todos);