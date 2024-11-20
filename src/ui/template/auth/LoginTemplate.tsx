import { LoginForm } from "@/ui/organisms"
import Link from "next/link"

export const LoginTemplate = () => {
    return (
      <div className="min-h-screen flex items-center justify-center h-screen bg-gradient-to-b from-blue-200 to-white">
        <nav className="absolute top-0 left-0 px-6 py-4">
          <Link href="/" className="text-sky-500  ">
            Volver al inicio
          </Link>
        </nav>
        <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
          <LoginForm />
          <div className="text-center">
            <p className="text-sky-500"> ¿Olvidaste tu contraseña?</p>
            <p>
              ¿No tienes cuenta?
              <span className="text-sky-500"> Regístrate aquí </span>
            </p>
          </div>
        </div>
      </div>
    );
}