import { Button, Checkbox, FormControlLabel, TextField } from '@mui/material';
import React from 'react';

function RegistrationForm() {
    return (
        <form>
            <TextField id='nome' label='Name' variant='outlined' margin='normal' fullWidth />
            <TextField id='lastName' label='LastName' variant='outlined' margin='normal' fullWidth />
            <TextField id='idCard' label='ID Card' variant='outlined' margin='normal' fullWidth />

            <FormControlLabel control={<Checkbox />} label="Promotions" />
            <FormControlLabel control={<Checkbox />} label="Newslatter" />

            <Button type='submit' variant="contained" color="primary">Submit</Button>

        </form>
    )
}

export default RegistrationForm;