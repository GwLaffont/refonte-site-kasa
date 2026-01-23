import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import styles from "../styles/components/error.module.scss";

function Error() {
  return (
    <>
      <Header />
      <div className={styles.errorMain}>
        <h1 className={styles.errorMessage}>404</h1>
        <h2 className={styles.errorMessage}>
          Oups! La page que vous demandez n'existe pas.
        </h2>
        <div className={styles.return}>
          <a href="/dashboard">Retourner sur la page d'accueil</a>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Error;
