import {USER_LOADINGI,USER_LOADEDI,REGISTER_FAILI,REGISTER_SUCCESSI,LOGOUT_SUCCESSI,LOGIN_FAILI,LOGIN_SUCCESSI,AUTH_ERRORI} from "./types";
import {returnErrors} from "./errorActions";
import axios from 'axios';




/////////////////////////////////////////////////////////////////////////////

export const login = ({insEmail , password}) => dispatch => {
    const config = {
        headers: {
            'Content-Type' : 'application/json'
        }
    }
    const body = JSON.stringify({insEmail, password});



    axios.post('http://localhost:5000/api/ins/login', body, config).then(res => dispatch({
        type:LOGIN_SUCCESSI,
        payload: res.data
    })).catch(error => {
        dispatch(returnErrors(error.response.data, error.response.status, 'LOGIN_FAIL'));
        dispatch({
            type: LOGIN_FAILI
        }) ;
    });

}


/////////////////////////////////////////////////////////////////////////////////
export const loadUser = () => (dispatch, getState) => {
    dispatch ({type: USER_LOADINGI});

    axios.get('http://localhost:5000/api/ins/token', tokenConfig(getState)).then(res => dispatch({
        type: USER_LOADEDI,
        payload: res.data
    })).catch(error => {
        dispatch({
            type:AUTH_ERRORI
        })
    });
}

/////////////////////////////////////////////////////////////////////////////////////////
export const register = ({userName, insEmail, password}) => dispatch => {
    const config = {
        headers: {
            'Content-Type' : 'application/json'
        }
    }
    const body = JSON.stringify({userName,insEmail,password});



    axios.post('http://localhost:5000/api/ins/register', body, config).then(res => dispatch({
        type:REGISTER_SUCCESSI,
        payload: res.data
    })).catch(error => {
        dispatch(returnErrors(error.response.data, error.response.status, 'REGISTER_FAIL'));
        dispatch({
           type: REGISTER_FAILI
       }) ;
    });

}
/////////////////////////////////////////////////////////////////////

export const logout = () => {
    return{
        type : LOGOUT_SUCCESSI
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