import styles from "./Rating.module.scss";
import GreyStar from "../../assets/Star.svg";
import OrangeStar from "../../assets/Star2.svg";

function Rating({ rating }) {
  // Ensure rating is between 1 and 5
  const stars = [];
  // For each star, check if its index is less than or equal to the rating
  for (let i = 1; i <= 5; i++) {
    stars.push(
      //  If i <= rating, render an orange star; otherwise, render a grey star
      <img key={i} src={i <= rating ? OrangeStar : GreyStar} alt="Star" />,
    );
  }

  return <div className={styles.ratingWrap}>{stars}</div>;
}

export default Rating;
