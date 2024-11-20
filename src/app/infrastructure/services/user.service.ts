import { useSession } from "next-auth/react";

export const useAuthService = () => {
    const { data: session, status } = useSession();

    const isAuthenticated = status === "authenticated";
    const user = session?.user;

    return {
        isAuthenticated,
        user: {
            id: user?.id, // ID del usuario
            name: user?.name, // Nombre del usuario
            email: user?.email, // Correo del usuario
            role: user?.role, // Rol del usuario
            photo: user?.photo, // Foto del usuario
            token: user?.token, // Token de sesión del usuario
        },
    };
};
