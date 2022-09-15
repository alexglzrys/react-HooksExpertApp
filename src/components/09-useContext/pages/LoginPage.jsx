import { useContext } from "react"
import { UserContext } from "../context/UserContext"

export const LoginPage = () => {

  // Usar la información compartida por el contexto UserContext
  // El hook useContext retorna el valor o valores que proveé el contexto seleccionado
  const {user, setUserInfo} = useContext(UserContext);

  // Info Dummy que se genera cuando el usuario está autenticado
  const userInfo = {
    id: 1,
    name: 'Alejandro González',
    email: 'alexglzrys@gmail.com'
  }

  return (
    <>
      <h4>Login Page</h4>
      {user && <pre>{JSON.stringify(user, null, 3)}</pre>}
      <button className="btn btn-primary mt-4" onClick={() => setUserInfo(userInfo)}>Autenticar</button>
    </>

  )
}
