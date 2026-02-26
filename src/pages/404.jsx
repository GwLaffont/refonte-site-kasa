import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import styles from "../styles/components/error.module.scss";
import { Link } from "react-router";

function Error() {
  return (
    <>
      <Header />
      <div className={styles.errorMain}>
        <h1 className={styles.errorMessage}>404</h1>
        <h2 className={styles.errorMessage}>
          <span>Oups! La page que </span>
          <span>vous demandez n'existe pas.</span>
        </h2>
        <div className={styles.return}>
          <Link to="/">Retourner sur la page d'accueil</Link>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Error;
