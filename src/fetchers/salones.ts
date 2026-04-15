import { get, post } from "@/services/api";
import { Salon } from "@/types/salon";

export const MY_SALONES_QUERY_KEY = ["salones", "me"];

export interface SalonProgresoEstudiante {
  idalumno: string;
  nombre: string;
  apellidopaterno: string;
  promedio_puntuacion: number;
  escenarios_completados: number;
  total_intentos: number;
  tiempo_total_minutos: number;
  mejor_puntuacion: number;
}

export interface SalonProgresoResponse {
  estudiantes: SalonProgresoEstudiante[];
}

export const SALON_PROGRESO_QUERY_KEY = (salonId: string) => [
  "salones",
  salonId,
  "progreso",
];

export async function fetchMySalones(token: string): Promise<Salon[]> {
  return get<Salon[]>("/salones/me", { token });
}

export async function fetchSalonProgreso(
  token: string,
  salonId: string
): Promise<SalonProgresoEstudiante[]> {
  const data = await get<SalonProgresoResponse>(
    `/salones/${salonId}/progreso`,
    { token }
  );
  return data.estudiantes;
}

export async function createSalon(
  token: string,
  data: { nombresalon: string }
): Promise<Salon> {
  return post<Salon>("/salones/", data, { token });
}