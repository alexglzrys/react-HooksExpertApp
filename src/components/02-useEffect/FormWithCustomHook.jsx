import { useForm } from "../../hooks/useForm";

export const FormWithCustomHook = () => {
  // Inicializar el estado del formulario y darlo a conocer al custom hook
  // El hook internamente hace que los inputs de este formulario sean controlados
  const {username, email, password, handleInputChange, handleResetForm} = useForm({
    username: "",
    email: "",
    password: "",
  });

  return (
    <div className="mt-4">
      <h3>Form with custom Hook</h3>
      <form>
        <div className="mb-2">
          <input
            type="text"
            name="username"
            className="form-control"
            placeholder="username"
            value={username}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-2">
          <input
            type="email"
            name="email"
            className="form-control"
            placeholder="usuario@correo.com"
            value={email}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-2">
          <input
            type="password"
            name="password"
            className="form-control"
            placeholder="Contraseña"
            value={password}
            onChange={handleInputChange}
          />
        </div>
        <button type="reset" className="btn btn-danger" onClick={handleResetForm}>Limpiar</button>
      </form>
    </div>
  );
};
