import styles from "./Header.module.scss";
import { Link } from "react-router";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <Link to="/" aria-label="Navigate to home">
          <img
            className={styles.logo}
            src="/assets/Logo/partner.svg"
            alt="Car Rental Logo"
          />
        </Link>
      </div>
    </header>
  );
}

export default Header;
