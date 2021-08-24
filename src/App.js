import React, {Component} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Home from './pages/Home'
import Pesquisa from './pages/Pesquisa'

import Header from './components/Header';
import Footer from './components/Footer'


class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <Header/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/pesquisa" component={Pesquisa} />
        </Switch>
        <Footer />
      </BrowserRouter>
    )
  };
}

export default App;