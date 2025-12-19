import Header from "@/components/header/page";
import Footer from "@/components/footer/page";
import { Metadata } from "next";
import { UserProvider } from "@/providers/user-provider/user-provider";
import { getUser } from "@/services/get-user";
import { FC, PropsWithChildren } from "react";
import { FavoriteProvider } from "@/providers/favorite-provider/favorite-provider";

export const metadata: Metadata = {
  title: "Tennis shop",
  description: "tennis items",
};

export const Layout: FC<PropsWithChildren> = async ({ children }) => {
  const { data } = await getUser();

  return (
    <UserProvider user={data ?? null}>
      <FavoriteProvider>
        <Header />
        {children}
        <Footer />
      </FavoriteProvider>
    </UserProvider>
  );
};

export default Layout;
