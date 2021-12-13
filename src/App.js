import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/App.css'
import Login from "./components/pages/Login";
import NavbarComp from "./components/pages/NavbarComp";
import Addcandidate from "./components/pages/Addcandidate";
import Viewcandidate from "./components/pages/Viewcandidate";
import Viewinterview from "./components/pages/Viewinterview";
import Home from "./components/pages/Home";
import Details from "./components/pages/Details";
import Addinterviewed from "./components/pages/Addinterviewed"
import {BrowserRouter as Router, Switch, Route  } from 'react-router-dom';
import Editcandidate from "./components/pages/Editcandidate";
import Editinterview from "./components/pages/Editinterview";
import Import from "./components/pages/Import"
import Notify from "./components/pages/Notify"
import Register from "./components/pages/Register"
import axios from "axios";


function App(){

  var pathname = window.location.pathname; 
  if(pathname == "/"){
    return (
      <Router>
    <div className="App">
      <Route path="/" exact component={Login}/>
    </div>
    </Router> 
    );
  }
  else if(pathname == "/Register"){
    return (
      <Router>
    <div className="App">
      <Route path="/Register" exact component={Register}/>
    </div>
    </Router> 
    );
  }
  else{
   return (
    <Router>
    <div className="App">
      <NavbarComp/>
      <br></br>
      <Route path="/home/" exact component={Home}/>
      <Route path="/Addcandidate/" component={Addcandidate}/>
      <Route path="/Editcandidate/:id/" component={Editcandidate}/>
      <Route path="/Viewcandidate/" component={Viewcandidate}/>
      <Route path="/Details/" component={Details}/>
      <Route path="/Viewinterview/" component={Viewinterview}/>
      <Route path="/Addinterviewed/" component={Addinterviewed}/>
      <Route path="/Editinterview/:id/" component={Editinterview}/>
      <Route path="/Import/" component={Import}/>
      <Route path="/Notify/" component={Notify}/>
    </div>
    </Router> 
   );
  }
}

export default App;