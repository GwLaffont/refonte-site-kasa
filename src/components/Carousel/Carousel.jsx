import styles from "./Carousel.module.scss";
import ArrowLeft from "../../assets/Arrow_Left.svg";
import ArrowRight from "../../assets/Arrow_Right.svg";
import BackgroundImg from "../../assets/Carousel_Img_Test.jpg";

function Carousel() {
  return (
    <div className={styles.carousel}>
      <div className={styles.arrowLeft}>
        <img src={ArrowLeft} alt="Previous Work" />
      </div>
      <div className={styles.arrowRight}>
        <img src={ArrowRight} alt="Next Work" />
      </div>
      <div className={styles.carouselPic}>
        <img src={BackgroundImg} alt="Current location" />
      </div>
    </div>
  );
}

export default Carousel;
