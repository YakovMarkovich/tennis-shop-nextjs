import { FC } from "react";
import NextTopLoader from "nextjs-toploader";
import { Metadata } from "next";
import "./global.css";

export const metadata: Metadata = {
  title: "Tennis Store",
  description: "Tennis Store Descriptin",
};

const RootLayout: FC<LayoutProps<"/">> = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <NextTopLoader showSpinner={false} />
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
