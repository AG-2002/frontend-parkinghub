import NavBar from "../components/NavBar/NavBar";
import MainContent from "../components/MainContent/MainContent";
import Footer from "../components/Footer/Footer";


function HomePage() {
  return (
    <div className="h-screen overflow-x-hidden">
      <NavBar /> 
      <MainContent />
      {/* <Footer /> */}
    </div>
  );
}

export default HomePage;
