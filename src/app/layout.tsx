import styles from "./layout.module.css";
import Header from "@/components/header/page";
import Footer from "@/components/footer/page";
import { Metadata } from "next";
import NextTopLoader from "nextjs-toploader";

export const metadata: Metadata = {
  title: "Tennis shop",
  description: "tennis items",
};

const RootLayout = ({ children }: LayoutProps<"/">) => {
  return (
    <html>
      <NextTopLoader />
      <body className={styles.body}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
