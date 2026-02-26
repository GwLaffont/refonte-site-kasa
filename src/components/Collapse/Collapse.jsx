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
        {/* Checks if content is an array */}
        {/* If content is an array, map over the items and render a list */}
        {/* If content is not an array, render content*/}
        {isVisible &&
          (Array.isArray(content) ? (
            <ul>
              {content.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          ) : (
            content
          ))}
      </div>
    </div>
  );
}

export default Collapse;
