"use client";
import { Button } from "amvasdev-ui";
import { Plus } from "lucide-react";
import { useState } from "react";
import ClassroomCard from "./ClassroomCard";
import JoinClassroomModal from "@/components/JoinClassroomModal";
import { SALONES } from "@/constants/salones";

const Alumno = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="p-4 md:p-8">
      {/* Header Section */}
      <div className="flex flex-col justify-between items-start mb-8 sm:items-center gap-4 sm:flex-row">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold">Mis Salones</h1>
          <p className="mt-1">Accede a tus salones y revisa tu progreso</p>
        </div>
        <Button
          variant="primary"
          onClick={() => setIsModalOpen(true)}
          className="max-sm:w-full"
        >
          <Plus size="16" strokeWidth="2.5" />
          Unirse a un Salón
        </Button>
      </div>

      {/* Classrooms Grid */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {SALONES.map((salon, index) => (
          <ClassroomCard key={index} salon={salon} />
        ))}
      </div>

      {/* Join Classroom Modal */}
      <JoinClassroomModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default Alumno;
