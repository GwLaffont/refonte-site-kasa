import styles from "./Rating.module.scss";
import GreyStar from "../../assets/Star.svg";
import OrangeStar from "../../assets/Star2.svg";

function Host() {
  return (
    <div className={styles.ratingWrap}>
      <div className={styles.ratingBase}>
        <img src={GreyStar} alt="Star" />
        <img src={GreyStar} alt="Star" />
        <img src={GreyStar} alt="Star" />
        <img src={GreyStar} alt="Star" />
        <img src={GreyStar} alt="Star" />
      </div>
      <div className={styles.rating}>
        <img src={OrangeStar} alt="Star" />
        <img src={OrangeStar} alt="Star" />
      </div>
    </div>
  );
}

export default Host;
