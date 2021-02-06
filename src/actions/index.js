import axios from 'axios';

const apiEndPoint = 'http://localhost:3333/smurfs';
//
const startFetch = () => ({
  type: 'INIT_FETCH',
});

const fetchSuccess = (data) => ({
  type: 'FETCH_SUCCESS',
  payload: data,
});
const fetchFailed = (msg) => ({
  type: 'FETCH_FAILED',
  payload: msg,
});

export const fetchData = () => (dispatch) => {
  dispatch(startFetch());
  axios
    .get(apiEndPoint)
    .then((res) => {
      dispatch(fetchSuccess(res.data));
    })
    .catch((err) => dispatch(fetchFailed(err)));
};

export const pushToApi = (data) => (dispatch) => {
  dispatch(startFetch());
  // The following checks for any required fields being empty
  try {
    if (!data.name) {
      throw new Error('name is missing');
    }
    if (!data.position) {
      throw new Error('position is missing');
    }
    if (!data.nickname) {
      throw new Error('nickname is missing');
    }

    // This will check and see if the db already has the name
    axios.get(apiEndPoint).then((res) => {
      for (const key in res.data) {
        if (Object.hasOwnProperty.call(res.data, key)) {
          const element = res.data[key].name;

          if (element.toLowerCase() === data.name.toLowerCase()) {
            throw new Error('Smurf Already Exist');
          }
        }
      }
    });

    axios
      .post(apiEndPoint, data)
      .then((res) => dispatch(fetchSuccess(res.data)))
      .catch((err) => {
        dispatch(fetchFailed(err.message));
      });
  } catch (error) {
    dispatch(fetchFailed(error.message));
  }
};

//Task List:
//1. Add fetch smurfs action:
//              - fetch and return initial list of smurfs
//              - dispatch actions that indicate if we are waiting for a server response
//              - dispatch an error text action if an error is returned from the server
//2. Add add smurf action:
//              - dispatch an error text action if smurf data does not includes a name, nickname and position field
//              - send a post request with the smurf as body to see if there is an error
//              - dispatch add smurf action if request is successful
//              - dispatch an error text action if an request returns an error
//3. Add set error text action:
//              - return action object setting error text
//4. Any other actions you deem nessiary to complete application.
