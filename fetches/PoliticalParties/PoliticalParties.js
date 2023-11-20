import axios from "axios";
import { PRIVATE_ACCESS_TOKEN, BASIC_URL } from '@env';
import { 
  SET_PARTIES_SUCCESS, 
  SET_PARTIES_FAIL, 
  SET_CURRENT_PARTY_SUCCESS,
  SET_CURRENT_PARTYS_FAIL,
} from "../../redux/reducers/partiesReducer";
import { SET_LOADING } from "../../redux/reducers/basicReducer";

export const getPartiesFetch = (token) => async (dispatch) => {
    console.log("getPartiesFetch token", token)

    dispatch({
      type: SET_LOADING,
      payload: true
    });

    try {
      const { data } = await axios.get(`${BASIC_URL}/ManageBasicInfo/GetPoliticalParty`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      data.map((item) => {
        return {
          ...item,
          image: `data:image/png;base64,${data.LogoImg}`
        }
      })

      console.log("PoliticalParties.getPartiesFetch data",data);
      
      dispatch({
          type: SET_PARTIES_SUCCESS,
          payload: data
      });
    
      return { data, setPartiesSuccess: true}
    } catch (error) {
      console.log("PoliticalParties.getPartiesFetch error",error);
      console.error(error);
      
      dispatch({
          type: SET_PARTIES_FAIL
      });
      return { data: undefined, setPartiesSuccess: false}
    } finally {
      dispatch({
        type: SET_LOADING,
        payload: false
      });
    }
}

export const getPartyInfo = (token, partyName) => async (dispatch) => {
    try {
      console.log("getPartyInfo token", token)
      console.log("getPartyInfo partyName", partyName)
      const { data: partyInfo } = await axios.get(`${BASIC_URL}/ManagePoliticalInfo/GetInfoPolitician`, {
        headers: { Authorization: `Bearer ${token}` }
      });

      const { data: partiesFullInfo } = await axios.get(`${BASIC_URL}/ManageBasicInfo/GetPoliticalParty`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      
      const { data: addresses } = await axios.get(`${BASIC_URL}/ManageBasicInfo/GetAddress`, {
        headers: { Authorization: `Bearer ${token}` }
      });

      const { data: municipalities } = await axios.get(`${BASIC_URL}/ManageBasicInfo/GetMunicipality`, {
        headers: { Authorization: `Bearer ${token}` }
      });

      const { data: states } = await axios.get(`${BASIC_URL}/ManageBasicInfo/GetStates`, {
        headers: { Authorization: `Bearer ${token}` }
      });

      const { data: positions } = await axios.get(`${BASIC_URL}/ManageBasicInfo/GetPositions`, {
        headers: { Authorization: `Bearer ${token}` }
      });

      console.log("addresses",addresses)
      console.log("municipalities",municipalities)
      console.log("states",states)

      const { 
        politicalPartyName, 
        politicalName, 
        proposals, 
        logoImgPath } = partyInfo.find((party) => party.politicalPartyName === partyName)

      const { 
        addressId, 
        website,
        telephone } = partiesFullInfo.find((party) => party.politicalPartyName === partyName)

      console.log("partyInfo.find",politicalPartyName, 
      politicalName, 
      proposals, 
      addressId, 
      website,
      telephone)

      const { 
        municipalityId, 
        street, 
        number, 
        colony, 
        zipCode, 
        latitude,
        longitude,
        } = addresses.find((address) => address.addressId === addressId)

      console.log("addresses.find",municipalityId, 
      street, 
      number, 
      colony, 
      zipCode, 
      latitude,
      longitude)

      const { municipalityName, stateId } = municipalities.find((municipality) => municipality.municipalityId === municipalityId)

      console.log("municipalities.find",municipalityName, stateId)

      const { stateName } = states.find((state) => state.stateId === stateId)

      console.log("states.find",stateName)

      dispatch({
          type: SET_CURRENT_PARTY_SUCCESS,
          payload: {
            politicalPartyName,
            politicalName,
            proposals,
            logoImgPath,
            municipality: municipalityName,
            state: stateName,
            street,
            number,
            neighbor: colony,
            zipCode,
            latitude,
            longitude,
            website,
            phone: telephone
          }
      });
    
      return { data: partyInfo, setPartySuccess: true}
    } catch (error) {
      console.log("PoliticalParties.getPartyInfo error",error);
      console.error(error);
      
      dispatch({
          type: SET_CURRENT_PARTYS_FAIL
      });
      return { data: undefined, setPartySuccess: false}
    }
}