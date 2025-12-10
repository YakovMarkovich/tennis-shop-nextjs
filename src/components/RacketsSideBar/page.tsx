import styles from "./page.module.css";

type SidebarProps = {
  brands: string[];
  selectedBrand: string | null;
  onSelectBrand: (brand: string | null) => void;
};

export const RacketsSidebar = ({
  brands,
  selectedBrand,
  onSelectBrand,
}: SidebarProps) => {
  return (
    <aside className={styles.sidebar}>
      <h3>Брэнд</h3>
      <ul className={styles.brandList}>
        <li
          className={`${styles.brandItem} ${
            selectedBrand === null ? styles.active : ""
          }`}
          onClick={() => onSelectBrand(null)}
        >
          All
        </li>

        {brands.map((brand) => (
          <li
            key={brand}
            className={`${styles.brandItem} ${
              selectedBrand === brand ? styles.active : ""
            }`}
            onClick={() => onSelectBrand(brand)}
          >
            {brand}
          </li>
        ))}
      </ul>
    </aside>
  );
};
