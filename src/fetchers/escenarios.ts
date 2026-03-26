import { get, post, patch, del } from "@/services/api";
import { Scenario } from "@/types/scenario";

export const ESCENARIOS_SALON_QUERY_KEY = (salonId: string) => ["escenarios", salonId];
export const MIS_ESCENARIOS_QUERY_KEY = ["escenarios", "mis"];

export async function fetchEscenariosBySalon(
  token: string,
  salonId: string
): Promise<Scenario[]> {
  return get<Scenario[]>(`/escenarios/?idsalon=${salonId}`, { token });
}

export async function fetchMisEscenarios(token: string): Promise<Scenario[]> {
  return get<Scenario[]>("/escenarios/me", { token });
}

export async function createEscenario(
  token: string,
  data: {
    idsalon: string;
    nombre: string;
    descripcion?: string;
    niveldificultad: string;
    tipoescenario: string;
    objetivosaprendizaje?: string;
    instrucciones?: string;
    tiempolimite?: number;
    intentospermitidos?: number;
    configuracionescenario?: Record<string, unknown>;
  }
): Promise<Scenario> {
  return post<Scenario>("/escenarios/", data, { token });
}

export async function updateEscenario(
  token: string,
  idescenario: string,
  data: Partial<{
    nombre: string;
    descripcion: string;
    niveldificultad: string;
    tipoescenario: string;
    objetivosaprendizaje: string;
    instrucciones: string;
    tiempolimite: number;
    intentospermitidos: number;
    configuracionescenario: Record<string, unknown>;
    activo: boolean;
  }>
): Promise<Scenario> {
  return patch<Scenario>(`/escenarios/${idescenario}`, data, { token });
}

export async function deleteEscenario(
  token: string,
  idescenario: string
): Promise<void> {
  return del<void>(`/escenarios/${idescenario}`, { token });
}