import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';

function UserData({ atSend, validation }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState({
        password: { valid: true, text: "" },
    });

    function validateField(event) {
        const { name, value } = event.target;
        const newState = { ...error }
        newState[name] = validation[name](value);
        setError(newState);
    }

    function canSend() {
        for (let field in error) {
            if (!error[field].valid) {
                return false;
            }
        }
        return true;
    }

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
                error = {!error.password.valid}
                helperText = {error.password.text}
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