import { EMPLOYEES_LOADED, EMPLOYEES_ADDED,EMPLOYEES_LOADING,EMPLOYEES_LOADING_ERROR } from './constants';

export const employeesLoading = (employees)=> {
  return {
    type: EMPLOYEES_LOADING,
    payload: {
      employees
    }
  };
}

export const employeesLoaded = (employees) => {
  return {
    type: EMPLOYEES_LOADED,
    payload: {
      employees
    }
  };
}
export const employeesLoadingError = (error) => {
  return {
    type: EMPLOYEES_LOADING_ERROR,
    payload: {
      error
    }
  };
}

export const employeesAdded = (newemployee) => {
  return {
    type: EMPLOYEES_ADDED,
    payload: {
      newemployee
    }
  };
}
export const fetchEmployees = () => dispatch => {
dispatch(employeesLoading());
return fetch("http://localhost:3004/employees")
  .then(data => data.json())
  .then(
    
    employees => dispatch(employeesLoaded(employees)),
    error => dispatch(employeesLoadingError(error))
  );
};



