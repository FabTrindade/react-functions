import { Container, Typography } from '@mui/material';
import { Component } from 'react';
import './App.css';
import RegistrationForm from './components/RegistrationForm/RegistrationForm';
import '@fontsource/roboto/400.css';

class App extends Component {
  render(){
    return (      
        <Container component="article" maxWidth="sm">
          <Typography variant='h4' component='h1' align='center' color='GrayText'>Registration Form</Typography>
          <RegistrationForm aoEnviar={aoEnviar}/>
        </Container>
        
    );
  }
}

function aoEnviar(dados){
  console.log(dados);
}


export default App;
