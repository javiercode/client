import { ReducerType } from '../../enums/RouterPathEnum'
import { AuthAction,IAuthReducer } from '../../interfaces/store'

let initialPayload:IAuthReducer = {
  isLogin:false
};


const signInAction = (name:String,username:String,token:String) =>{
  return {
    type:ReducerType.SIGN_IN,
    payload:{
      isLogin:true,
      username:username,
      name:name,
      token:token,
    }
  }
}
const signOutAction = () =>{
  return {
    type:ReducerType.SIGN_OUT,
    payload:{
      isLogin:false
    }
  }
}

// const signOut = () =>{
//   initialPayload.isLogin=false;

//   let initialState:AuthAction = {
//       type: ReducerType.SIGN_OUT,
//       payload:initialPayload
//   };
//   return {
//     initialState
//   }
// }

export { signOutAction,signInAction}