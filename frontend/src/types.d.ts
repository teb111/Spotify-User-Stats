type UserLoginAction = {
  loading?: boolean;
  success?: boolean;
  type: userLoginType;
  payload?: {};
  error?: Error | null;
};

type userLoginType =
  | typeof USER_LOGIN_FAIL
  | typeof USER_LOGIN_REQUEST
  | typeof USER_LOGIN_SUCCESS;

type DispatchType = (args: UserLoginAction) => UserLoginAction;

interface stateType {
  loading?: boolean;
  success?: boolean;
}
