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

  dispatch({
    type: SET_LOADING,
    payload: true
  });
    try {
      console.log("getPartyInfo token", token)
      console.log("getPartyInfo partyName", partyName)
      const { data: partyInfo } = await axios.get(`${BASIC_URL}/ManagePoliticalInfo/GetInfoPolitician`, {
        headers: { Authorization: `Bearer ${token}` }
      });

      const { data: partiesFullInfo } = await axios.get(`${BASIC_URL}/ManageBasicInfo/GetPoliticalParty`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      console.log("proposals!!!!!!!!!!!!!!!:))))))))",partyInfo[0].proposals)

      const { 
        politicalPartyName, 
        politicalName,  
        logoImgPath } = partyInfo.find((party) => party.politicalPartyName === partyName)

      const { 
        address, 
        webSite,
        telephone,
        proposals,
        positions } = partiesFullInfo.find((party) => party.politicalPartyName === partyName)

      console.log("partyInfo.find",partiesFullInfo)
      console.log("positions",positions)

      dispatch({
          type: SET_CURRENT_PARTY_SUCCESS,
          payload: {
            politicalPartyName,
            politicalName,
            proposals,
            positions,
            logoImgPath,
            address,
            website: webSite,
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
    } finally {
      dispatch({
        type: SET_LOADING,
        payload: false
      });
    }
}

export const createParty = (userValues, token) => async (dispatch) => {
  console.log("loginFetch username", userValues.username, "password", userValues.password)

  dispatch({
    type: SET_LOADING,
    payload: true
  });

  try {
    const form = new FormData()
    form.append("DniPolitician",userValues.candidateDNI)
    form.append("FirstNamePolitician",userValues.candidateFirstname)
    form.append("LastNamePolitician",userValues.candidateLastname)
    form.append("DateBirthPolitician",userValues.candidateBornDate)
    form.append("userNamePolitician",userValues.candidateDNI)
    form.append("Password","$as5csdu57##xbbbcssoiavnds4398vwe&")
    form.append("GenderPolitician",userValues.candidateGender)
    form.append("MunicipalityName",userValues.municipality)
    form.append("StateName",userValues.state)
    form.append("Street",userValues.street)
    form.append("Number",userValues.number)
    form.append("Colony",userValues.neighbor)
    form.append("ZipCode",userValues.zip)
    form.append("PoliticalPartyName", userValues.partyName)
    form.append("Telephone", userValues.phone)
    form.append("WebSite", userValues.website)
    form.append('LogoImg', {
      uri: userValues.image,
      type: 'image/jpeg',
      name:  userValues.imageName,
    });
    form.append("Proposals", userValues.proposals)
    form.append("Postions", userValues.positions)
    form.append("Latitude", 101.1001)
    form.append("Longitude", 101.1001)

    console.log("form",form)
    const response = await axios.post(`${BASIC_URL}/InsertBasicInfo/InsertPoliticalParty`, form, {
      headers: { Authorization: `Bearer ${token}` }
    });
    console.log("response!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!",response)
    console.log("Auth.loginFetch data",response.data);
    console.log("Auth.loginFetch data",response.data.code);
    
    return { code: response.data.code, userCreatedSuccessful: true}
  } catch (e) {
    console.log(e)
    return { code: undefined, userCreatedSuccessful: false}
  } finally {
    dispatch({
      type: SET_LOADING,
      payload: false
    });
  }
}