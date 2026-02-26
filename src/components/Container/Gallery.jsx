import styles from "./Gallery.module.scss";
import Card from "../Card/Card";
import { data } from "../../data/data";

function Gallery() {
  return (
    <section className={styles.cardContainer}>
      {data.map((house) => (
        <Card
          key={house.id}
          id={house.id}
          cover={house.cover}
          title={house.title}
        />
      ))}
    </section>
  );
}

export default Gallery;
