"use server";

import { BASE_API_URL } from "@/services/constants";
import { LoginState } from "@/types/LoginState";
import { cookies } from "next/headers";
import { parseSetCookie } from "@/helpers/parse-set-cookies";

export const loginAction = async (state: LoginState, formData: FormData) => {
  const login = formData.get("login")?.toString() ?? "";
  const password = formData.get("password")?.toString() ?? "";

  const res = await fetch(`${BASE_API_URL}/auth/login`, {
    credentials: "include",
    method: "POST",
    body: JSON.stringify({ login, password }),
    headers: { "Content-Type": "application/json" },
  });

  if (res.status !== 200) {
    return { error: "invalid login or password" };
  }

  const cookiesStore = await cookies();
  const resultCookiesHeader = res.headers.getSetCookie();

  if (resultCookiesHeader) {
    const parsed = parseSetCookie(resultCookiesHeader);

    for (const cookie of parsed) {
      cookiesStore.set(cookie.name, cookie.value, cookie.options);
    }
  }

  return { error: "", redirectTo: "/" };
};
