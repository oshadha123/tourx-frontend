import React, {useState,useContext, useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import DatePicker from 'react-native-date-picker';

import InputField from '../components/InputField';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Button } from 'react-native-paper';

import RegistrationSVG from '../assets/images/misc/registration2.svg';
import GoogleSVG from '../assets/images/misc/google.svg';
import FacebookSVG from '../assets/images/misc/facebook.svg';
import TwitterSVG from '../assets/images/misc/twitter.svg';
import CustomButton from '../components/CustomButton';
import DropDownList from '../components/DropDownList';
import { AuthContext } from '../context/AuthContext';
import { Formik } from 'formik'
import * as yup from 'yup'
import Modal_View from '../components/Modal_View'
import { Dropdown } from 'react-native-element-dropdown';

const loginValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email("Please enter valid email")
    .required('Email Address is Required'),
  password: yup
    .string()
    .min(8, ({ min }) => `Password must be at least ${min} characters`)
    .required('Password is required'),
  first_name: yup
    .string().required(),
  last_name: yup
    .string().required(),    
})
const RegisterScreen = ({navigation}) => {
  const {register}=useContext(AuthContext);
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [dobLabel, setDobLabel] = useState('Date of Birth');
  const [firstName,setFirstName] = useState(null);
  const [lastName,setLastName] = useState(null);
  const [email,setEmail] = useState(null);
  const [confirmPassword,setConfirmPassword]=useState(null);
  const [profilePic,setProfilePic] = useState("hjdjjd.jpg");
  const [password,setPassword] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  const [value, setValue] = useState(null);
 //const [roleId,setRoleId]=useState(2);
  const [modal,setModal]=useState(false);

  const [roleId,setRoleId]=useState(null);

  const roles = [{ label: 'Tour Guide', value: 2 },{ label: 'Tourist', value: 3 }];

  const renderModal=()=>{
    if(modal==true){
      return(<Modal_View/>);
    }
   
  }
//  useEffect(()=>{
//     renderModal()

//  })
 

  return (
    <SafeAreaView style={{flex: 1, justifyContent: 'center',backgroundColor:'#fff'}}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{paddingHorizontal: 25}}>
        <View style={{alignItems: 'center'}}>
          <RegistrationSVG
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
            color: '#333',
            marginBottom: 20,
          }}>
          Register
        </Text>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 10,
          }}>
            <Button style={{paddingHorizontal:50, borderRadius: 10,paddingVertical:10,backgroundColor:"#DB4437"}} icon="google" mode="contained" onPress={() => console.log('Pressed')}>
                 Continue with Google
            </Button>
          
        </View>

        <Text style={{textAlign: 'center', color: '#666', marginBottom: 10}}>
          Or, register with email ...
        </Text>
        <Formik
            validateOnMount={true}
            validationSchema={loginValidationSchema}
            initialValues={{ email: '', password: '',first_name: '',last_name:'' }}
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
          borderBottomColor: '#ccc',
          borderBottomWidth: 1,
          paddingBottom: 8,
          marginBottom: 25,}}
          
        >    
        <Ionicons
              name="person-outline"
              size={20}
              color="#9A52C7"
              style={{marginRight: 5}}
        />
        <TextInput
          name='first_name'
          placeholder={'First Name'}
          style={{flex: 1, paddingVertical: 0}}
          value={values.first_name}
          onChangeText={handleChange('first_name')}
          onBlur={handleBlur('first_name')}
        />
        {(errors.first_name && touched.first_name) &&
                  <Text style={styles.errorText}>{errors.first_name}</Text>
                }
        </View>
        {/* <InputField
          label={'Last Name'}
          icon={
            <Ionicons
              name="person-outline"
              size={20}
              color="#9A52C7"
              style={{marginRight: 5}}
            />
          }
          value={lastName}
          onChangeText={text => setLastName(text)}
        /> */}
        <View
        style={{
          flexDirection: 'row',
          borderBottomColor: '#ccc',
          borderBottomWidth: 1,
          paddingBottom: 8,
          marginBottom: 25,}}
          
        >    
        <Ionicons
              name="person-outline"
              size={20}
              color="#9A52C7"
              style={{marginRight: 5}}
        />
        <TextInput
          name='last_name'
          placeholder={'Last Name'}
          style={{flex: 1, paddingVertical: 0}}
          value={values.last_name}
          onChangeText={handleChange('last_name')}
          onBlur={handleBlur('last_name')}
        />
        {(errors.last_name && touched.last_name) &&
                  <Text style={styles.errorText}>{errors.last_name}</Text>
                }
        </View>
        <View
        style={{
          flexDirection: 'row',
          borderBottomColor: '#ccc',
          borderBottomWidth: 1,
          paddingBottom: 8,
          marginBottom: 25,}}
        >
        <MaterialIcons
            name="alternate-email"
            size={20}
            color="#9A52C7"
            style={{marginRight: 5}}
          />
        <TextInput
          name="email"
          // label={'Email ID'}
          placeholder={'Email ID'}
          style={{flex: 1, paddingVertical: 0}}
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
          borderBottomColor: '#ccc',
          borderBottomWidth: 1,
          paddingBottom: 8,
          marginBottom: 25,}}
         > 
         <Ionicons
            name="ios-lock-closed-outline"
            size={20}
            color="#9A52C7"
            style={{marginRight: 5}}
          />       
       <TextInput
          name="password"
          placeholder={'Password'}
          style={{flex: 1, paddingVertical: 0}}
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

        <InputField
          label={'Confirm Password'}
          icon={
            <Ionicons
              name="ios-lock-closed-outline"
              size={20}
              color="#9A52C7"
              style={{marginRight: 5}}
            />
          }
          value={confirmPassword}
          onChangeText={text => setConfirmPassword(text)}
          inputType="password"
        />

