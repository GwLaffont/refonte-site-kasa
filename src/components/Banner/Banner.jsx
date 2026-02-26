import styles from "./Banner.module.scss";

function Banner({ cover, description, message }) {
  return (
    <div className={styles.banner}>
      <img src={cover} alt={description} />
      {message && <p className={styles.bannerMessage}>{message}</p>}
    </div>
  );
}

export default Banner;
