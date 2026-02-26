import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Slideshow from "../components/Carousel/Slideshow";
import Information from "../components/Info/Information";
import Collapse from "../components/Collapse/Collapse";
import styles from "../styles/components/pagecontents.module.scss";
import { Navigate, useParams } from "react-router-dom";
import { data } from "../data/data";

function Pages() {
  const { id } = useParams();
  const selectedHouse = data.find((house) => house.id === id);

  // Handle case where selectedHouse is not found
  if (!selectedHouse) {
    return <Navigate to="/error" />;
  }

  return (
    <>
      <Header />
      <main>
        <Slideshow pictures={selectedHouse.pictures} />
        <Information
          title={selectedHouse.title}
          location={selectedHouse.location}
          tags={selectedHouse.tags}
          host={selectedHouse.host}
          rating={selectedHouse.rating}
        />
        <div className={styles.collapseWrapper}>
          <div className={styles.collapseHold}>
            <Collapse title="Description" content={selectedHouse.description} />
          </div>
          <div className={styles.collapseHold}>
            <Collapse title="Équipements" content={selectedHouse.equipments} />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Pages;
