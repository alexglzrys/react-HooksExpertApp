import { createContext } from "react";

/**
 * Crear un contexto global para nuestra Aplicación
 * 
 * Un contexto es como una zona dónde se almacena información
 * misma que puede ser consultada en varias partes o componentes de nuestra aplicación.
 * 
 * Los contextos resuelven el problema de querer compartir información entre componentes que no guardan una relación directa.
 * 
 * En una aplicación pueden existir N cantidad de contextos
 * cada uno almacenando información relacionada con una caracteristica en especifico
 * Datos de usuario, carrito de compras, etc
 */
export const UserContext = createContext();