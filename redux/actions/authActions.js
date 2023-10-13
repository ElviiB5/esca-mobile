export const SET_USER_AUTH = 'SET_USER_AUTH';

export const setLoginAuth = (name, rol) => dispatch => {
    dispatch({
        type: SET_USER_AUTH,
        payload: {
            userName: name,
            userRol: rol
        }
    });
};