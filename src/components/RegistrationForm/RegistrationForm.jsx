import { Typography } from '@mui/material';
import React, { useState } from 'react';
import UserData from '../UserData';
import AddressData from './AddressData';
import PersonalData from './PersonalData';

function RegistrationForm({ atSend, validateIdCard }) {

    const [step, setStep] = useState(2);

    function currentForm(step){
        switch (step) {
            case 0:
                return <UserData />;
            case 1:
                return <PersonalData atSend={atSend} validateIdCard={validateIdCard} />;
            case 2:
                return <AddressData />;
            default:
                return <Typography>Error at select form.</Typography>
        }
    }
    return (
        <>
            {currentForm(step)}
        </>
    )
}

export default RegistrationForm;