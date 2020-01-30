import React from "react";
//for routing
import { BrowserRouter as Router, Route } from "react-router-dom";
//for routing to home page we are importing Home.js file
import Home from "./Home";
import Posts from "./Posts";

//creating functional component beacause there is no need of states
//we are exporting this compent this component here itself
export default function App() {
  return (
    //router is useful for definf routing
    <Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route exact path="/posts" component={Posts} />
      </div>
    </Router>
  );
}
