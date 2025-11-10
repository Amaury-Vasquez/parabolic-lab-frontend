"use client";
import { Button, Input, PasswordInput } from "amvasdev-ui";
import { GraduationCap, Lock, Mail, User } from "lucide-react";
import Card from "@/components/Card";

interface RegisterTeacherProps {
  institutionId: string;
}

const RegisterTeacher = ({ institutionId }: RegisterTeacherProps) => (
  <div className="flex items-center justify-center px-4 py-12">
    <div className="w-full max-w-2xl">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-2">Registro de Docente</h1>
        <p className="text-base-content/70">
          ID de Institución:
          <strong>{` ${institutionId}`}</strong>
        </p>
      </div>

      <Card border>
        <form className="space-y-4">
          {/* Nombre */}
          <Input
            id="nombre"
            label="Nombre"
            type="text"
            placeholder="Carlos"
            leftIcon={<User className="size-4" />}
            required
          />

          {/* Email */}
          <Input
            id="email"
            label="Correo Electrónico"
            type="email"
            placeholder="cmartinez@ejemplo.com"
            leftIcon={<Mail className="size-4" />}
            required
          />

          {/* Apellido Paterno */}
          <Input
            id="apellidoPaterno"
            label="Apellido Paterno"
            type="text"
            placeholder="Martínez"
            leftIcon={<User className="size-4" />}
            required
          />

          {/* Apellido Materno */}
          <Input
            id="apellidoMaterno"
            label="Apellido Materno"
            type="text"
            placeholder="López"
            leftIcon={<User className="size-4" />}
          />

          {/* Grado Académico */}
          <Input
            id="gradoAcademico"
            label="Grado Académico"
            type="text"
            placeholder="Maestría en Física"
            leftIcon={<GraduationCap className="size-4" />}
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
            Registrar Docente
          </Button>
        </form>
      </Card>
    </div>
  </div>
);

export default RegisterTeacher;
