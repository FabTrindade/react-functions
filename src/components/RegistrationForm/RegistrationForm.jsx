import { Button, Checkbox, FormControlLabel, TextField } from '@mui/material';
import React, { useState } from 'react';

function RegistrationForm({ atSend, validateIdCard }) {
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [idCard, setidCard] = useState("");
    const [promotions, setPromotions] = useState(false);
    const [newsLatter, setNewsLatter] = useState(false);
    const [error, setError] = useState({ idCard: { valid: true, text: "" } });
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
                onBlur={(event) => {
                    const isValid = validateIdCard(idCard);
                    setError({ idCard: isValid })
                }
                }
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

            <Button type='submit' variant="contained" color="primary">Submit</Button>

        </form>
    )
}

export default RegistrationForm;