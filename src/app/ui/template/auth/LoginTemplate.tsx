import Link from "next/link";
import { LoginForm } from "../../organisms/auth/LoginForm";

export const LoginTemplate = () => {
  return (
    <div className="min-h-screen flex items-center justify-center h-screen bg-gradient-to-b from-blue-50 to-white">
     
      <div className="w-full  max-w-md  p-6  bg-white rounded-lg shadow-md">
        <LoginForm />
        <div className="text-center">
          <p className="text-sky-500"> ⚠️ ¿Olvidaste tu Contrasena?</p>
          <p>
            ¿no tienes cuenta ?
            <span className="text-sky-500"> Registrate aqui </span>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};
