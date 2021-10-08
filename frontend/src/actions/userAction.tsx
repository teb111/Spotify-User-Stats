import axios from "axios"
import { USER_LOGIN_FAIL, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS } from "../constants/userConstant";

export const login = () => async (dispatch: DispatchType) => {
    try {
      dispatch({
        type: USER_LOGIN_REQUEST,
        
      });

      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const { data } = await axios.get("/login");

      dispatch({
        type: USER_LOGIN_SUCCESS,
        payload: data
      })
        
    } catch (error: any) {
   console.log(error);
        dispatch({
          type: USER_LOGIN_FAIL,
          payload:
            error.response && error.response.data.message
              ? error.response.data.message
              : error.message,
        });
      
        
    }
}