<Dropdown
          style={{
            height: 40,
            backgroundColor: 'rgba(52, 52, 52, 0.0)',
            paddingBottom: 8,
            marginBottom: 20,
            paddingLeft: 0,
            shadowOffset: {
              width: 0,
              height: 1,
            },
            borderBottomWidth: 1,
            borderBottomColor: '#ccc',
            marginBottom: 40,
          }}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          placeholderStyle={{
            textAlign: 'left',
            fontSize: 15,
            color: '#999999'
          }}
          selectedTextStyle={{
            fontSize: 15,
            color: 'black'
          }}
          iconStyle={{
            width: 20,
            height: 20,
            alignContent: 'flex-start'
          }}
          data={roles}
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={'Select User Role'}
          value={value}
          onChange={item => {
            setRoleId(item.value);
            setValue(item.value);
            setIsFocus(false);
            console.log(item.value);
          }}
          renderLeftIcon={() => (
            <MaterialIcons
            name="person-add"
                size={20}
                color="#9A52C7"
                style={{
                  marginRight: 10,
                }}
            />
          )}
        />

        {/*<DropDownList/>
         <CustomButton label={'Register'} disabled={!isValid || values.email === ''} onPress={() => {register(firstName,lastName,values.email,values.password,profilePic,roleId);navigation.navigate('Login')}} /> */}
        <TouchableOpacity
      onPress={() => {if(values.password!=confirmPassword){setModal(true)}else{register(values.first_name,values.last_name,values.email,values.password,profilePic,roleId);navigation.navigate('EmailVerification');setModal(false)}}}
      disabled={ !isValid || values.email === ''|| roleId==null}
      style={{
        backgroundColor: '#9A52C7',
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
        {"Register"}
      </Text>
    </TouchableOpacity>
        </>
        )}
        
        </Formik>
        {
            
              renderModal()
            
         
        }

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginBottom: 30,
          }}>
          <Text>Already registered?</Text>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={{color: '#AD40AF', fontWeight: '700'}}> Login</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
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
export default RegisterScreen;
