import React, { Component } from 'react';
import { connect } from 'react-redux';

import AddForm from './components/AddForm';
import SmurfDisplay from './components/SmurfDisplay';

import { fetchData, pushToApi } from './actions';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  componentDidMount() {
    this.props.fetchData();
  }
  render() {
    return (
      <div className="App">
        <nav className="navbar navbar-dark bg-primary">
          <a className="navbar-brand" href="/">
            Smurf Village Database
          </a>
        </nav>
        <main>
          <AddForm
            addSmurf={(smurf) => this.props.pushToApi(smurf)}
            error={this.props.error}
          />
          <SmurfDisplay smurfs={this.props.smurfs} />
        </main>
      </div>
    );
  }
}

const mapStateToProps = ({ smurfs, error }) => {
  return { smurfs, error };
};

const mapDispatchToProps = { fetchData, pushToApi };

export default connect(mapStateToProps, mapDispatchToProps)(App);

//Task List:
//1. Add in SmurfDisplay and AddForm into your application.
// done
