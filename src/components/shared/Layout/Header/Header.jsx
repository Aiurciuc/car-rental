import styles from "./Header.module.scss";
import { Link } from "react-router";

function Header() {

  return (
    <header className={styles.header}>
       <Link to="/" aria-label="Navigate to home">
        <img
          className={styles.logo}
          src="/src/assets/logo/partner.svg"
          alt="Car Rental Logo"
        />
      </Link>
    </header>
  );
}

export default Header;
