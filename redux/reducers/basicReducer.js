export const SET_LOADING = 'SET_LOADING';

const initialState = {
    isLoading: false,
}

function basicReducer(state = initialState, action) {
    switch (action.type) {
        case SET_LOADING:
            return { 
                ...state, 
                isLoading: action.payload, 
            };
        default:
            return state;
    }
}

export default basicReducer;