import Logo from "../assets/Logo_Desktop.png";
import "../styles/styles.css";

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src={Logo} alt="Logo Kasa" />
      </div>
      <ul className="nav">
        <li>
          <a href="#" className="nav-link">
            Accueil
          </a>
        </li>
        <li>
          <a href="#" className="nav-link">
            A propos
          </a>
        </li>
      </ul>
    </header>
  );
}

export default Header;
