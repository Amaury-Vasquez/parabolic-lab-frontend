"use client";
import { Input, Modal } from "amvasdev-ui";
import { useState } from "react";
import useModalFormConfirm from "@/hooks/useModalFormConfirm";
import { useCreateSalon } from "@/queries/useCreateSalon";

interface CreateClassroomModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CreateClassroomModal = ({ isOpen, onClose }: CreateClassroomModalProps) => {
  const [classroomName, setClassroomName] = useState("");
  const { formRef, handleConfirmClick } = useModalFormConfirm();
  const { mutate: crearSalon, isPending } = useCreateSalon();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    crearSalon(
      { nombresalon: classroomName },
      {
        onSuccess: () => {
          setClassroomName("");
          onClose();
        },
      }
    );
  };

  const handleCancel = () => {
    setClassroomName("");
    onClose();
  };

  return isOpen ? (
    <Modal
      onClose={handleCancel}
      title="Crear Nuevo Salón"
      confirmButton={{
        children: isPending ? "Creando..." : "Crear Salón",
        variant: "primary",
        onClick: handleConfirmClick,
        disabled: classroomName.trim() === "" || isPending,
      }}
    >
      <form
        onSubmit={handleSubmit}
        className="flex flex-col py-4 gap-4"
        ref={formRef}
      >
        <Input
          id="classroom-name"
          label="Nombre del Salón"
          placeholder="Física 101"
          value={classroomName}
          onChange={(e) => setClassroomName(e.currentTarget.value)}
          required
        />
      </form>
    </Modal>
  ) : null;
};

export default CreateClassroomModal;