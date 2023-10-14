import axios from "axios";
import { BASIC_URL } from '@env';
import { USER_LOGIN_FAIL, USER_LOGIN_SUCCESS } from "../../redux/reducers/authReducers";

export const loginFetch = (username, password) => async (dispatch) => {
    console.log("loginFetch username", username, "password", password)
    try {
      const form = new FormData()
      form.append("DniOrUserName",username)
      form.append("Password",password)
      const { data } = await axios.post(`${BASIC_URL}/ManageAccess/Login`, form);
      console.log("Auth.loginFetch data",data);
      
      dispatch({
          type: USER_LOGIN_SUCCESS,
          payload: {
              userName: data.fullName,
              userRol: data.userType,
              jwtToken: data.token
          }
      });
    
      return { data, isLogin: true}
    } catch (error) {
      console.log("Auth.loginFetch error",error);
      console.error(error);
      
      dispatch({
          type: USER_LOGIN_FAIL
      });
      return { data: undefined, isLogin: false}
    }
}