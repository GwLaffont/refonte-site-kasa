import styles from "./Card.module.scss";

function Card({ cover, title }) {
  return (
    <section className={styles.card}>
      <img src={cover} alt={title} />
      <p className={styles.cardTitle}>{title}</p>
    </section>
  );
}

export default Card;

//      <div className={styles.cardContentTest}></div>
