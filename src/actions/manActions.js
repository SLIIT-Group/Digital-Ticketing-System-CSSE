import {USER_LOADINGM,USER_LOADEDM,REGISTER_FAILM,REGISTER_SUCCESSM,LOGOUT_SUCCESSM,LOGIN_FAILM,LOGIN_SUCCESSM,AUTH_ERRORM} from "./types";
import {returnErrors} from "./errorActions";
import axios from 'axios';




/////////////////////////////////////////////////////////////////////////////

export const login = ({manEmail , password}) => dispatch => {
    const config = {
        headers: {
            'Content-Type' : 'application/json'
        }
    }
    const body = JSON.stringify({manEmail, password});



    axios.post('http://localhost:5000/api/man/login', body, config).then(res => dispatch({
        type:LOGIN_SUCCESSM,
        payload: res.data
    })).catch(error => {
        dispatch(returnErrors(error.response.data, error.response.status, 'LOGIN_FAIL'));
        dispatch({
            type: LOGIN_FAILM
        }) ;
    });

}


/////////////////////////////////////////////////////////////////////////////////
export const loadUser = () => (dispatch, getState) => {
    dispatch ({type: USER_LOADINGM});

    axios.get('http://localhost:5000/api/man/token', tokenConfig(getState)).then(res => dispatch({
        type: USER_LOADEDM,
        payload: res.data
    })).catch(error => {
        dispatch({
            type:AUTH_ERRORM
        })
    });
}

/////////////////////////////////////////////////////////////////////////////////////////
export const register = ({userName, manEmail, password}) => dispatch => {
    const config = {
        headers: {
            'Content-Type' : 'application/json'
        }
    }
    const body = JSON.stringify({userName,manEmail,password});



    axios.post('http://localhost:5000/api/man/register', body, config).then(res => dispatch({
        type:REGISTER_SUCCESSM,
        payload: res.data
    })).catch(error => {
        dispatch(returnErrors(error.response.data, error.response.status, 'REGISTER_FAIL'));
        dispatch({
           type: REGISTER_FAILM
       }) ;
    });

}
/////////////////////////////////////////////////////////////////////

export const logout = () => {
    return{
        type : LOGOUT_SUCCESSM
    };
};



//////////////////////////////////////////////////////////////////////
export const tokenConfig = (getState) => {
    const token = getState().man.token;
    const config = {
        headers : {
            "Content-type": "application/json"
        }
    }

    if(token){
        config.headers['ticketManager_auth'] = token;
    }
    return config;
}