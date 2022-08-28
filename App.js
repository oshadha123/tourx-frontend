import React from 'react';


import { AuthProvider } from './src/context/AuthContext';
import AppNav from './src/navigation/AppNav';
import { ModalPortal } from 'react-native-modals';
import {TranslatorProvider} from 'react-native-translator'
function App() {
  return (
    <AuthProvider>
    <AppNav/>
    <ModalPortal />
    <TranslatorProvider></TranslatorProvider>
    </AuthProvider>
  );
}

export default App;