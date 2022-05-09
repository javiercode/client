// import { useDispatch, useSelector, useStore } from 'react-redux';
import { store } from '../index';
import { signOutAction, signInAction } from './action';

const signIn = (name: String, username: String, token: String) => {
    store.dispatch(signInAction(name, username, "token"));
}

const signOut = () => {
    store.dispatch(signOutAction());
}

const getState = () =>{
    return store.getState().AuthReducer
}


export { signOut, signIn,getState }
