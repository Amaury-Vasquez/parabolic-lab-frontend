"use client";
import { useMutation } from "@tanstack/react-query";
import { useCookies } from "react-cookie";
import { createEscenario } from "@/fetchers/escenarios";
import { ACCESS_TOKEN_COOKIE } from "@/constants/auth";

export function useCreateEscenario() {
  const [cookies] = useCookies([ACCESS_TOKEN_COOKIE]);
  const token = cookies[ACCESS_TOKEN_COOKIE];

  return useMutation({
    mutationFn: (data: Parameters<typeof createEscenario>[1]) =>
      createEscenario(token, data),
  });
}