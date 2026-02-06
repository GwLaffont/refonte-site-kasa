import styles from "./Collapse.module.scss";
import collapseButton from "../../assets/Arrow_Vector.svg";
import { useState } from "react";

function Collapse({ title, content }) {
  const [isVisible, setIsVisible] = useState(false);

  const handleToggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className={styles.collapse}>
      <div className={styles.collapseBar}>
        <p className={styles.collapseTitle}>{title}</p>
        <img
          src={collapseButton}
          alt="Collapse Button"
          onClick={handleToggleVisibility}
          className={isVisible ? styles.rotated : ""}
        />
      </div>
      <div
        className={`${styles.collapseMessage} ${!isVisible ? styles.hidden : ""}`}
      >
        {isVisible && content}
      </div>
    </div>
  );
}

export default Collapse;
