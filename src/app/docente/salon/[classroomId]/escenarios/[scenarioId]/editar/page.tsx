"use client";
import { useEscenario } from "@/queries/useEscenario";
import ScenarioEditor from "@/modules/ScenarioEditor";
import { useParams } from "next/navigation";

export default function EditarEscenarioPage() {
  const params = useParams();
  const classroomId = params.classroomId as string;
  const scenarioId = params.scenarioId as string;

  const { data: escenario, isLoading } = useEscenario(scenarioId);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <span className="loading loading-spinner loading-lg" />
      </div>
    );
  }

  return (
    <ScenarioEditor
      classroomId={classroomId}
      scenarioId={scenarioId}
      initialData={escenario}
    />
  );
}