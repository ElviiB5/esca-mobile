export const SET_PARTIES_SUCCESS = 'SET_PARTIES_SUCCESS';
export const SET_PARTIES_FAIL = 'SET_PARTIES_FAIL';

const initialState = {
    parties: [],
}

function partiesReducer(state = initialState, action) {
    switch (action.type) {
        case SET_PARTIES_SUCCESS:
            return { 
                ...state, 
                parties: action.payload, 
            };
        case SET_PARTIES_FAIL:
            return { 
                ...state, 
                parties: [], 
            };
        default:
            return state;
    }
}

export default partiesReducer;