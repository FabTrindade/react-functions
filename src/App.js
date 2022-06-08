import { Container, Typography } from '@mui/material';
import { Component } from 'react';
import './App.css';
import RegistrationForm from './components/RegistrationForm/RegistrationForm';
import '@fontsource/roboto/400.css';
import { validateIdCard, validatePassword } from './models/Registration';
import RegistrationValidations from './context/RegistrationValidations';

class App extends Component {
  render() {
    return (
      <Container component="article" maxWidth="sm">
        <Typography variant='h4' component='h1' align='center' color='GrayText'>Registration Form</Typography>
        <RegistrationValidations.Provider value={{
          idCard: validateIdCard,
          password: validatePassword,
          name: validatePassword
        }} >
          <RegistrationForm atSend={atSend} />
        </RegistrationValidations.Provider>
      </Container>
    );
  }
}

function atSend(data) {
  console.log(data);
}


export default App;
