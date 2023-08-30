import HomeContainer from "../features/homeContainer/HomeContainer";
import Hero from "../features/hero/Hero";
import { Container } from "../ui/Container";
import SpecialProductsContainer from "../features/specialProducts/SpecialProductsContainer";
import Banner from "../ui/Banner";
import Slider from "../features/slider/Slider";

function Home() {
  return (
    <>
      <Hero />
      <Container>
        <HomeContainer />
        <SpecialProductsContainer />
      </Container>
      <Banner />
      <Container>
        <Slider />
      </Container>
    </>
  );
}

export default Home;
