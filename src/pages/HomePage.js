import NavBar from "../components/NavBar/NavBar";
import Section from "../components/Section/Section";
import SlideBar from "../components/SlideBar/SlideBar";
import Footer from "../components/Footer/Footer";
import SectionComps from "../components/SectionComps/SectionComps";

function HomePage() {
  return (
    <div>
      <NavBar />
      <Section />
      <SlideBar />
      <SectionComps />
      <Footer />
    </div>
  );
}

export default HomePage;
