"use client";
import { useMutation } from "@tanstack/react-query";
import { useCookies } from "react-cookie";
import { updateEscenario } from "@/fetchers/escenarios";
import { ACCESS_TOKEN_COOKIE } from "@/constants/auth";

export function useUpdateEscenario() {
  const [cookies] = useCookies([ACCESS_TOKEN_COOKIE]);
  const token = cookies[ACCESS_TOKEN_COOKIE];

  return useMutation({
    mutationFn: (data: Parameters<typeof updateEscenario>[2] & { idescenario: string }) => {
      const { idescenario, ...updateData } = data;
      return updateEscenario(token, idescenario, updateData);
    },
  });
}
