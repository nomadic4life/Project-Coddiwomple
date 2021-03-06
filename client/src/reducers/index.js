import {
  CHECK_USER_LOGGED,
  // FETCH_EXPATS_START,
  // FETCH_EXPATS_SUCCESS,
  // FETCH_EXPATS_FAILURE,
  // ADD_EXPATS_START,
  // ADD_EXPATS_SUCCESS,
  // ADD_EXPATS_FAILURE,
  // UPDATE_EXPATS_START,
  // UPDATE_EXPATS_SUCCESS,
  // UPDATE_EXPATS_FAILURE,
  // DELETE_EXPATS_START,
  // DELETE_EXPATS_SUCCESS,
  // DELETE_EXPATS_FAILURE,
  // SELECTING_EXPATS
} from '../actions';


const initialExpatsState = {
  isLogged: false,
  isLoaded: false,
  
  appData: {},
  userDetails: {},
  content: {},
  // useless data
  expats: [],
  fetchingExpats: false,
  addingExpat: false,
  updatingExpat: false,
  deletingExpat: false,
  error: null,
  selectedExpat: null,
};

const expatReducer = (state = initialExpatsState, action) => {
  console.log(action.type ,action.payload)
  switch (action.type) {
    case  CHECK_USER_LOGGED:
      return {
        ...state,
        ...action.payload,
        isLoaded: true,
      };
    default:
      return state;
  }
}

// const expatReducer = (state = initialExpatsState, action) => {
//   console.log(action.type ,action.payload)
//   switch (action.type) {
//     case SELECTING_EXPATS:
//       return {
//         ...state,
//         selectedExpat: action.payload,
//       };
//     case ADD_EXPATS_START:
//       return {
//         ...state,
//         fetchingExpats: true,
//         addingExpat: true,
//       };
//     case ADD_EXPATS_SUCCESS:
//       return {
//         ...state,
//         fetchingExpats: false,
//         addingExpat: false,
//         expats: action.payload
//       };
//     case ADD_EXPATS_FAILURE:
//       return {
//         ...state,
//         fetchingExpats: false,
//         addingExpat: false,
//         error: action.payload
//       };
//       case UPDATE_EXPATS_START:
//       return {
//         ...state,
//         fetchingExpats: true,
//         updatingExpat: true,
//         selectedExpat: null,
//       };
//     case UPDATE_EXPATS_SUCCESS:
//       return {
//         ...state,
//         fetchingExpats: false,
//         updatingExpat: false,
//         expats: action.payload,
//         selectedExpat: null,
//       };
//     case UPDATE_EXPATS_FAILURE:
//       return {
//         ...state,
//         fetchingExpats: false,
//         updatingExpat: false,
//         error: action.payload,
//         selectedExpat: null,
//       };
//       case DELETE_EXPATS_START:
//       return {
//         ...state,
//         fetchingExpats: true,
//         deletingExpat: true,
//       };
//     case DELETE_EXPATS_SUCCESS:
//       return {
//         ...state,
//         fetchingExpats: false,
//         deletingExpat: false,
//         expats: action.payload
//       };
//     case DELETE_EXPATS_FAILURE:
//       return {
//         ...state,
//         fetchingExpats: false,
//         deletingExpat: false,
//         error: action.payload
//       };
//     case FETCH_EXPATS_START:
//       return {
//         ...state,
//         fetchingExpats: true
//       };
//     case FETCH_EXPATS_SUCCESS:
//       return {
//         ...state,
//         error: null,
//         fetchingExpats: false,
//         expats: action.payload
//       };
//       case FETCH_EXPATS_FAILURE:
//        return {
//         ...state,
//         fetchingExpats: false,
//         error: action.payload
//        }
//     default:
//       return state;
//   }
// }

export default expatReducer;






