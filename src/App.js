// HOW TO SAVE YOUR CHANGES THEN RUN (on master branch):
// $ git add .
// $ git commit -m "update"
// $ git push 
// $ npm run deploy
// wait until "published" displays
// https://christinechye.github.io/covid-19-infodemic/

import React from 'react';
import NavigationBar from './client/components/NavigationBar';
import Home from './client/pages/Home';
import FindState from './client/pages/FindState'; 
import AboutUs from './client/pages/AboutUs';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';

function App() {
  return (
    <React.Fragment>
      <Router basename={process.env.PUBLIC_URL}>
        <NavigationBar />
        <Switch>
          <Route exact path="/" component={Home} basename={process.env.PUBLIC_URL}/>
          <Route path="/findstate" component={FindState} basename={process.env.PUBLIC_URL}/>
          <Route path="/aboutus" component={AboutUs} basename={process.env.PUBLIC_URL}/>
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
