import axios from "axios";
import { BASIC_URL } from '@env';
import { GET_USER_FAIL, GET_USER_SUCCESS, USER_LOGIN_FAIL, USER_LOGIN_SUCCESS } from "../../redux/reducers/authReducers";

export const loginFetch = (username, password) => async (dispatch) => {
    console.log("loginFetch username", username, "password", password)
    try {
      const form = new FormData()
      form.append("DniOrUserName",username)
      form.append("Password",password)
      const { data } = await axios.post(`${BASIC_URL}/ManageAccess/Login`, form);
      console.log("Auth.loginFetch data",data);
      
      if (data.token) {
        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: {
                dni: data.dni,
                userName: data.userName,
                fullName: data.fullName,
                genderName: data.genderName,
                permissions: data.permissions,
                userRol: data.userType,
                jwtToken: data.token
            }
        });
      
        return { data, isLogin: true}
      } else {
        return { data, isLogin: false}
      }
    } catch (error) {
      console.log("Auth.loginFetch error",error);
      console.error(error);
      
      dispatch({
          type: USER_LOGIN_FAIL
      });
      return { data: undefined, isLogin: false}
    }
}

export const getProfileInfo = (token, dni) => async (dispatch) => {
  console.log("getProfileInfo token", token)
  console.log("getProfileInfo dni", dni)
  try {
    const { data } = await axios.get(`${BASIC_URL}/ManageBasicInfo/GetUsers`, {
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

    console.log("Auth.getProfileInfo data",data);

    const userInfo = data.find((user) => user.dni === dni)

    const {
      municipalityId, 
      street, 
      number, 
      colony, 
      zipCode, 
      latitude,
      longitude,
    } = addresses.find((address) => userInfo.addressId === address.addressId)

    const { municipalityName, stateId } = municipalities.find((municipality) => municipality.municipalityId === municipalityId)

    const { stateName } = states.find((state) => state.stateId === stateId)
    
    dispatch({
        type: GET_USER_SUCCESS,
        payload: {
          firstName: userInfo.firstName,
          lastName: userInfo.lastName,
          birth: userInfo.dateOfBirth,
          municipality: municipalityName,
          state: stateName,
          street,
          number,
          neighbor: colony,
          zipCode,
          latitude,
          longitude,
        }
    });
  
    return { data, setUserSuccess: true}
  } catch (error) {
    console.log("Auth.getProfileInfo error",error);
    console.error(error);
    
    dispatch({
        type: GET_USER_FAIL
    });
    return { data: undefined, setUserSuccess: false}
  }
}