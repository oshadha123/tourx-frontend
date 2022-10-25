import React,{useContext, useState,useEffect} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Modal,
  StyleSheet,
} from 'react-native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Modal_View from '../components/Modal_View';
import LoginSVG from '../assets/images/misc/login3.svg';
import GoogleSVG from '../assets/images/misc/google.svg';
import FacebookSVG from '../assets/images/misc/facebook.svg';
import TwitterSVG from '../assets/images/misc/twitter.svg';
import CustomButton from '../components/CustomButton';
import InputField from '../components/InputField';
import { AuthContext } from '../context/AuthContext';
import { Button } from 'react-native-paper';
import { Formik } from 'formik'
import * as yup from 'yup'

const loginValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email("Please enter valid email")
    .required('Email Address is Required'),
  password: yup
    .string()
    .min(8, ({ min }) => `Password must be at least ${min} characters`)
    .required('Password is required'),
})
const LoginScreen = ({navigation},props) => {

  const [email,setEmail] = useState(null);
  const [password,setPassword] = useState(null);
  const {login,comp}=useContext(AuthContext);
 
  return (
    <SafeAreaView style={{flex: 1, justifyContent: 'center',backgroundColor:'#fff'}}>
      <View style={{paddingHorizontal: 25}}>
        <View style={{alignItems: 'center'}}>
          <LoginSVG
            height={250}
            width={250}
            style={{transform: [{rotate: '-5deg'}]}}
          />
        </View>

        <Text
          style={{
            fontFamily: 'Roboto-Medium',
            fontSize: 28,
            fontWeight: '500',
            color: '#1768AC',
            marginBottom: 30,
          }}>
          Login
        </Text>
         {/* <Text>{test}</Text> */}

         <Formik
            validateOnMount={true}
            validationSchema={loginValidationSchema}
            initialValues={{ email: '', password: '' }}
            onSubmit={values => console.log(values)}
          >
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              errors,
              touched,
              isValid,
            }) => (
            <>
          <View
         style={{
          flexDirection: 'row',
          borderBottomColor: '#1768AC',
          borderBottomWidth: 1,
          paddingBottom: 8,
          marginBottom: 25,}}
         >
          <MaterialIcons
            name="alternate-email"
            size={20}
            color="#1768AC"
            style={{marginRight: 5}}
          />
        <TextInput
          name="email"
          // label={'Email ID'}
          placeholder={'Email ID'}
          placeholderTextColor="grey"
          style={{flex: 1, paddingVertical: 0, color: 'grey'}}
          keyboardType="email-address"
          value={values.email}
          // value={email}
          // onChangeText={text => setEmail(text)}
          onChangeText={handleChange('email')}
          onBlur={handleBlur('email')}
        />
        
          {(errors.email && touched.email) &&
                  <Text style={styles.errorText}>{errors.email}</Text>
           }
           </View>
        <View
         style={{
          flexDirection: 'row',
          borderBottomColor: '#1768AC',
          borderBottomWidth: 1,
          paddingBottom: 8,
          marginBottom: 25,}}
         > 
         <Ionicons
            name="ios-lock-closed-outline"
            size={20}
            color="#1768AC"
            style={{marginRight: 5}}
          />       
       <TextInput
          name="password"
          placeholder={'Password'}
          placeholderTextColor="grey"
          style={{flex: 1, paddingVertical: 0, color: 'grey'}}
          inputType="password"
          secureTextEntry={true}
          fieldButtonLabel={"Forgot?"}
          fieldButtonFunction={() => navigation.navigate('ForgetPassword')}
          // value={password}
          // onChangeText={text => setPassword(text)}
          value={values.password}
          onChangeText={handleChange('password')}
          onBlur={handleBlur('password')}
        />
          
        {(errors.password && touched.password) &&
                  <Text style={styles.errorText}>{errors.password}</Text>
                }
                </View>
        <TouchableOpacity onPress={() => navigation.navigate('ForgetPassword')}>
        <Text style={{color: '#1768AC', fontWeight: '700',paddingBottom:30}}>{"Forgot your password?"}</Text>
        </TouchableOpacity>        
        {/* <CustomButton label={"Login"} onPress={() => {login(values.email,values.password)}} /> */}
        <TouchableOpacity
      onPress={() => {login(values.email,values.password)}}
      disabled={!isValid || values.email === ''}
      style={{
        backgroundColor: '#1768AC',
        padding: 20,
        borderRadius: 10,
        marginBottom: 20,
      }}>
      <Text
        style={{
          textAlign: 'center',
          fontWeight: '700',
          fontSize: 16,
          color: '#fff',
        }}>
        {"Login"}
      </Text>
    </TouchableOpacity>
        </>
        )}
        </Formik>
        {comp}

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems:'center',
            marginBottom: 30,
    
          }}>

            
          {/* <TouchableOpacity
            onPress={() => {}}
            style={{
              borderColor: '#ddd',
              borderWidth: 2,
              borderRadius: 10,
              paddingHorizontal: 30,
              paddingVertical: 10,
            }}>
            <GoogleSVG height={24} width={24} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {}}
            style={{
              borderColor: '#ddd',
              borderWidth: 2,
              borderRadius: 10,
              paddingHorizontal: 30,
              paddingVertical: 10,
            }}>
            <FacebookSVG height={24} width={24} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {}}
            style={{
              borderColor: '#ddd',
              borderWidth: 2,
              borderRadius: 10,
              paddingHorizontal: 30,
              paddingVertical: 10,
            }}>
            <TwitterSVG height={24} width={24} />
          </TouchableOpacity> */}
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginBottom: 30,
            paddingTop: 10,
            paddingBottom: 10,
            borderRadius: 8,
            backgroundColor:"#06BEE1"
          }}>
          <Text style={{ color: '#1768AC', fontWeight: '700' }}>New to the app?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Register')} style={{}}>
            <Text style={{color: 'black', fontWeight: '700'}}> Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginContainer: {
    width: '80%',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 10,
    elevation: 10,
    backgroundColor: '#e6e6e6'
  },
  textInput: {
    height: 40,
    width: '100%',
    margin: 10,
    backgroundColor: 'white',
    borderColor: 'gray',
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 10,
  },
  errorText: {
    fontSize: 10,
    color: 'red',
  },
})
export default LoginScreen;