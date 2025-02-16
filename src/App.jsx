import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Posts from "./pages/Posts";
import About from "./pages/About";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/posts" component={Posts} />
        <Route path="/about" component={About} />
      </Switch>
    </Router>
  );
}

export default App;
