import Logo from "../../assets/Logo_Desktop.png";
import styles from "./Header.module.scss";

function Header() {
  return (
    <header className={styles.header}>
      <div className="logo">
        <img src={Logo} alt="Logo Kasa" />
      </div>
      <ul className="nav">
        <li>
          <a href="/dashboard" className={styles.navLink}>
            Accueil
          </a>
        </li>
        <li>
          <a href="/about" className={styles.navLink}>
            A propos
          </a>
        </li>
      </ul>
    </header>
  );
}

export default Header;
