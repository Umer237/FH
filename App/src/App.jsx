import React from 'react';

import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import About from './About';
import Section2 from './Section2';
import Team from './Team';
import Contact from './Contact';

import { Redirect, Route, Switch,} from "react-router-dom"

function App() {
  return (
    <>
<Header/>
<Switch>
  <Route exact path="/" component={Home}/>
  <Route exact path="/about" component={About}/>
  <Route exact path="/section2" component={Section2}/>
  <Route exact path="/team" component={Team}/>
  <Route exact path="/contact" component={Contact}/>

<Redirect to='/' />
 </Switch>
<Footer/>




    </>
  );
}

export default App;
