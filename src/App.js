import { Container, Typography } from '@mui/material';
import { Component } from 'react';
import './App.css';
import RegistrationForm from './components/RegistrationForm/RegistrationForm';
import '@fontsource/roboto/400.css';
import { validateIdCard, validatePassword } from './models/Registration';

class App extends Component {
  render() {
    return (
      <Container component="article" maxWidth="sm">
        <Typography variant='h4' component='h1' align='center' color='GrayText'>Registration Form</Typography>
        <RegistrationForm atSend={atSend} validation={{
          idCard: validateIdCard,
          password: validatePassword,
          name: validatePassword
        }} />
      </Container>

    );
  }
}

function atSend(data) {
  console.log(data);
}


export default App;
