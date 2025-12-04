import styles from "./layout.module.css";
import Header from "@/components/header/page";
import Footer from "@/components/footer/page";

const RootLayout = ({ children }: LayoutProps<"/">) => {
  return (
    <html>
      <body className={styles.body}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
