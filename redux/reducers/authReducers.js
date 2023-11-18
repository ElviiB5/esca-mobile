export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS';
export const USER_LOGIN_FAIL = 'USER_LOGIN_FAIL';
export const GET_USER_SUCCESS = 'GET_USER_SUCCESS';
export const GET_USER_FAIL = 'GET_USER_FAIL';
export const SET_LOGOUT = 'SET_LOGOUT';

const initialState = {
    permissions: [],
    dni: undefined,
    userName: undefined,
    firstName: undefined,
    lastName: undefined,
    fullName: undefined,
    genderName: undefined,
    birth: undefined,
    municipality: undefined,
    state: undefined,
    street: undefined,
    number: undefined,
    neighbor: undefined,
    zipCode: undefined,
    latitude: undefined,
    longitude: undefined,
    rol: undefined,
    token: null,
}

function authReducer(state = initialState, action) {
    switch (action.type) {
        case USER_LOGIN_SUCCESS:
            return { 
                ...state, 
                dni: action.payload.dni,
                userName: action.payload.userName, 
                fullName: action.payload.fullName,
                genderName: action.payload.genderName,
                permissions: action.payload.permissions,
                rol: action.payload.userRol,
                token: action.payload.jwtToken,
            };
        case USER_LOGIN_FAIL:
            return { 
                ...state, 
                dni: undefined,
                userName: undefined, 
                fullName: undefined,
                genderName: undefined,
                permissions: [],
                rol: undefined,
                token: null,
            };
        case GET_USER_SUCCESS:
            return { 
                ...state, 
                firstName: action.payload.firstName,
                lastName: action.payload.lastName,
                birth: action.payload.birth,
                municipality: action.payload.municipality,
                state: action.payload.state,
                street: action.payload.street,
                number: action.payload.number,
                neighbor: action.payload.neighbor,
                zipCode: action.payload.zipCode,
                latitude: action.payload.latitude,
                longitude: action.payload.longitude,
            };
        case GET_USER_FAIL:
            return { 
                ...state, 
                firstName: undefined,
                lastName: undefined,
                birth: undefined,
                municipality: undefined,
                state: undefined,
                street: undefined,
                number: undefined,
                neighbor: undefined,
                zipCode: undefined,
                latitude: undefined,
                longitude: undefined,
            };
        case SET_LOGOUT:
            return {
                ...state,
                permissions: [],
                dni: undefined,
                userName: undefined,
                firstName: undefined,
                lastName: undefined,
                fullName: undefined,
                genderName: undefined,
                birth: undefined,
                municipality: undefined,
                state: undefined,
                street: undefined,
                number: undefined,
                neighbor: undefined,
                zipCode: undefined,
                latitude: undefined,
                longitude: undefined,
                rol: undefined,
                token: null,
            }
        default:
            return state;
    }
}

export default authReducer;