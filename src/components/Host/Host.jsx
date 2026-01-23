import styles from "./Host.module.scss";

function Host() {
  return (
    <div className={styles.host}>
      <div className={styles.hostName}>Firstname Lastname</div>
      <div className={styles.hostPic}></div>
    </div>
  );
}

export default Host;
