import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./components/styles.css";
import HomeMain from "./components/Home/HomeMain";
import About from "./components/About/About";
import "animate.css";
import Projects from "./components/BottomPage/Projects";

function App() {
  return (
    <div className="App">
      <HomeMain />
      <About />
      <Projects />
    </div>
  );
}

export default App;
