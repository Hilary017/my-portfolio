import Navbar from "./Components/Navbar";
import Intro from "./Components/Intro";
import AboutMe from "./Components/AboutMe";
import Portfolio from "./Components/Portfolio";
import Footer from "./Components/Footer";
import Backdrop from "./Components/Backdrop";

function App() {
  return (
    <div>
      {/* <Backdrop /> */}
      <Navbar />
      <Intro />
      <AboutMe />
      <Portfolio />
      <Footer />
    </div>
  );
}

export default App;
