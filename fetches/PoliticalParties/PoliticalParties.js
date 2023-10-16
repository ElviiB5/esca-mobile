import axios from "axios";
import { PRIVATE_ACCESS_TOKEN, BASIC_URL } from '@env';
import { SET_PARTIES_SUCCESS, SET_PARTIES_FAIL } from "../../redux/reducers/partiesReducer";

export const getPartiesFetch = (token) => async (dispatch) => {
    console.log("getPartiesFetch token", token)
    try {
      const { data } = await axios.get(`${BASIC_URL}/ManageBasicInfo/GetPoliticalParty`, {
        headers: { Authorization: `Bearer ${token}` }
      });
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
    }
}