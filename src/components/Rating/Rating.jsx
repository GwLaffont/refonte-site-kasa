import styles from "./Rating.module.scss";
import GreyStar from "../../assets/Star.svg";
import OrangeStar from "../../assets/Star2.svg";

function Host() {
  return (
    <div className={styles.rating}>
      <img src={OrangeStar} alt="Previous Work" />
      <img src={OrangeStar} alt="Previous Work" />
      <img src={OrangeStar} alt="Previous Work" />
      <img src={GreyStar} alt="Previous Work" />
      <img src={GreyStar} alt="Previous Work" />
    </div>
  );
}

export default Host;
