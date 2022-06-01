import { Button, Checkbox, FormControlLabel, TextField } from '@mui/material';
import React, { useState } from 'react';

function RegistrationForm() {
    const [name, setName] = useState();
    const [lastName, setLastName] = useState();
    return (
        <form>
            <TextField
                value={name}
                onChange={(event) => {
                    let tmpName = event.target.value;
                    if (tmpName.length >= 3) {
                        tmpName = tmpName.substring(0,3);
                    }
                    setName(tmpName);
                }}
                id='nome'
                label='Name'
                variant='outlined'
                margin='normal'
                fullWidth />

            <TextField
                value={lastName}
                onChange={(event) => {
                    setLastName(event.target.value);

                }}
                id='lastName'
                label='LastName'
                variant='outlined'
                margin='normal'
                fullWidth />

            <TextField
                id='idCard'
                label='ID Card'
                variant='outlined'
                margin='normal'
                fullWidth />

            <FormControlLabel control={<Checkbox />} label="Promotions" />
            <FormControlLabel control={<Checkbox />} label="Newslatter" />

            <Button type='submit' variant="contained" color="primary">Submit</Button>

        </form>
    )
}

export default RegistrationForm;