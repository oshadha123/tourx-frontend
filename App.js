import React from 'react';


import { AuthProvider } from './src/context/AuthContext';
import AppNav from './src/navigation/AppNav';
import { ModalPortal } from 'react-native-modals';
function App() {
  return (
    <AuthProvider>
    <AppNav/>
    <ModalPortal />
    </AuthProvider>
  );
}

export default App;