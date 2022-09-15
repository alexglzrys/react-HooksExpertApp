import { UserContext } from "./UserContext"

// Valor que provee nuestro contexto
const userInfo = {
    id: 1,
    name: 'Alejandro González',
    email: 'alexglzrys@gmail.com'
}

/**
 * Los contextos proveen de información
 * 
 * Generar el Provider para el UserContext
 */
export const UserProvider = ({ children }) => {
    return (
        <UserContext.Provider value={userInfo}>
            {/* Los hijos que tendrán acceso al valor que proveé el contexto */}
            { children }
        </UserContext.Provider>
    )
}