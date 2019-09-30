import axios from 'axios';

export const FETCHING_SMURF_START = 'FETCHING_SMURF_START';
export const FETCHING_SMURF_SUCCESS = 'FETCHING_SMURF_SUCCESS';
export const FETCHING_SMURF_ERR = 'FETCHING_SMURF_ERR';

export const ADD_SMURF_START = 'ADD_SMURF';
export const ADD_SMURF_SUCCESS = 'ADD_SMURF_SUCCESS';
export const ADD_SMURF_ERR = 'ADD_SMURF_ERR';

export const getSmurf = () => dispatch => {
    dispatch({ type: FETCHING_SMURF_START });
    axios
    .get("http://localhost:3333/smurfs")
    .then(res => {
      dispatch({ type: FETCHING_SMURF_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({
        type: FETCHING_SMURF_ERR
      });
    }); 
}

export const addSmurf = smurf => dispatch => {
    
    dispatch({type: ADD_SMURF_START})
    axios
        .post("http://localhost:3333/smurfs", smurf)
        .then(res =>{
            // console.log('Smurf Added!!!', res.data);
            dispatch({type: ADD_SMURF_SUCCESS, payload: res.data})
        })
        .catch(err => {
            dispatch({ type: ADD_SMURF_ERR, payload: err})
        })
};