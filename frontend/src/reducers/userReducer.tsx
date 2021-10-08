import { USER_LOGIN_FAIL, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGOUT } from "../constants/userConstant";


export const userLoginReducer = (state = {}, action: UserLoginAction) => {
    switch (action.type) {
        case USER_LOGIN_REQUEST:
            return {loading: true};
            case USER_LOGIN_SUCCESS:
                return {loading: false, success: true, state: action.payload};
                case USER_LOGIN_FAIL:
                return { loading: false, success: false, error: action.payload}
    
        default:
            return state;
    }
}