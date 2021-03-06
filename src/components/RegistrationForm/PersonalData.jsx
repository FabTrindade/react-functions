import { Button, Checkbox, FormControlLabel, TextField } from '@mui/material';
import React, { useContext, useState } from 'react';
import RegistrationValidations from '../../context/RegistrationValidations';
import useError from '../../hooks/useError';

function PersonalData({ atSend }) {
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [idCard, setidCard] = useState("");
    const [promotions, setPromotions] = useState(false);
    const [newsLatter, setNewsLatter] = useState(false);
    const validation = useContext(RegistrationValidations);
    const [error, validateField, canSend] = useError(validation);
    return (
        <form
            onSubmit={(event) => {
                event.preventDefault();
                if (canSend()) {
                    atSend({ name, lastName, idCard, promotions, newsLatter });
                }
            }
            }
        >
            <TextField
                value={name}
                onChange={(event) => {
                    setName(event.target.value);
                }}
                name='name'
                onBlur={validateField}
                error ={!error.name.valid}
                helperText={error.name.text}
                id='name'
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
                value={idCard}
                onChange={(event) => {
                    setidCard(event.target.value);
                }}
                onBlur={validateField}
                name='idCard'
                error={!error.idCard.valid}
                helperText={error.idCard.text}
                id='idCard'
                label='ID Card'
                variant='outlined'
                margin='normal'
                fullWidth />

            <FormControlLabel
                label="Promotions"
                control={
                    <Checkbox
                        checked={promotions}
                        onChange={(event) => {
                            setPromotions(event.target.checked);
                        }}
                    />}
            />
            <FormControlLabel
                label="Newslatter"
                control={
                    <Checkbox
                        checked={newsLatter}
                        onChange={(event) => {
                            setNewsLatter(event.target.checked);
                        }}
                    />}
            />

            <Button type='submit' variant="contained" color="primary">Next</Button>

        </form>
    )
}

export default PersonalData;