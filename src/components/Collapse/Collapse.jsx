import styles from "./Collapse.module.scss";
import collapseButton from "../../assets/Arrow_Vector.svg";

function Collapse() {
  return (
    <div className={styles.collapse}>
      <div className={styles.collapseBar}>
        <p className={styles.collapseTitle}>Title Here</p>
        <img src={collapseButton} alt="Collapse Button" />
      </div>
      <div className={styles.collapseMessage}>
        Collapse message content here
      </div>
    </div>
  );
}

export default Collapse;
