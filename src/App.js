import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import './App.css';
import {
  Container,
} from 'semantic-ui-react';
import {  Route } from 'react-router-dom';
import MoviesPage from '../src/components/pages/MoviesPage';
import Footer from './components/Footer';
import Header from './components/Header';
import NewMoviePage from './components/pages/NewMoviePage';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Header/>
        <Container text>
      
          <Route exact path="/movies" component={MoviesPage}></Route>
          <Route exact path='/movies/new' component={NewMoviePage}></Route>
          <Route exact path='/movie/:_id' component={NewMoviePage}></Route>
        </Container>
        <Footer/>
      </div>
    );
  }
}

export default App;
