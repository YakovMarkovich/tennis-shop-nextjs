import styles from "./page.module.css";

const Footer = () => {
  return (
    <>
      <hr className={styles.divider} />
      <footer className={styles.footer}>
        <div className={styles.footerTitle}>TENNIS STORE</div>
        <div className={styles.copy}>
          © 2025 Tennis store. All rights reserved
        </div>
      </footer>
    </>
  );
};

export default Footer;
