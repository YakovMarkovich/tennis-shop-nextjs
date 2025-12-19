"use client";

import { IUser } from "@/types/user";
import { createContext, FC, PropsWithChildren } from "react";

export const UserContext = createContext<IUser | null>(null);

type Props = {
  user: IUser | null;
} & PropsWithChildren;

export const UserProvider: FC<Props> = ({ user, children }) => {
  return <UserContext value={user}>{children}</UserContext>;
};
