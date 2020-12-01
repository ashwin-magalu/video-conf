import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import VideoPage from "./pages/VideoPage";

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/:url" component={VideoPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
