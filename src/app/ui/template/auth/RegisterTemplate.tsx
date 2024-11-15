import Link from "next/link";
import { RegisterForm } from "../../organisms/auth/RegisterForm";

export const RegisterTemplate = () => {
  return (
    <div className="min-h-screen flex items-center justify-center h-screen bg-gradient-to-b from-blue-200 to-white">
      <nav className="absolute top-0 left-0 px-6 py-4">
        <Link href="/" className="text-sky-500  ">
          Volver al inicio
        </Link>
      </nav>
      <div className="w-full max-w-md  p-6 bg-white rounded-lg shadow-md">
        <RegisterForm />
      </div>
    </div>
  );
};
