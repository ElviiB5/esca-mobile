import axios from "axios";
import { BASIC_URL } from '@env';
import { SET_MUNICIPALITIES_SUCCESS, SET_STATES_FAIL, SET_STATES_SUCCESS } from "../../redux/reducers/generalReducer";
import { SET_LOADING } from "../../redux/reducers/basicReducer";


export const getStatesAndMunicipalities = () => async (dispatch) => {
    console.log("getStatesAndMunicipalities")

    dispatch({
      type: SET_LOADING,
      payload: true
    });
  
    try {
      const { data: states } = await axios.get(`${BASIC_URL}/ManageBasicInfo/GetStates`);
      const { data: municipalities } = await axios.get(`${BASIC_URL}/ManageBasicInfo/GetMunicipality`);

      const formattedStates = states.map((state) => {
        return {
            label: state.stateName,
            value: state.stateName,
            id: state.stateId
        }
      })
      const formattedMunicipalities = municipalities.map((municipality) => {
        return {
            label: municipality.municipalityName,
            value: municipality.municipalityName,
            id: municipality.municipalityId,
            stateid: municipality.stateId
        }
      })
      
      dispatch({
        type: SET_STATES_SUCCESS,
        payload: {
            states: formattedStates,
        }
      });

      dispatch({
        type: SET_MUNICIPALITIES_SUCCESS,
        payload: formattedMunicipalities
      });
      return { states: formattedStates, municipalities: formattedMunicipalities, setStatesSuccess: true}
    } catch (error) {
      console.log("General.getStates error",error);
      console.error(error);
      
      dispatch({
          type: SET_STATES_FAIL
      });
      dispatch({
          type: SET_MUNICIPALITIES_FAIL
      });
      return { data: undefined, municipalities: undefined, setStatesSuccess: false}
    } finally {
    dispatch({
      type: SET_LOADING,
      payload: false
    });
  }
}