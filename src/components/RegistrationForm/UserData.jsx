import { Button, TextField } from '@mui/material';
import React, { useContext, useState } from 'react';
import RegistrationValidations from '../../context/RegistrationValidations';
import useError from '../../hooks/useError';

function UserData({ atSend }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const validation = useContext(RegistrationValidations);
    const [error, validateField, canSend] = useError(validation);

    return (
        <form onSubmit={(event) => {
            event.preventDefault();
            if (canSend()) {
                atSend({ email, password });
            }

        }}>
            <TextField
                value={email}
                onChange={(event) => {
                    setEmail(event.target.value);
                }}
                id='email'
                label='email'
                type='email'
                variant='outlined'
                margin='normal'
                required
                fullWidth />
            <TextField
                value={password}
                onChange={(event) => {
                    setPassword(event.target.value);
                }}
                onBlur={validateField}
                error={!error.password.valid}
                helperText={error.password.text}
                name='password'
                id='password'
                label='password'
                type='password'
                variant='outlined'
                margin='normal'
                required
                fullWidth />
            <Button type='submit' variant="contained" color="primary">Next</Button>
        </form>
    );
}
export default UserData;