import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';

function UserData({ atSend }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <form onSubmit={(event) => {
            event.preventDefault();
            atSend({email, password});
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