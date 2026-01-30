import styles from "./Host.module.scss";

function Host({ name, picture }) {
  return (
    <div className={styles.host}>
      <div className={styles.hostName}> {name} </div>
      <img src={picture} alt={name} className={styles.hostPic} />
    </div>
  );
}

export default Host;
