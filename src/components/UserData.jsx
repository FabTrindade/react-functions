import { Button, TextField } from '@mui/material';
import React from 'react';

function UserData({atSend}) {
    return (
        <form onSubmit={(event)=>{
            event.preventDefault();
            atSend();
        }}>
            <TextField
                id='email'
                label='email'
                type='email'
                variant='outlined'
                margin='normal'
                required
                fullWidth />
            <TextField
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