import { LoginForm } from "../../organisms/auth/LoginForm";

export const LoginTemplate = () => {
  return (
    <div className="min-h-screen flex  items-center justify-center bg-gray-100">
      <div w-full max-w-md p-6 bg-white rounded-lg shadow-md>
        <p>inicia sesion</p>
        <LoginForm />
      </div>
    </div>
  );
};
