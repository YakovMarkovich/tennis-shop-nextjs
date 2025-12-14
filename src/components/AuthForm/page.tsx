"use client";

import { useActionState, useEffect } from "react";
import { LoginState } from "@/types/LoginState";

const INITIAL_STATE = {
  error: undefined,
  redirectTo: undefined,
};

type Props = {
  action: (state: LoginState, formData: FormData) => Promise<LoginState>;
  buttonLabel: string;
};

export const AuthForm = ({ action, buttonLabel }: Props) => {
  const [state, formAction, isPending] = useActionState<LoginState, FormData>(
    action,
    INITIAL_STATE
  );

  const { error, redirectTo } = state;

  useEffect(() => {
    if (redirectTo) {
      location.assign(redirectTo);
    }
  }, [redirectTo]);

  return (
    <form action={formAction}>
      <div>
        <label htmlFor="login">Login:</label>
        <input name="login" type="text" required />
      </div>

      <div>
        <label htmlFor="password">Password:</label>
        <input name="password" type="password" required />
      </div>

      {error && <div style={{ color: "red" }}>{error}</div>}

      <button disabled={isPending}>{buttonLabel}</button>
    </form>
  );
};
