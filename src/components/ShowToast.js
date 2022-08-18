import React from 'react';
import Toast from 'react-native-toast-message';

const ShowToast = () => {
    Toast.show({
      type: 'error',
      position:'top',
      topOffset:230,
      text1: 'Hello',
      text1: 'Email or Password is wrong..☹️'
    });
    return(
      <Toast/>
    );
  }

  export default ShowToast;