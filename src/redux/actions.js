import {CARS_LOADING,CARS_LOADED,CARS_LOADING_ERROR,CARS_CHANGE,LOGIN_SUCCESS, LOGIN_ERROR,CARS_SAVING_ERROR,CAR_SAVING,CAR_SAVED,CARS_SORTED,DATES_LOADING,DATES_LOADED,DATES_LOADING_ERROR,CAR_ID} from './constants';

export const loginSuccess = admin => {
  return {
    type: LOGIN_SUCCESS,
    payload: {
      admin
    }
  };
};
export const loginError = () => {
  return {
    type: LOGIN_ERROR
  };
};
export const login = (username,password) => {
  return dispatch => {
    return fetch("http://localhost:3004/admins")
      .then(data => data.json())
      .then(admins => {
        const admin = admins.find(admin => ( admin.username === username && admin.password === password));
        if (admin!==undefined && admin!==null){
          dispatch(loginSuccess(admin));
        } else {
          dispatch(loginError());
        }
      });
  };
};

export const datesLoading = ()=> {
  return {
    type: DATES_LOADING
  };
}

export const datesLoaded = (dates) => {
  return {
    type: DATES_LOADED,
    payload: {
      dates
    }
  };
}

export const fetchDates = (id) => dispatch => {
  dispatch(datesLoading());
  return fetch("http://localhost:3004/dates")
    .then(data=>data.json())
    .then(response=>{return response.filter(data=>data.id===id.toString())})
    .then(
      dates=>dispatch(datesLoaded(dates)),
      error=>dispatch(datesLoadingError(error))
    );
}


export const datesLoadingError = (error) => {
  return {
    type: DATES_LOADING_ERROR,
    payload: {
      error
    }
  };
}

export const fetchCars = () => dispatch => {
  dispatch(carsLoading());
  return fetch("http://localhost:3004/cars")
    .then(data => data.json())
    .then(
      cars => dispatch(carsLoaded(cars)),
      error => dispatch(carsLoadingError(error))
    );
  };
export const carsLoading = ()=> {
    return {
      type: CARS_LOADING
    };
  }
  
export const carsLoaded = (cars) => {
    return {
      type: CARS_LOADED,
      payload: {
        cars
      }
    };
  }
export const carsLoadingError = (error) => {
    return {
      type: CARS_LOADING_ERROR,
      payload: {
        error
      }
    };
  }
export const onCarChange=(changedCar)=> dispatch =>{
  dispatch({
    type:CARS_CHANGE,
    payload: {
      changedCar
    }
    })
  
}

export const saveNewCar = (newcar) => dispatch => {
  /*dispatch(carSaving());
  return fetch("http://localhost:3004/cars")
    .then(data => data.json())
    .then(
      newcar => dispatch(carsLoaded(newcar)),
      error => dispatch(carsLoadingError(error))
    );*/
  dispatch(carSaving());
   return fetch("http://localhost:3004/cars", {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(newcar)
    })
   /* .then(res => {
      if(res.status !== 201) {
      //  this.setState({ isSaving: false, error: `Saving returned status ${res.status}`})
      dispatch(carSavingError(res.status));
      } else {

        dispatch(carSaved());
        dispatch(fetchCars());
        this.history.push("/list");

      }
    })*/
    .then(data => data.json())
    .then(
      dispatch(carSaved()),
      error => dispatch(carSavingError(error))
    )
  }
  export const carSavingError = (error) => {
    return {
      type: CARS_SAVING_ERROR,
      payload: {
        error
      }
    };
  }
  export const carSaving = () => {
    return {
      type: CAR_SAVING
    };
  }
  /*export const carSaved = () => {
    return {
      type: CAR_SAVED

    };
  }*/
  export const carAdded = () => {
    return {
      type: CAR_SAVED,
      //payload: {       newcar      }
    };
  }
  export const sortCars = (sortedcars)=>{


        return{
                type:CARS_SORTED,
                payload: sortedcars
              }
    
    
      
 };
 export const setCarId=(id)=>{
    return {
      type: CAR_ID,
      payload: id
    }
 }


