export const SET_VOTES_SUCCESS = 'SET_VOTES_SUCCESS';
export const SET_VOTES_FAIL = 'SET_VOTES_FAIL';

const initialState = {
    generalVotes: [],
    stateVotes: [],
}

function votesReducer(state = initialState, action) {
    switch (action.type) {
        case SET_VOTES_SUCCESS:
            return { 
                ...state, 
                generalVotes: action.payload.generalVotes, 
                stateVotes: action.payload.stateVotes, 
            };
        case SET_VOTES_FAIL:
            return { 
                ...state, 
                generalVotes: [], 
                stateVotes: [], 
            };
        default:
            return state;
    }
}

export default votesReducer;