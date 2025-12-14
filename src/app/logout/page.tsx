"use client";

import { BASE_API_URL } from "@/services/constants";
import { useTransition } from "react";

const handleLogout = async () => {
  await fetch(`${BASE_API_URL}/auth/logout`, {
    method: "DELETE",
    credentials: "include",
  });

  location.assign("/");
};

const Logout = () => {
  const [isPending, startTransition] = useTransition();

  return (
    <button disabled={isPending} onClick={() => startTransition(handleLogout)}>
      logout
    </button>
  );
};

export default Logout;
