export const SET_PARTIES_SUCCESS = 'SET_PARTIES_SUCCESS';
export const SET_PARTIES_FAIL = 'SET_PARTIES_FAIL';
export const SET_CURRENT_PARTY_SUCCESS = 'SET_CURRENT_PARTY_SUCCESS';
export const SET_CURRENT_PARTY_FAIL = 'SET_CURRENT_PARTY_FAIL';

const initialState = {
    parties: [],
    currentProposals: [],
    currentPartyName: undefined,
    currentCandidateName: undefined,
    currentLogo: undefined,
    currentMunicipality: undefined,
    currentState: undefined,
    currentStreet: undefined,
    currentNumber: undefined,
    currentNeighbor: undefined,
    currentZipCode: undefined,
    currentLatitude: undefined,
    currentLongitude: undefined,
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
                currentLogo: action.payload.logoImgPath, 
                currentMunicipality: action.payload.municipality,
                currentState: action.payload.state,
                currentStreet: action.payload.street,
                currentNumber: action.payload.number,
                currentNeighbor: action.payload.neighbor,
                currentZipCode: action.payload.zipCode,
                currentLatitude: action.payload.latitude,
                currentLongitude: action.payload.longitude,
                currentWebsite: action.payload.website,
                currentPhone: action.payload.phone,
            };
        case SET_CURRENT_PARTY_FAIL:
            return { 
                ...state, 
                currentPartyName: undefined, 
                currentCandidateName: undefined, 
                currentProposals: [], 
                currentLogo: undefined, 
                currentMunicipality: undefined,
                currentState: undefined,
                currentStreet: undefined,
                currentNumber: undefined,
                currentNeighbor: undefined,
                currentZipCode: undefined,
                currentLatitude: undefined,
                currentLongitude: undefined,
                currentWebsite: undefined,
                currentPhone: undefined,
            };
        default:
            return state;
    }
}

export default partiesReducer;