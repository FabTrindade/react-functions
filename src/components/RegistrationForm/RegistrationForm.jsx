import { StepLabel, Stepper, Typography, Step } from '@mui/material';
import React, { useEffect, useState } from 'react';
import UserData from '../UserData';
import AddressData from './AddressData';
import PersonalData from './PersonalData';

function RegistrationForm({ atSend, validation }) {

    const [step, setStep] = useState(0);
    const [data, setData] = useState({});

    useEffect(() => {
        if (step === (forms.length - 1)) {
            atSend({ data });
        }
    })
    const forms = [
        <UserData atSend={collectData} />,
        <PersonalData atSend={collectData} validation={validation} />,
        <AddressData atSend={collectData} />,
        <Typography variant='h5'>Thanks for signing up!</Typography>
    ]

    function collectData(newData) {
        setData({ ...data, ...newData });
        next();
    }

    function next() {
        setStep(step + 1);
    }

    return (
        <>
            <Stepper activeStep={step}>
                <Step><StepLabel>Login</StepLabel></Step>
                <Step><StepLabel>Personal data</StepLabel></Step>
                <Step><StepLabel>Address</StepLabel></Step>
                <Step><StepLabel>Finished</StepLabel></Step>

            </Stepper>
            {forms[step]}
        </>
    )
}

export default RegistrationForm;