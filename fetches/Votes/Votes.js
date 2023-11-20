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
      const result = await axios.get(`${BASIC_URL}/ManageBasicInfo/GetVotes`);
      
      dispatch({
        type: SET_VOTES_SUCCESS,
        payload: {
            generalVotes: result.data.generalCount,
            stateVotes: result.data.stateVotes
        }
      });
      return { data: result, setVotesSuccessful: true}
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