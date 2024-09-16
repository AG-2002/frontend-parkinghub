import NavBar from "../components/NavBar/NavBar";
import MainContent from "../components/MainContent/MainContent";
import Footer from "../components/Footer/Footer";

function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <MainContent />
      <Footer />
    </div>
  );
}

export default HomePage;
