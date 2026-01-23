import BannerImg from "../../assets/BannerImg.png";
import styles from "./Banner.module.scss";

function Banner() {
  return (
    <div className={styles.banner}>
      <img src={BannerImg} alt="Bannière falaises maritimes" />
      <p className={styles.bannerMessage}>Chez vous, partout et ailleurs</p>
    </div>
  );
}

export default Banner;
