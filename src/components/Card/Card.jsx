import styles from "./Card.module.scss";

function Card() {
  return (
    <section className={styles.card}>
      <div className={styles.cardContentTest}></div>
      <p className={styles.cardTitle}>Titre de la location</p>
    </section>
  );
}

export default Card;
