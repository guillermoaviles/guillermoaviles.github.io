import "./styles/App.scss";
import "./styles/BreakPoints.scss";
import { Routes, Route, useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import About from "./components/About";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Resume from "./components/Resume";
import SingleProject from "./components/SingleProject";


function App() {
  let navigate = useNavigate();
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Landing></Landing>
              <About></About>
              <Projects></Projects>
            </>
          }
        ></Route>
        <Route
          path="/project/:num"
          element={<SingleProject></SingleProject>}
        ></Route>
        <Route path="/resume" element={<Resume></Resume>}></Route>
        <Route
          path="*"
          element={
            <>
              <div className="fullscreen">
                <h1>Wrong Url </h1>
                <button onClick={() => navigate("/")}>Go Home</button>
              </div>
            </>
          }
        ></Route>
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;