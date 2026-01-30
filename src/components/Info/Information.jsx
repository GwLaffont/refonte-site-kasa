import styles from "./Information.module.scss";
import Host from "../Host/Host";
import Rating from "../Rating/Rating";

function Information({ title, description, tags, host, rating }) {
  return (
    <div className={styles.columnWrap}>
      <div className={styles.columnLeft}>
        <div className={styles.title}>{title}</div>
        <div className={styles.desc}> {description} </div>
        <div className={styles.tags}>
          {tags.map((tag, index) => (
            <span key={index} className={styles.tag}>
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className={styles.columnRight}>
        <Host name={host.name} picture={host.picture} />
        <Rating rating={rating} />
      </div>
    </div>
  );
}

export default Information;
