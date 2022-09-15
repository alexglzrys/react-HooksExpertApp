import { useContext } from "react";
import { UserContext } from "../context/UserContext";

export const HomePage = () => {

  // Usar la información compartida por el contexto UserContext
  // El hook useContext retorna el valor o valores que proveé el contexto
  const {user} = useContext(UserContext);

  return (
    <div>
      <h4>Home Page {user?.name}</h4>
      {user && <pre>{JSON.stringify(user, null, 3)}</pre>}
    </div>
  )
}
