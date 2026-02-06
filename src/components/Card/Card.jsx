import { Link } from "react-router-dom";
import styles from "./Card.module.scss";

function Card({ id, cover, title }) {
  return (
    <Link to={`/pages/${id}`} className={styles.cardLink}>
      <section className={styles.card}>
        <img src={cover} alt={title} />
        <p className={styles.cardTitle}>{title}</p>
      </section>
    </Link>
  );
}

export default Card;
