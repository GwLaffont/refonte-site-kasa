import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Carousel from "../components/Carousel/Carousel";
import Information from "../components/Info/Information";
import Collapse from "../components/Collapse/Collapse";
import styles from "../styles/components/pagecontents.module.scss";
import { dataDummy } from "../data/dataDummy";

function PageTest() {
  const data = dataDummy[0];

  return (
    <>
      <Header />
      <main>
        <Carousel pictures={data.pictures} />
        <Information
          title={data.title}
          description={data.description}
          tags={data.tags}
          host={data.host}
          rating={data.rating}
        />
        <div className={styles.collapseWrapper}>
          <div className={styles.collapseHold}>
            <Collapse title="Description" content={data.description} />
          </div>
          <div className={styles.collapseHold}>
            <Collapse
              title="Équipements"
              content={data.equipments.join(", ")}
            />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default PageTest;
