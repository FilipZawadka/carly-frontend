import { EMPLOYEES_LOADED, EMPLOYEES_ADDED,EMPLOYEES_LOADING,EMPLOYEES_LOADING_ERROR,USERES_LOADED,USER_SAVE } from './constants';

export const initialState = {
  employees: [],
  newemployee:{},
  loaded: false,
  loading:false,
  error:'',
  users:[],
  fullname:'full name'
};

// Read this: https://redux.js.org/basics/reducers

const appReducer = (state = initialState, action) => {
  switch (action.type) {
 
    case USERES_LOADED:{
    
      const { users } = action.payload;
    
      return{
      ...state,
      users:users
      }
    }

    case USER_SAVE:{
      return{
        ...state,
        fullname:action.payload
      }
    }
    case EMPLOYEES_LOADING:{
      return{
        ...state,
        loading:true
      }
    }
    case EMPLOYEES_LOADING_ERROR:{
      return{
        ...state,
        error: action.payload,
        loading:false
      }
    }
    case EMPLOYEES_LOADED: {
      const { employees } = action.payload;
      // CAREFUL: You can't modify state variable directly.
      return Object.assign({}, state, { 
        employees:employees,
        loaded:true,
        loading: false
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