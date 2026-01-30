import Header from "../components/Header/Header";
import Banner from "../components/Banner/Banner";
import { bannerData } from "../data/bannerData";
import Footer from "../components/Footer/Footer";
import CardContainer from "../components/Container/CardContainer";
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
      <CardContainer />
      <Footer />
    </>
  );
}

export default App;
