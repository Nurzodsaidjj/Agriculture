import Hero from "./Hero";
import Natural from "./Natural";
import AboutSection from "./AboutSection";
import Product from "./Product";
import Customer from "./Customer";
import Offer from "./Offer";
import Eco from "./Eco";

export default function Home() {
  return (
    <>
      <Hero page="home" height="800px" subtitle=" 100% Natural Food
" title="   Choose the best healthier way of life" />
      <Natural/>
      <AboutSection/>
      <Product/>
      <Customer/>
      <Offer/>
      <Eco/>
    </>
  );
}
