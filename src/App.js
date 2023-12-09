//import logo from './logo.svg';

import {BrowserRouter as Router} from "react-router-dom";
import "./App.css";
import "./style/style.scss";
import Header from "./components/Header";
import Content from "./components/Content";

function App() {
  return ( 
    <Router> 
      <Header />
      <Content />
    </Router>
  )
}

export default App;
