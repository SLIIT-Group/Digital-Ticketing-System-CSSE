import {USER_LOADEDI,USER_LOADINGI,REGISTER_FAILI,REGISTER_SUCCESSI,LOGIN_FAILI,LOGOUT_SUCCESSI,LOGIN_SUCCESSI,AUTH_ERRORI} from "../actions/types";

const initialState = {
    token : localStorage.getItem('token'),
    isAuthenticated : null,
    isLoading : false,
    user: null,
    userName : localStorage.getItem('userName'),
    userEmail : localStorage.getItem('userEmail'),
};

export default function (state = initialState, action) {
    switch (action.type) {
        case  USER_LOADINGI:
            return {
              ...state,
              isLoading: true
            };
        case  USER_LOADEDI:
            return {
                ...state,
                isAuthenticated: true,
                isLoading: false,
                user: action.payload,
                userName : localStorage.getItem('userName'),
                userEmail : localStorage.getItem('userEmail'),
            };

        case  LOGIN_SUCCESSI:
        case  REGISTER_SUCCESSI:
            localStorage.setItem('token', action.payload.token);
            localStorage.setItem('userName', action.payload.user.userName);
            localStorage.setItem('userEmail', action.payload.user.insEmail);
            return {
                ...state,
                ...action.payload,
                userName : localStorage.getItem('userName'),
                userEmail : localStorage.getItem('userEmail'),
                isAuthenticated: true,
                isLoading: false
            };

        case  AUTH_ERRORI:
        case  LOGIN_FAILI:
        case  LOGOUT_SUCCESSI:
        case  REGISTER_FAILI:
            localStorage.removeItem('token');
            localStorage.removeItem('userName');
            localStorage.removeItem('userEmail');
            return {
                ...state,
                token: null,
                user: null,
                isAuthenticated: false,
                isLoading: false
            };

        default : return state;
    }
}