import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/NavbarElements';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ContactUs from './components/pages/ContactUs';
import SignUp from './components/pages/SignUp';
import Country from './components/pages/Country';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/contact-us' component={ContactUs} />
        <Route path='/sign-up' component={SignUp} />
        <Route path='/country/:countryName' component= {Country} />
      </Switch>
    </Router>
  );
}

export default App;
