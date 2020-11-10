import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'normalize.css/normalize.css';
import '../styles/styles.scss';
import HomePage from '../components/HomePage';
import About from '../components/About';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Nav from '../components/Nav';
import NotFound from '../components/NotFound';

const AppRouter = () => (
  <BrowserRouter>
    <Nav />
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route component={NotFound} />
    </Switch>
    <Footer />
  </BrowserRouter>
);

export default AppRouter;