import { Button, Checkbox, FormControlLabel, TextField } from '@mui/material';
import React, { useState } from 'react';

function PersonalData({ atSend, validation }) {
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [idCard, setidCard] = useState("");
    const [promotions, setPromotions] = useState(false);
    const [newsLatter, setNewsLatter] = useState(false);
    const [error, setError] = useState({ idCard: { valid: true, text: "" } });

    function validateField(event) {
        const{name, value} = event.target;
        const newState = {...error}
        newState[name] = validation[name](value); 
        setError(newState);
    }

    return (
        <form
            onSubmit={(event) => {
                event.preventDefault();
                atSend({ name, lastName, idCard, promotions, newsLatter });
            }
            }
        >
            <TextField
                value={name}
                onChange={(event) => {
                    setName(event.target.value);
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