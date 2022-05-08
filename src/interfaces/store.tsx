
export interface IAuthReducer {
    isLogin: boolean;
    token?: String;
    username?:String;
    name?:String;
}


export interface AuthAction {
    type: string
    payload: IAuthReducer
  }

// export {IAuthReducer};