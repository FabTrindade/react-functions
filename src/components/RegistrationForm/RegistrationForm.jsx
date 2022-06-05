import React, { useState } from 'react';
import UserData from '../UserData';
import AddressData from './AddressData';
import PersonalData from './PersonalData';

function RegistrationForm({ atSend, validateIdCard }) {

    const [step, setStep] = useState(0);

    const forms=[
        <UserData atSend={next}/>,
        <PersonalData atSend={next} validateIdCard={validateIdCard} />,
        <AddressData atSend={atSend}/>
    ]

    function next(){
        setStep(step+1);
    }

    return (
        <>
            {forms[step]}
        </>
    )
}

export default RegistrationForm;