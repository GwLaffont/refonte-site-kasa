import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Banner from "../components/Banner/Banner";
import Collapse from "../components/Collapse/Collapse";
import styles from "../styles/components/about.module.scss";

function About() {
  return (
    <>
      <Header />
      <Banner />
      <div className="aboutCollapse">
        <Collapse />
        <Collapse />
        <Collapse />
      </div>
      <Footer />
    </>
  );
}

export default About;
