import axios from "axios";
import { signIn } from '../store/login';
import { ResponseLogin } from '../interfaces/login';

async function doLogIn(username: string, password: string): Promise<ResponseLogin> {

  const params = {
    username: String,
    password: String,
  };

  try {
    const {data} = await axios.get<ResponseLogin>('https://172.16.1.159:8443/topazinterpretedws/tokenbuilder', {
      // Axios looks for the `auth` option, and, if it is set, formats a
      // basic auth header for you automatically.
      auth: {
        username: username,
        password: password
      }
    });
    signIn(username, username, data.token);
    return data;

  } catch (error) {
    const response: ResponseLogin = { success: false, message: 'Error de autenticación', token: 'null' };

    if (axios.isAxiosError(error)) {
      console.log('error message: ', error);
      // if(error.response?.status===401){
      // console.log('error message: ', error.message);
      return response;
    } else {
      console.log('unexpected error: ', error);
      // return 'An unexpected error occurred';
      return response;
    }
  }
};

const isLoggedIn = () => {
  return true;
  // return Boolean(localStorage.getItem("isLoggedIn")?.toString() ==="1");
};


const logOut = (props: any) => {
  localStorage.removeItem("username");
  localStorage.removeItem("isLoggedIn");
  props.history.push("/login");

};

export {
  doLogIn,
  isLoggedIn,
  logOut
};