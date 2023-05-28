import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import Home from "./components/pages/Home";
import Choose from "./components/pages/Choose";
import AboutUs from "./components/pages/AboutUs";
import Ascent from "./components/maps/Ascent"
import Split from "./components/maps/Split";
import Fracture from "./components/maps/Fracture";
import Bind from "./components/maps/Bind";
import Breeze from "./components/maps/Breeze";
import Lotus from "./components/maps/Lotus";
import Pearl from "./components/maps/Pearl";
import Icebox from "./components/maps/Icebox";
import Haven from "./components/maps/Haven";
import ContactUs from "./components/pages/ContactUs";
import AgentInfo from "./components/pages/AgentInfo";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/lineup" exact component={Choose} />
          <Route path="/aboutus" exact component={AboutUs} />
          <Route path="/contactus" exact component={ContactUs} />
          <Route path="/ascent" exact component={Ascent} />
          <Route path="/split" exact component={Split} />
          <Route path="/fracture" exact component={Fracture} />
          <Route path="/bind" exact component={Bind} />
          <Route path="/breeze" exact component={Breeze} />
          <Route path="/lotus" exact component={Lotus} />
          <Route path="/pearl" exact component={Pearl} />
          <Route path="/icebox" exact component={Icebox} />
          <Route path="/haven" exact component={Haven} />
          <Route path="/agentinfo" exact component={AgentInfo} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
