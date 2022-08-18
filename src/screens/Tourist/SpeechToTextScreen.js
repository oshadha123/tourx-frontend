// Foo.jsx
import React from 'react';
import Toast from 'react-native-toast-message';
import { Button } from 'react-native'
// import SpeechToTextScreen from '../../components/Modal_View';

export function SpeechToTextScreen(props) {
  const showToast = () => {
    Toast.show({
      type: 'success',
      text1: 'Hello',
      text2: 'This is some something 👋'
    });
  }

  return (
    <>
    <Button
      title='Show toast'
      onPress={showToast}
      
    />
    <Toast />
    </>
  )
}

export default SpeechToTextScreen