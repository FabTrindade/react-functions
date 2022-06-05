import { TextField, Button } from '@mui/material';
import React from 'react';

function AddressData() {
    return (
        <form>
            <TextField
                id='postcode'
                label='Post code'
                type='number'
                variant='outlined'
                margin='normal' />

            <TextField
                id='street'
                label='Street'
                type='text'
                variant='outlined'
                margin='normal'
                fullWidth />

            <TextField
                id='street'
                label='Street'
                type='text'
                variant='outlined'
                margin='normal'
                fullWidth />

            <TextField
                id='number'
                label='Number'
                type='number'
                variant='outlined'
                margin='normal' />


            <TextField
                id='city'
                label='City'
                type='text'
                variant='outlined'
                margin='normal' />

            <TextField
                id='state'
                label='State'
                type='text'
                variant='outlined'
                margin='normal' />

            <Button type='submit' variant="contained" color="primary" fullWidth>Finish</Button>


        </form>
    );
}

export default AddressData;