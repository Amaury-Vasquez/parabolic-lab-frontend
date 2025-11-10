"use client";
import { Button, Input, PasswordInput } from "amvasdev-ui";
import {
  Building2,
  FileKey,
  Lock,
  Mail,
  MapPin,
  Phone,
  School2,
  User,
} from "lucide-react";

const RegisterInstitutionForm = () => (
  <form className="space-y-6">
    {/* Información de la Institución */}
    <div className="divider">Información de la Institución</div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {/* Nombre Institución */}
      <Input
        containerClassName="col-span-2"
        id="nombre-institucion"
        label="Nombre Institución"
        type="text"
        placeholder="Instituto Politécnico Nacional"
        leftIcon={<School2 className="size-4" />}
        required
      />
      {/* CCT */}
      <Input
        id="cct"
        label="Clave de Centro de Trabajo (CCT)"
        type="text"
        placeholder="09DPR0001X"
        leftIcon={<FileKey className="size-4" />}
      />

      {/* Teléfono */}
      <Input
        id="telefono"
        label="Teléfono"
        type="tel"
        placeholder="55 1234 5678"
        leftIcon={<Phone className="size-4" />}
        required
      />
    </div>

    {/* Dirección */}
    <div className="divider">Dirección</div>

    <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
      <Input
        id="calle"
        label="Calle"
        type="text"
        placeholder="Av. Instituto Politécnico Nacional 1936"
        leftIcon={<MapPin className="size-4" />}
        containerClassName="col-span-3"
      />
      <Input
        id="colonia"
        label="Colonia"
        type="text"
        placeholder="Lindavista"
        leftIcon={<MapPin className="size-4" />}
        containerClassName="col-span-2"
      />
      <Input
        id="codigo-postal"
        label="Código Postal"
        type="text"
        placeholder="07738"
        maxLength={5}
        leftIcon={<MapPin className="size-4" />}
      />
      <Input
        id="municipio"
        label="Municipio"
        type="text"
        placeholder="Gustavo A. Madero"
        leftIcon={<Building2 className="size-4" />}
        containerClassName="col-span-2"
      />

      <Input
        id="estado"
        label="Estado"
        type="text"
        placeholder="Ciudad de México"
        leftIcon={<MapPin className="size-4" />}
        containerClassName="col-span-2"
      />
    </div>

    {/* Cuenta de Administrador */}
    <div className="divider">Cuenta de Administrador</div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {/* Nombre Administrador */}
      <Input
        id="admin-nombre"
        label="Nombre"
        type="text"
        placeholder="Juan"
        leftIcon={<User className="size-4" />}
        required
      />

      {/* Apellido Paterno */}
      <Input
        id="admin-apellido-paterno"
        label="Apellido Paterno"
        type="text"
        placeholder="Pérez"
        leftIcon={<User className="size-4" />}
        required
      />

      {/* Apellido Materno */}
      <Input
        id="admin-apellido-materno"
        label="Apellido Materno"
        type="text"
        placeholder="López"
        leftIcon={<User className="size-4" />}
        required
      />
    </div>

    {/* Email Administrador */}
    <Input
      id="admin-email"
      label="Correo Electrónico"
      type="email"
      placeholder="admin@institucion.edu.mx"
      leftIcon={<Mail className="size-4" />}
      required
    />

    {/* Password Administrador */}
    <PasswordInput
      id="admin-password"
      label="Contraseña"
      placeholder="••••••••"
      leftIcon={<Lock className="size-4" />}
      required
    />

    {/* Botones */}
    <div className="card-actions justify-end mt-8">
      <Button type="button" variant="ghost">
        Cancelar
      </Button>
      <Button type="submit" variant="primary">
        Registrar Institución
      </Button>
    </div>
  </form>
);

export default RegisterInstitutionForm;
