import styles from "./Information.module.scss";
import Host from "../Host/Host";
import Rating from "../Rating/Rating";

function Information() {
  return (
    <div className={styles.columnWrap}>
      <div className={styles.columnLeft}>
        <div className={styles.title}>Title here</div>
        <div className={styles.desc}> Description here </div>
        <div className={styles.tags}></div>
      </div>
      <div className={styles.columnRight}>
        <Host />
        <Rating />
      </div>
    </div>
  );
}

export default Information;
