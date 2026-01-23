import styles from "./Container.module.scss";
import Card from "../Card/Card";

function CardContainer() {
  return (
    <section className={styles.cardContainer}>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </section>
  );
}

export default CardContainer;
