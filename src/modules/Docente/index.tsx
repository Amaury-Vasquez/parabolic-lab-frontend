"use client";
import { Button } from "amvasdev-ui";
import { Plus } from "lucide-react";
import { useState } from "react";
import SalonCard from "./SalonCard";
import CreateClassroomModal from "@/components/CreateClassroomModal";
import { SALONES } from "@/constants/salones";

const Docente = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="p-8">
      {/* Header Section */}
      <div className="flex justify-between items-start mb-8">
        <div>
          <h1 className="text-3xl font-bold">Mis Salones</h1>
          <p className="mt-1">
            Gestiona tus salones, asigna escenarios y monitorea el progreso
          </p>
        </div>
        <Button variant="primary" onClick={() => setIsModalOpen(true)}>
          <Plus size="16" />
          Crear Nuevo Salón
        </Button>
      </div>

      {/* Salones Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {SALONES.map((salon, index) => (
          <SalonCard key={index} salon={salon} />
        ))}
      </div>

      {/* Create Classroom Modal */}
      <CreateClassroomModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default Docente;
