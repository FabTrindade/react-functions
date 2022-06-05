import { TextField, Button } from '@mui/material';
import React, { useState } from 'react';

function AddressData({ atSend }) {
    const [postCode, setPostCode] = useState("");
    const [street, setStreet] = useState("");
    const [number, setNumber] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    return (
        <form onSubmit={(event) => {
            event.preventDefault();
            atSend({postCode, street, number, city, state})
        }}>
            <TextField
                value={postCode}
                onChange={(event) => {
                    setPostCode(event.target.value);
                }}
                id='postcode'
                label='Post code'
                type='number'
                variant='outlined'
                margin='normal' />


            <TextField
                value={street}
                onChange={(event) => {
                    setStreet(event.target.value);
                }}
                id='street'
                label='Street'
                type='text'
                variant='outlined'
                margin='normal'
                fullWidth />

            <TextField
                value={number}
                onChange={(event) => {
                    setNumber(event.target.value);
                }}
                id='number'
                label='Number'
                type='number'
                variant='outlined'
                margin='normal' />


            <TextField
                value={city}
                onChange={(event) => {
                    setCity(event.target.value);
                }}
                id='city'
                label='City'
                type='text'
                variant='outlined'
                margin='normal' />

            <TextField
                value={state}
                onChange={(event) => {
                    setState(event.target.value);
                }}
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