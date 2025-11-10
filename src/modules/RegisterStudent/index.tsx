"use client";
import { Button, Input, PasswordInput } from "amvasdev-ui";
import { Hash, Lock, Mail, User } from "lucide-react";
import Card from "@/components/Card";

interface RegisterStudentProps {
  institutionId: string;
}

const RegisterStudent = ({ institutionId }: RegisterStudentProps) => (
  <div className="flex items-center justify-center px-4 py-12">
    <div className="w-full max-w-2xl">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-2">Registro de Alumno</h1>
        <p className="text-base-content/70">
          ID de Institución:{" "}
          <span className="font-mono font-bold">{institutionId}</span>
        </p>
      </div>

      <Card border>
        <form className="space-y-4">
          {/* Email */}
          <Input
            id="email"
            label="Correo Electrónico"
            type="email"
            placeholder="correo@ejemplo.com"
            leftIcon={<Mail className="size-4" />}
            required
          />

          {/* Nombre */}
          <Input
            id="nombre"
            label="Nombre"
            type="text"
            placeholder="María"
            leftIcon={<User className="size-4" />}
            required
          />

          {/* Apellido Paterno */}
          <Input
            id="apellidoPaterno"
            label="Apellido Paterno"
            type="text"
            placeholder="García"
            leftIcon={<User className="size-4" />}
            required
          />

          {/* Apellido Materno */}
          <Input
            id="apellidoMaterno"
            label="Apellido Materno"
            type="text"
            placeholder="Rodríguez"
            leftIcon={<User className="size-4" />}
          />

          {/* Matrícula */}
          <Input
            id="matricula"
            label="Matrícula"
            type="text"
            placeholder="2024030123"
            leftIcon={<Hash className="size-4" />}
          />

          {/* Contraseña */}
          <PasswordInput
            id="contrasena"
            label="Contraseña"
            placeholder="••••••••"
            leftIcon={<Lock className="size-4" />}
            required
          />

          {/* Submit Button */}
          <Button type="submit" variant="primary" className="w-full mt-6">
            Registrar Alumno
          </Button>
        </form>
      </Card>
    </div>
  </div>
);

export default RegisterStudent;
