"use client";
import { Button, Input, PasswordInput } from "amvasdev-ui";
import { Lock, Mail } from "lucide-react";
import Link from "next/link";
import Card from "@/components/Card";
import { REGISTER_LINK } from "@/constants/navLinks";

const LoginForm = () => (
  <Card border contentClassName="flex flex-col gap-4 text-center">
    <h2 className="text-2xl text-center font-bold">Iniciar Sesión</h2>

    <form className="flex flex-col gap-4">
      {/* Email Input */}
      <Input
        id="email"
        label="Correo Electrónico"
        type="email"
        placeholder="correo@institucion.edu"
        leftIcon={<Mail className="size-4" />}
        required
      />

      {/* Password Input */}
      <PasswordInput
        id="password"
        label="Contraseña"
        placeholder="••••••••"
        leftIcon={<Lock className="size-4" />}
        required
      />

      {/* Submit Button */}
      <Button variant="primary" className="w-full mt-2">
        Iniciar Sesión
      </Button>
      <p className="text-sm">
        ¿No tienes cuenta?{" "}
        <Link href={REGISTER_LINK} className="link link-primary font-medium">
          Crea una aquí
        </Link>
      </p>
    </form>
  </Card>
);

export default LoginForm;
