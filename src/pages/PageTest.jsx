import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Carousel from "../components/Carousel/Carousel";
import Information from "../components/Info/Information";
import Collapse from "../components/Collapse/Collapse";
import styles from "../styles/components/pagecontents.module.scss";

function PageTest() {
  return (
    <>
      <Header />
      <main>
        <Carousel />
        <Information />
        <div className={styles.collapseWrapper}>
          <div className={styles.collapseHold}>
            <Collapse />
          </div>
          <div className={styles.collapseHold}>
            <Collapse />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default PageTest;
