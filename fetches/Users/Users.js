import axios from "axios";
import { SET_LOADING } from "../../redux/reducers/basicReducer";
import { BASIC_URL } from '@env';
import { GET_CANDIDATES_FAIL, GET_CANDIDATES_SUCCESS } from "../../redux/reducers/usersReducer";

export const getCandidates = (token) => async (dispatch) => {
    console.log("getCandidates")
  
    dispatch({
      type: SET_LOADING,
      payload: true
    });
  
    try {
      const { data } = await axios.get(`${BASIC_URL}/ManageBasicInfo/GetUsers`, {
        headers: { Authorization: `Bearer ${token}` }
      });

      console.log("data",data)

      const formattedData = data
      .filter(candidate => candidate.userTypeId === 2)
      .map(candidate => ({
        ...candidate,
        label: `${candidate.firstName} ${candidate.lastName}`,
        value: candidate.dni
      }));

      console.log("formattedData",formattedData)

      dispatch({
        type: GET_CANDIDATES_SUCCESS,
        payload: formattedData
      })
  
      return { getCandidatesSuccess: true }
    } catch (e) {
      console.log(e)

      dispatch({
        type: GET_CANDIDATES_FAIL,
      })
  
      return { getCandidatesSuccess: true }
    } finally {
      dispatch({
        type: SET_LOADING,
        payload: false
      });
    }
  }