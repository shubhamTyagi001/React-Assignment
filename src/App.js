// import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Services from "./components/Services/Services";
import Chooseus from "./components/Chooseus/Chooseus";
import Details from "./components/Details/Details";
import Popular from "./components/Popular/Popular";
import Ourbest from "./components/Ourbest/Ourbest";
import Gallery from "./components/Gallery/Gallery";
import Contuctus from "./components/Contuctus/Contuctus";
import Footer from "./components/Footer/Footer";
import Costumer from "./components/Costumers/Costumer";
import Blog from "./components/Blog/Blog";

function App() {
  return (
    <>
      <Navbar />
      <Services />
      <Chooseus />
      <Details />
      <Popular />
      <Ourbest />
      <Gallery />
      <Contuctus />
      <Costumer />
      <Blog />
      <Footer />
    </>
  );
}

export default App;
