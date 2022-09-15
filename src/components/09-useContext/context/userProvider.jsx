import { useState } from "react"
import { UserContext } from "./UserContext"

// Valor que provee nuestro contexto
/*const userInfo = {
    id: 1,
    name: 'Alejandro González',
    email: 'alexglzrys@gmail.com'
}*/

/**
 * Los contextos proveen de información
 * 
 * Generar el Provider para el UserContext
 */
export const UserProvider = ({ children }) => {
    // En muchas ocasiones el valor del contexto se genera bajo demanda. Por ejemplo la info del usuario tras logearse correctamente
    const [user, setUser] = useState(null);

    const setUserInfo = (new_user) => {
        setUser(new_user);
    }

    return (
        <UserContext.Provider value={{ user, setUserInfo}}>
            {/* Los hijos que tendrán acceso al valor que proveé el contexto */}
            { children }
        </UserContext.Provider>
    )
}