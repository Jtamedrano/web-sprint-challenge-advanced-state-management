import React from 'react';
import { v1 as uuid } from 'uuid';

class AddForm extends React.Component {
  state = {
    smurf: {
      name: '',
      position: '',
      nickname: '',
      description: '',
    },
    formValid: false,
  };

  handleChange(e) {
    e.preventDefault();
    this.setState({
      ...this.state,
      smurf: {
        ...this.state.smurf,
        [e.target.name]: e.target.value,
      },
    });
  }

  async handleSubmit(e) {
    e.preventDefault();
    this.props.addSmurf({ ...this.state.smurf, id: uuid() });
  }

  render() {
    return (
      <section>
        <h2>Add Smurf</h2>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <br />
            <input
              onChange={(e) => this.handleChange(e)}
              name="name"
              id="name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="position">Position:</label>
            <br />
            <input
              onChange={(e) => this.handleChange(e)}
              name="position"
              id="position"
            />
          </div>
          <div className="form-group">
            <label htmlFor="nickname">Nickname:</label>
            <br />
            <input
              onChange={(e) => this.handleChange(e)}
              name="nickname"
              id="nickname"
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">description:</label>
            <br />
            <textarea
              onChange={(e) => this.handleChange(e)}
              name="description"
              id="description"
            />
          </div>

          {this.props.error && (
            <div
              data-testid="errorAlert"
              className="alert alert-danger"
              role="alert"
            >
              Error: {this.props.error}
            </div>
          )}
          <button
            type="submit"
            disabled={this.state.formValid}
            className="btn btn-primary"
          >
            Submit Smurf
          </button>
        </form>
      </section>
    );
  }
}

export default AddForm;

//Task List:
//1. Add in all necessary import components and library methods.
//2. Connect all needed redux state props and action functions to the component before exporting.
//3. Add state holding name, position, nickname and description to component.
//4. Build form DOM to include inputs for name, position and description of the component.
//      - an array of smurfs
//      - a boolean indicating if the app is loading
//      - error text
//      - MAKE SURE TO CORRECTLY CONNECT LABELS TO YOUR FORM INPUTS. USE THE PATERN OF SHOWN FOR NAME.
//5. Build eventhandler and listener needed to change the state.
//6. Build eventhandler and listener needed to submit a new smurf and dispatch it's assosated action.
//7. Ensure that the included alert code only displays when error text is passed in from redux.
//4. DO NOT DELETE THE data-testid FIELD FROM THE ERROR ALERT! This is used for sprint grading.
//8. Style as necessary.
