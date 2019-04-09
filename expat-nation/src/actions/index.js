import axios from 'axios';
export const FETCH_EXPATS_START = "FETCH_EXPATS_START";
export const FETCH_EXPATS_SUCCESS = "FETCH_EXPATS_SUCCESS";
export const FETCH_EXPATS_FAILURE = "FETCH_EXPATS_FAILURE";
export const ADD_EXPATS_START = "ADD_EXPATS_START";
export const ADD_EXPATS_SUCCESS = "ADD_EXPATS_SUCCESS";
export const ADD_EXPATS_FAILURE = "ADD_EXPATS_FAILURE";
export const UPDATE_EXPATS_START = "UPDATE_EXPATS_START";
export const UPDATE_EXPATS_SUCCESS = "UPDATE_EXPATS_SUCCESS";
export const UPDATE_EXPATS_FAILURE = "UPDATE_EXPATS_FAILURE";
export const DELETE_EXPATS_START = "DELETE_EXPATS_START";
export const DELETE_EXPATS_SUCCESS = "DELETE_EXPATS_SUCCESS";
export const DELETE_EXPATS_FAILURE = "DELETE_EXPATS_FAILURE";
export const SELECTING_EXPATS = "SELECTING_EXPATS";

/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/

/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addExpat
   R - getExpats
   U - updateExpat
   D - deleteExpat
*/

export const addExpat = expat => dispatch => {
  console.log('adding expat', expat)
  dispatch({type: ADD_EXPATS_START});
  axios
    .post('http://localhost:3333/expats', expat)
    .then(res => {
      console.log(res)
      dispatch({
        type: ADD_EXPATS_SUCCESS,
        payload: res.data
      })
    })
    .catch(err => dispatch({ type: ADD_EXPATS_FAILURE, payload: err }))
}

export const getExpat = () => dispatch => {
  dispatch({type: FETCH_EXPATS_START});
  axios
    .get('http://localhost:3333/expats')
    .then(res => {
      console.log(res)
      console.log('fetch finished');
      dispatch({
        type: FETCH_EXPATS_SUCCESS,
        payload: res.data
      })
    })
    .catch(err => dispatch({ type: FETCH_EXPATS_FAILURE, payload: err }))
}

export const deleteExpat = id => dispatch => {
  console.log('deleting expat', id)
  dispatch({type: DELETE_EXPATS_START});
  axios
    .delete(`http://localhost:3333/expats/${id}`)
    .then(res => {
      console.log(res)
      dispatch({
        type: DELETE_EXPATS_SUCCESS,
        payload: res.data
      })
    })
    .catch(err => dispatch({ type: DELETE_EXPATS_FAILURE, payload: err }))
}

export const updateExpat = (id, expat) => dispatch => {
  console.log('deleting expat', id)
  dispatch({type: UPDATE_EXPATS_START});
  axios
    .put(`http://localhost:3333/expats/${id}`, expat)
    .then(res => {
      console.log(res)
      dispatch({
        type: UPDATE_EXPATS_SUCCESS,
        payload: res.data
      })
    })
    .catch(err => dispatch({ type: UPDATE_EXPATS_FAILURE, payload: err }))
}

export const selectingExpat = expat => dispatch => {
  console.log('selecting expat',expat)
  dispatch({type: SELECTING_EXPATS, payload: expat});
}