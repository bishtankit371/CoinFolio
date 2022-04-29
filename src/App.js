import logo from './logo.svg';
import './App.css';
import "./css/style.css";
import Home from "./components/Home.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {
  return (
    <Router>
      <Routes>

      <Route path="/" element={<Home />} />


    </Routes>
  </Router>

  );
}

export default App;
