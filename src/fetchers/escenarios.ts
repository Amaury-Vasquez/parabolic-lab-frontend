import { get, post } from "@/services/api";
import { Scenario } from "@/types/scenario";

export const ESCENARIOS_SALON_QUERY_KEY = (salonId: string) => [
  "escenarios",
  salonId,
];

export async function fetchEscenariosBySalon(
  token: string,
  salonId: string
): Promise<Scenario[]> {
  return get<Scenario[]>(`/escenarios/?idsalon=${salonId}`, { token });
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