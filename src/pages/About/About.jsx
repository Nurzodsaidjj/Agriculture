import AboutSection from "../Home/AboutSection";
import Offer from "../Home/Offer";
import AboutMain from "./AboutMain";
import Team from "./Team";
import WhyChooseUs from "./WhyChooseUs";


export default function About() {
  return (
    <>
    <AboutMain  page="about"/>
      <AboutSection />  
      <WhyChooseUs />
      <Team />
      <Offer/>
    </>
  );
}
