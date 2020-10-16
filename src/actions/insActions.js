import {USER_LOADING,USER_LOADED,REGISTER_FAIL,REGISTER_SUCCESS,LOGOUT_SUCCESS,LOGIN_FAIL,LOGIN_SUCCESS,AUTH_ERROR} from "./types";
import {returnErrors} from "./errorActions";
import axios from 'axios';




/////////////////////////////////////////////////////////////////////////////

export const login = ({insEmail , insPassword}) => dispatch => {
    const config = {
        headers: {
            'Content-Type' : 'application/json'
        }
    }
    const body = JSON.stringify({insEmail, insPassword});



    axios.post('http://localhost:5000/api/ins/login', body, config).then(res => dispatch({
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

    axios.get('http://localhost:5000/api/ins/token', tokenConfig(getState)).then(res => dispatch({
        type: USER_LOADED,
        payload: res.data
    })).catch(error => {
        dispatch({
            type:AUTH_ERROR
        })
    });
}

/////////////////////////////////////////////////////////////////////////////////////////
export const register = ({insUserName, insEmail, insPassword}) => dispatch => {
    const config = {
        headers: {
            'Content-Type' : 'application/json'
        }
    }
    const body = JSON.stringify({insUserName,insEmail,insPassword});



    axios.post('http://localhost:5000/api/ins/register', body, config).then(res => dispatch({
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
    const token = getState().ins.token;
    const config = {
        headers : {
            "Content-type": "application/json"
        }
    }

    if(token){
        config.headers['ticketInspector_auth'] = token;
    }
    return config;
}