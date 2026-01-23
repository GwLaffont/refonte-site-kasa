import Vector from "../../assets/Logo_Footer.png";
import styles from "./Footer.module.scss";

function Footer() {
  return (
    <footer className={styles.footer}>
      <img src={Vector} alt="Kasa Logo" />
      <p className={styles.copyright}>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}

export default Footer;
