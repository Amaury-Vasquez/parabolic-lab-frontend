import ScenarioEditor from "@/modules/ScenarioEditor";

interface PageProps {
  params: Promise<{
    classroomId: string;
  }>;
}

export default async function NuevoEscenarioPage({ params }: PageProps) {
  const { classroomId } = await params;

  return <ScenarioEditor classroomId={classroomId} />;
}