import Link from "next/link";
import { LoginForm } from "../../organisms/auth/LoginForm";

export const LoginTemplate = () => {
  return (
    <div className="min-h-screen flex items-center justify-center h-screen bg-gradient-to-b from-blue-200 to-white">
      <nav className="flex justify-between items-center px-6 py-4">
        <Link href="/" className="text-blue-600 text-xl font-semibold">
          VolunteerConnect
        </Link>
        <div className="flex gap-4"></div>
      </nav>
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
