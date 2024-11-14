"use client";
import { Card, CardContent } from "@/components/ui/card";
import { signOut, useSession } from "next-auth/react";
import Avatar from "@mui/material/Avatar";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/app/ui/organisms/dropdown-menu";
import { Download, Plus, ChevronDown } from "lucide-react";
import { Input } from "@/app/ui/atoms/input";
import { Button } from "@/app/ui/atoms/button";

export default function Component() {
  const { data: session } = useSession();

  const handleLogout = () => {
    signOut();
  };

  // Accede a los datos de usuario dentro de session.user

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="border-b bg-white">
        <div className="flex h-16 items-center px-6 justify-between">
          <div className="flex items-center gap-4">
            <h1 className="text-xl font-semibold">VolunteerConnect</h1>
            <span className="text-gray-500">Dashboard de Proyectos</span>
          </div>
          <div className="flex items-center gap-3">
            <Button size="sm" className="flex items-center gap-2">
              <Download className="h-4 w-4" />
              Descargar Reporte
            </Button>
            <Button size="sm" className="flex items-center gap-2">
              <Plus className="h-4 w-4" />
              Nuevo Proyecto
            </Button>
            <Avatar src={session?.user.photo} />
            <DropdownMenu>
              <h4>{session?.user.role}</h4>
              <DropdownMenuTrigger asChild>
                <Button
                  onClick={handleLogout}
                  variant="ghost"
                  size="sm"
                  className="gap-2"
                >
                  <h1>{session?.user.email}</h1>
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-40">
                <DropdownMenuItem>Mi Perfil</DropdownMenuItem>
                <DropdownMenuItem>Cerrar Sesión</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>

      <div className="flex">
        <aside className="w-60 bg-gray-100 min-h-screen p-4">
          <nav className="space-y-2">
            <a
              href="#"
              className="block px-4 py-2 rounded hover:bg-gray-200 text-gray-700"
            >
              Proyectos
            </a>
            <a
              onClick={handleLogout}
              className="block px-4 py-2 rounded hover:bg-gray-200 text-gray-700"
            >
              Cerrar Sesión
            </a>
          </nav>
        </aside>
        <main className="flex-1 p-6">
          <div className="grid gap-4 md:grid-cols-4 mb-6">
            <Card>
              <CardContent className="p-6">
                <div className="text-sm font-medium text-gray-500">
                  Total Proyectos
                </div>
                <div className="text-2xl font-bold mt-2">3</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="text-sm font-medium text-gray-500">
                  Proyectos Activos
                </div>
                <div className="text-2xl font-bold mt-2">3</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="text-sm font-medium text-gray-500">
                  Organizadores
                </div>
                <div className="text-2xl font-bold mt-2">2</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="text-sm font-medium text-gray-500">
                  Próximo Proyecto
                </div>
                <div className="text-sm text-gray-500 mt-2">Invalid Date</div>
              </CardContent>
            </Card>
          </div>

          <div className="bg-white rounded-lg border shadow-sm">
            <div className="p-6 border-b">
              <h2 className="text-lg font-semibold">Lista de Proyectos</h2>
            </div>
            <div className="p-6">
              <div className="mb-6">
                <Input
                  placeholder="Buscar proyectos..."
                  className="max-w-md"
                  type="search"
                />
              </div>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Título</TableHead>
                    <TableHead>Descripción</TableHead>
                    <TableHead>Fecha de Inicio</TableHead>
                    <TableHead>Fecha de Fin</TableHead>
                    <TableHead>Estado</TableHead>
                    <TableHead>Organizador</TableHead>
                    <TableHead>Acciones</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">
                      Limpieza de Playa
                    </TableCell>
                    <TableCell>Jornada de limpieza en la playa local</TableCell>
                    <TableCell>14/8/2023</TableCell>
                    <TableCell>15/8/2023</TableCell>
                    <TableCell>
                      <span className="inline-flex items-center rounded-full px-2 py-1 text-xs font-medium bg-green-100 text-green-700">
                        Activo
                      </span>
                    </TableCell>
                    <TableCell>Juan Pérez</TableCell>
                    <TableCell>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          Editar
                        </Button>
                        <Button variant="destructive" size="sm">
                          Eliminar
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">
                      Taller de Reciclaje
                    </TableCell>
                    <TableCell>
                      Enseñar técnicas de reciclaje a la comunidad
                    </TableCell>
                    <TableCell>3/8/2023</TableCell>
                    <TableCell>N/A</TableCell>
                    <TableCell>
                      <span className="inline-flex items-center rounded-full px-2 py-1 text-xs font-medium bg-green-100 text-green-700">
                        Activo
                      </span>
                    </TableCell>
                    <TableCell>Ana García</TableCell>
                    <TableCell>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          Editar
                        </Button>
                        <Button variant="destructive" size="sm">
                          Eliminar
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">
                      Reforestación Urbana
                    </TableCell>
                    <TableCell>Plantar árboles en zonas urbanas</TableCell>
                    <TableCell>4/10/2023</TableCell>
                    <TableCell>6/10/2023</TableCell>
                    <TableCell>
                      <span className="inline-flex items-center rounded-full px-2 py-1 text-xs font-medium bg-green-100 text-green-700">
                        Activo
                      </span>
                    </TableCell>
                    <TableCell>Juan Pérez</TableCell>
                    <TableCell>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          Editar
                        </Button>
                        <Button variant="destructive" size="sm">
                          Eliminar
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
