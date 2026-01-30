import Logo from "../../assets/Logo_Desktop.png";
import styles from "./Header.module.scss";
import { Link } from "react-router";

function Header() {
  return (
    <header className={styles.header}>
      <div className="logo">
        <img src={Logo} alt="Logo Kasa" />
      </div>
      <ul className="nav">
        <li>
          <Link to="/">Accueil</Link>
        </li>
        <li>
          <Link to="/about">A propos</Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
