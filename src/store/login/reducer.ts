import { ReducerType } from '../../enums/RouterPathEnum'
import { AuthAction, IAuthReducer } from '../../interfaces/store'

let initialState:IAuthReducer = {
    isLogin: false
};


function AuthReducer( state = initialState,action:AuthAction ) {
  switch (action.type) {
    case ReducerType.SIGN_IN:
      let userLogin:IAuthReducer = {
          isLogin:true,
          token:action.payload.token,
          username:action.payload.username,
          name:action.payload.name
      }
      return userLogin;
    case ReducerType.SIGN_OUT:
      return initialState
    default:
      return state;
  }
}

export default AuthReducer;
