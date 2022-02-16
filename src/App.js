import "./App.css";
import Home from "./screens/Home";
import About from "./screens/About";
import ContactPage from "./screens/ContactPage";
// import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="App">
      <Routes >
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<ContactPage/>} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
