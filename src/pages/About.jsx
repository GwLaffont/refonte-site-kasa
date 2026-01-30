import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Banner from "../components/Banner/Banner";
import { bannerData } from "../data/bannerData.js";
import Collapse from "../components/Collapse/Collapse";
import { aboutList } from "../data/aboutList.js";
import styles from "../styles/components/about.module.scss";

function About() {
  return (
    <>
      <Header />
      <Banner
        cover={bannerData[1].cover}
        description={bannerData[1].description}
        message={bannerData[1].message}
      />

      <article className={styles.aboutCollapse}>
        {aboutList.map((category) => (
          <Collapse
            key={category.title + "-mod"}
            title={category.title}
            content={category.content}
          />
        ))}
      </article>

      <Footer />
    </>
  );
}

export default About;
