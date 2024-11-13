"use client";
import Link from "next/link";
import { Button } from "../ui/atoms/button";

export default function Component() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-200 to-white">
      <nav className="flex justify-between items-center px-6 py-4">
        <Link href="/" className="text-blue-600 text-xl font-semibold">
          VolunteerConnect
        </Link>
        <div className="flex gap-4">
          <Button variant="ghost" asChild>
            <Link href="/login">Iniciar sesión</Link>
          </Button>
          <Button
            variant="default"
            className="bg-black text-white hover:bg-gray-800"
            asChild
          >
            <Link href="/register">Registrarse</Link>
          </Button>
        </div>
      </nav>

      <main className="container mx-auto px-6 py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Conecta, Colabora, Cambia el Mundo
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
          Únete a nuestra comunidad de voluntarios y organizadores. Encuentra
          proyectos que te apasionen o creá los tuyos propios para hacer una
          diferencia en tu comunidad.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            className="bg-black text-white hover:bg-gray-800 text-lg px-8 py-6"
            asChild
          >
            <Link href="/projects">Explorar Proyectos</Link>
          </Button>
          <Button variant="outline" className="text-lg px-8 py-6" asChild>
            <Link href="/register-org">Comenzar como Organizador</Link>
          </Button>
        </div>
      </main>
    </div>
  );
}
