import styles from "./Carousel.module.scss";
import ArrowLeft from "../../assets/Arrow_Left.svg";
import ArrowRight from "../../assets/Arrow_Right.svg";
import { useState } from "react";

function Carousel({ pictures }) {
  //console.log("test");
  //console.log(pictures);
  // If no pictures, return null
  if (!pictures || pictures.length === 0) return null;

  //Create a condition to check if there is more than one picture
  const hasMultiplePictures = pictures.length > 1;

  //Declaring the state variable, 'currentIndex', thefunction to update it, 'setCurrentIndex'.
  // useState(0) initializes currentIndex to 0 when the component first renders.
  const [currentIndex, setCurrentIndex] = useState(0);

  //Function to go to previous picture
  function goToPrevious() {
    //Starting from the previous picture (previndex)
    setCurrentIndex((prevIndex) =>
      // If prevIndex is 0 (first item in the array), return pictures.length - 1 (loop back to last)
      // Otherwise, return prevIndex - 1, moving to the previous item in the array.
      prevIndex === 0 ? pictures.length - 1 : prevIndex - 1,
    );
  }

  //Function to go to next picture
  function goToNext() {
    //Starting from the previous picture (previndex)
    setCurrentIndex((prevIndex) =>
      // If prevIndex is equal to pictures.length - 1 (last picture of the array), return 0 (loop back to first)
      // Otherwise, return prevIndex + 1, moving to the next item in the array.
      prevIndex === pictures.length - 1 ? 0 : prevIndex + 1,
    );
  }
  return (
    <div className={styles.carousel}>
      {hasMultiplePictures && (
        <div className={styles.arrowLeft} onClick={goToPrevious}>
          <img src={ArrowLeft} alt="Previous" />
        </div>
      )}
      {hasMultiplePictures && (
        <div className={styles.arrowRight} onClick={goToNext}>
          <img src={ArrowRight} alt="Next" />
        </div>
      )}
      <div className={styles.carouselPic}>
        {/* Display the current picture */}
        <img src={pictures[currentIndex]} alt="Carousel content" />
        {hasMultiplePictures && (
          <div className={styles.carouselCounter}>
            {/* Display the number of the current picture, compared to the total amount of available pictures */}
            {currentIndex + 1}/{pictures.length}
          </div>
        )}
      </div>
    </div>
  );
}

export default Carousel;
