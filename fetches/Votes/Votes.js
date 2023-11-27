import axios from "axios";
import { BASIC_URL } from '@env';
import { SET_VOTES_FAIL, SET_VOTES_SUCCESS } from "../../redux/reducers/votesReducer";
import { SET_LOADING } from "../../redux/reducers/basicReducer";


export const getVotes = () => async (dispatch) => {
    console.log("getVotes")

    dispatch({
      type: SET_LOADING,
      payload: true
    });
  
    try {
      const { data } = await axios.get(`${BASIC_URL}/ManageGeneralElectionsInfo/GetVote`);

      console.log(data)
      
      dispatch({
        type: SET_VOTES_SUCCESS,
        payload: {
            generalVotes: data.generalCount,
            stateVotes: data.stateVotes
        }
      });
      return { data, setVotesSuccessful: true}
    } catch (error) {
      console.log("Vote.getVotes error",error);
      console.error(error);
      
      dispatch({
          type: SET_VOTES_FAIL
      });
      return { data: undefined, setVotesSuccessful: false}
    } finally {
    dispatch({
      type: SET_LOADING,
      payload: false
    });
  }
}

export const setVote = (partyName, token) => async (dispatch) => {
  console.log("setVote", partyName)

  dispatch({
    type: SET_LOADING,
    payload: true
  });

  try {
    const form = new FormData()
    form.append("PoliticalPartyName", partyName)

    console.log("form",form)
    const { data } = await axios.post(`${BASIC_URL}/InsertBasicInfo/InsertVote`, form, {
      headers: { Authorization: `Bearer ${token}` }
    });
    console.log("Auth.loginFetch data",data);
    console.log("Auth.loginFetch data",data.code);
    
    return { code: data.code, message: data.message, userCreatedSuccessful: true}
  } catch (e) {
    console.log(e)
    return { code: undefined, message: undefined, userCreatedSuccessful: false}
  } finally {
    dispatch({
      type: SET_LOADING,
      payload: false
    });
  }
}