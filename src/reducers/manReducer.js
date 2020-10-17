import {USER_LOADEDM,USER_LOADINGM,REGISTER_FAILM,REGISTER_SUCCESSM,LOGIN_FAILM,LOGOUT_SUCCESSM,LOGIN_SUCCESSM,AUTH_ERRORM} from "../actions/types";

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
        case  USER_LOADINGM:
            return {
              ...state,
              isLoading: true
            };
        case  USER_LOADEDM:
            return {
                ...state,
                isAuthenticated: true,
                isLoading: false,
                user: action.payload,
                userName : localStorage.getItem('userName'),
                userEmail : localStorage.getItem('userEmail'),
            };

        case  LOGIN_SUCCESSM:
        case  REGISTER_SUCCESSM:
            localStorage.setItem('token', action.payload.token);
            localStorage.setItem('userName', action.payload.user.userName);
            localStorage.setItem('userEmail', action.payload.user.manEmail);
            return {
                ...state,
                ...action.payload,
                userName : localStorage.getItem('userName'),
                userEmail : localStorage.getItem('userEmail'),
                isAuthenticated: true,
                isLoading: false
            };

        case  AUTH_ERRORM:
        case  LOGIN_FAILM:
        case  LOGOUT_SUCCESSM:
        case  REGISTER_FAILM:
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