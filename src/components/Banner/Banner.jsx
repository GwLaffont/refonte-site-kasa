import styles from "./Banner.module.scss";
import { bannerData } from "../../data/bannerData";

function Banner({ cover, description, message }) {
  console.log(cover);
  return (
    <div className={styles.banner}>
      <img src={cover} alt={description} />
      {message && <p className={styles.bannerMessage}>{message}</p>}
    </div>
  );
}

export default Banner;
