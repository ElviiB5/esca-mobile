export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS';
export const USER_LOGIN_FAIL = 'USER_LOGIN_FAIL';

const initialState = {
    name: undefined,
    rol: undefined,
    token: null,
}

function authReducer(state = initialState, action) {
    switch (action.type) {
        case USER_LOGIN_SUCCESS:
            return { 
                ...state, 
                name: action.payload.userName, 
                rol: action.payload.userRol,
                token: action.payload.jwtToken,
            };
        case USER_LOGIN_FAIL:
            return { 
                ...state, 
                name: undefined, 
                rol: undefined,
                token: null,
            };
        default:
            return state;
    }
}

export default authReducer;