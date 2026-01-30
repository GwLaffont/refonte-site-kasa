import styles from "./Container.module.scss";
import Card from "../Card/Card";
import { data } from "../../data/data";

function CardContainer() {
  return (
    <section className={styles.cardContainer}>
      {data.map((house) => (
        <Card key={house.id} cover={house.cover} title={house.title} />
      ))}
    </section>
  );
}

export default CardContainer;
