import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import AddForm from './components/AddForm';
import SmurfDisplay from './components/SmurfDisplay';

import { fetchData } from './actions';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  componentDidMount() {
    this.props.fetchData();
  }
  render() {
    console.log(this.props.state);
    return (
      <div className="App">
        <nav className="navbar navbar-dark bg-primary">
          <a className="navbar-brand">Smurf Village Database</a>
        </nav>
        <main>
          <AddForm />
          <SmurfDisplay smurfs={this.props.smurfs} />
        </main>
      </div>
    );
  }
}

const mapStateToProps = ({ smurfs }) => {
  return { smurfs };
};

const mapDispatchToProps = { fetchData };

export default connect(mapStateToProps, mapDispatchToProps)(App);

//Task List:
//1. Add in SmurfDisplay and AddForm into your application.
// done
