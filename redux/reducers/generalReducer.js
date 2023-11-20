export const SET_STATES_SUCCESS = 'SET_STATES_SUCCESS';
export const SET_STATES_FAIL = 'SET_STATES_FAIL';
export const SET_MUNICIPALITIES_SUCCESS = 'SET_MUNICIPALITIES_SUCCESS';
export const SET_MUNICIPALITIES_FAIL = 'SET_MUNICIPALITIES_FAIL';

const initialState = {
    states: [],
    municipalities: [],
}

function generalReducer(state = initialState, action) {
    switch (action.type) {
        case SET_STATES_SUCCESS:
            return { 
                ...state, 
                states: action.payload, 
            };
        case SET_STATES_FAIL:
            return { 
                ...state, 
                states: [], 
            };
        case SET_MUNICIPALITIES_SUCCESS:
            return { 
                ...state, 
                municipalities: action.payload, 
            };
        case SET_MUNICIPALITIES_FAIL:
            return { 
                ...state, 
                municipalities: [], 
            };
        default:
            return state;
    }
}

export default generalReducer;