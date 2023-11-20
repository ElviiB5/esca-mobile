export const GET_CANDIDATES_SUCCESS = 'GET_CANDIDATES_SUCCESS';
export const GET_CANDIDATES_FAIL = 'GET_CANDIDATES_FAIL';

const initialState = {
    candidates: [],
}

function usersReducer(state = initialState, action) {
    switch (action.type) {
        case GET_CANDIDATES_SUCCESS:
            return { 
                ...state, 
                candidates: action.payload
            };
        case GET_CANDIDATES_FAIL:
            return { 
                ...state, 
                candidates: []
            };
        default:
            return state;
    }
}

export default usersReducer;