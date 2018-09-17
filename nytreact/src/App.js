import React from 'react';
import Home from "./components/home";
import Jumbotron from "./components/jumbotron"
import {BrowserRouter as Router, Route} from "react-router-dom";
import './App.css';

const App = () => (
  <Router>
    <div>
        <Route exact path="/" component ={Home} />
        <Route exact path="/jumbo" component ={Jumbotron} />
    </div>
    </Router>
);

export default App;
