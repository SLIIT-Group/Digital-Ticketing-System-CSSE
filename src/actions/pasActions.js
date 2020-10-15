import {USER_LOADING,USER_LOADED,REGISTER_FAIL,REGISTER_SUCCESS,LOGOUT_SUCCESS,LOGIN_FAIL,LOGIN_SUCCESS,AUTH_ERROR} from "./types";
import {returnErrors} from "./errorActions";
import axios from 'axios';




/////////////////////////////////////////////////////////////////////////////

export const login = ({pasUserName , pasPassword}) => dispatch => {
    const config = {
        headers: {
            'Content-Type' : 'application/json'
        }
    }
    const body = JSON.stringify({pasUserName, pasPassword});



    axios.post('http://localhost:5000/api/pas/login', body, config).then(res => dispatch({
        type:LOGIN_SUCCESS,
        payload: res.data
    })).catch(error => {
        dispatch(returnErrors(error.response.data, error.response.status, 'LOGIN_FAIL'));
        dispatch({
            type: LOGIN_FAIL
        }) ;
    });

}


/////////////////////////////////////////////////////////////////////////////////
export const loadUser = () => (dispatch, getState) => {
    dispatch ({type: USER_LOADING});

    axios.get('http://localhost:5000/api/pas/token', tokenConfig(getState)).then(res => dispatch({
        type: USER_LOADED,
        payload: res.data
    })).catch(error => {
        dispatch({
            type:AUTH_ERROR
        })
    });
}

/////////////////////////////////////////////////////////////////////////////////////////
export const register = ({pasUserName, pasEmail, pasPassword}) => dispatch => {
    const config = {
        headers: {
            'Content-Type' : 'application/json'
        }
    }
    const body = JSON.stringify({pasUserName,pasEmail,pasPassword});



    axios.post('http://localhost:5000/api/cus/register', body, config).then(res => dispatch({
        type:REGISTER_SUCCESS,
        payload: res.data
    })).catch(error => {
        dispatch(returnErrors(error.response.data, error.response.status, 'REGISTER_FAIL'));
        dispatch({
           type: REGISTER_FAIL
       }) ;
    });

}
/////////////////////////////////////////////////////////////////////

export const logout = () => {
    return{
        type : LOGOUT_SUCCESS
    };
};



//////////////////////////////////////////////////////////////////////
export const tokenConfig = (getState) => {
    const token = getState().pas.token;
    const config = {
        headers : {
            "Content-type": "application/json"
        }
    }

    if(token){
        config.headers['ticketApp_auth'] = token;
    }
    return config;
}