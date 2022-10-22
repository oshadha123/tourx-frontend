import tracker from '../api/tracker';
import createDataContext from './createDataContext';
import {AsyncStorage} from 'react-native';
import {navigate} from '../navigatorRef';

const authReducer = (state, action) => {
  switch (action.type) {
    case 'add_error':
      return {...state,errorMessage:action.payload};
    case 'sign_up_in':
      return {errorMessage:'',token:action.payload};
    case 'clear_error':
      return {...state,errorMessage:''};
    case 'signout':
      return {token:'',errorMessage:''};
    default:
      return state;
  }
};

const clearErrorMessage=dispatch=>()=>{
  dispatch({type:'clear_error'});
}


const tryLocalSignIn=dispatch=>async()=>{
  const token =await AsyncStorage.getItem('token');
  if(token){
    dispatch({type:'sign_up_in',token});
    navigate('trackListFlow');
  }
}

const signUp=(dispatch)=> async ({email,password})=>{
    try {
      const response = await tracker.post('/signup',{email,password});
      await AsyncStorage.setItem("token",response.data.token);
      dispatch({type:'sign_up_in',payload:response.data.token});
      navigate('trackListFlow');
    } catch (error) {
      console.log(error.message);
      dispatch({type:'add_error',payload:'Something went wrong with Sign Up'});
    }
}

const signOut=dispatch => async ()=>{
  await AsyncStorage.removeItem('token');
  dispatch({type:'signout'});
  navigate('loginFlow');
}

const signIn=(dispatch)=> async ({email,password})=>{
    try {
      const response = await tracker.post('/signin',{email,password});
      await AsyncStorage.setItem("token",response.data.token);
      dispatch({type:'sign_up_in',payload:response.data.token});
      navigate('trackListFlow');
    } catch (error) {
      console.log(error.response.data);
      dispatch({type:'add_error',payload:'Something went wrong with Sign In'});
    }
}

export const { Provider, Context } = createDataContext(
  authReducer,
  {signIn,signUp,clearErrorMessage,tryLocalSignIn,signOut},
  { token: null,errorMessage:'' }
);
