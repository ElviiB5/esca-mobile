import { SET_USER_AUTH } from '../actions/authActions';

const initialState = {
    name: undefined,
    rol: undefined,
}

function authReducer(state = initialState, action) {
    switch (action.type) {
        case SET_USER_AUTH:
            return { 
                ...state, 
                name: action.payload.userName, 
                rol: action.payload.userRol 
            };
        default:
            return state;
    }
}

export default authReducer;