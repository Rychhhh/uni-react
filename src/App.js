import "./App.css";
import NavBar from "./components/NavBar";
import TopWrapper from "./components/topWrapper";
import Socmed from "./components/SocMed";
import Project from "./components/Project";
import ParticleBg from "./components/ParticleBg";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      {/* Header */}
      <div className="Header">
        <NavBar />
        <ParticleBg />
        <TopWrapper />
      </div>

      {/* Socmed */}
      <div className="Socmed">
        <Socmed />
      </div>
      <div className="Project">
        <Project />
      </div>
      <div className="Project">
        <Footer />
      </div>
    </div>
  );
}

export default App;
