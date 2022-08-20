import React,{useState,useContext} from 'react'
import { Text,View } from 'react-native'
import { Modal, ModalFooter, ModalButton, ModalContent } from 'react-native-modals';
import { AuthContext } from '../context/AuthContext';

const SpeechToTextScreen = ({navigation}) => {
 const {error}=useContext(AuthContext);

  const [visible,setVisible]=useState(true);
  const homepage=()=>{
    console.log("navigate");
    //  navigation.navigate('Onboarding');
  }
  return (
    // <Text>Speech to text</Text>
    <View >
  <Modal
    visible={visible}
    footer={
      <ModalFooter>
        {/* <ModalButton
          text="CANCEL"
          onPress={() => {setVisible(false)}}
        /> */}
        <ModalButton
          text="OK"
          onPress={() => {setVisible(false);homepage()}}
        />
      </ModalFooter>
    }
  >
    <ModalContent>
      <Text>Passwords don't match...☹️</Text>
    </ModalContent>
  </Modal>
</View>
  )
}

export default SpeechToTextScreen