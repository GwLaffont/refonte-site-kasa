import Header from "../components/Header/Header";
import Banner from "../components/Banner/Banner";
import { bannerData } from "../data/bannerData";
import Footer from "../components/Footer/Footer";
import Gallery from "../components/Container/Gallery";
import Card from "../components/Card/Card";

function App() {
  return (
    <>
      <Header />
      <Banner
        cover={bannerData[0].cover}
        description={bannerData[0].description}
        message={bannerData[0].message}
      />
      <Gallery />
      <Footer />
    </>
  );
}

export default App;
