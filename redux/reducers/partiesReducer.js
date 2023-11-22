export const SET_PARTIES_SUCCESS = 'SET_PARTIES_SUCCESS';
export const SET_PARTIES_FAIL = 'SET_PARTIES_FAIL';
export const SET_CURRENT_PARTY_SUCCESS = 'SET_CURRENT_PARTY_SUCCESS';
export const SET_CURRENT_PARTY_FAIL = 'SET_CURRENT_PARTY_FAIL';

const initialState = {
    parties: [],
    currentProposals: [],
    currentPositions: [],
    currentPartyName: undefined,
    currentCandidateName: undefined,
    currentLogo: undefined,
    currentAddress: undefined,
    currentWebsite: undefined,
    currentPhone: undefined,
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
        case SET_CURRENT_PARTY_SUCCESS:
            return { 
                ...state, 
                currentPartyName: action.payload.politicalPartyName, 
                currentCandidateName: action.payload.politicalName, 
                currentProposals: action.payload.proposals, 
                currentPositions: action.payload.positions, 
                currentLogo: action.payload.logoImgPath, 
                currentAddress: action.payload.address,
                currentWebsite: action.payload.website,
                currentPhone: action.payload.phone,
            };
        case SET_CURRENT_PARTY_FAIL:
            return { 
                ...state, 
                currentPartyName: undefined, 
                currentCandidateName: undefined, 
                currentProposals: [], 
                currentPositions: [], 
                currentLogo: undefined, 
                currentAddress: undefined,
                currentWebsite: undefined,
                currentPhone: undefined,
            };
        default:
            return state;
    }
}

export default partiesReducer;