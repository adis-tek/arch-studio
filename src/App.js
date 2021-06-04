import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './Components/nav/Nav.jsx';
import Footer from './Components/footer/Footer.jsx';
import Home from './Pages/Home/home.jsx';
import Portfolio from './Pages/Portfolio/portfolio.jsx';
import About from './Pages/About/about.jsx';
import Contact from './Pages/Contact/contact.jsx';


function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
        <Footer />
    </div>
  </Router>
  );
}

export default App;
