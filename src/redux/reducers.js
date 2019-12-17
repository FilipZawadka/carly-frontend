import { EMPLOYEES_LOADED, EMPLOYEES_ADDED } from './constants';

export const initialState = {
  employees: [],
  newemployee:{},
  loaded: false
};

// Read this: https://redux.js.org/basics/reducers

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case EMPLOYEES_LOADED: {
      const { employees } = action.payload;
      // CAREFUL: You can't modify state variable directly.
      return Object.assign({}, state, { 
        employees:employees,
        loaded:true 
      });
    }
    case EMPLOYEES_ADDED:{
      return{
        ...state,
        newemployee: action.payload,
        loaded:false
      }
    }
    default:
        return state
  }
}

export default appReducer;