import React, { useEffect, useState } from 'react';
import UserData from '../UserData';
import AddressData from './AddressData';
import PersonalData from './PersonalData';

function RegistrationForm({ atSend, validateIdCard }) {

    const [step, setStep] = useState(0);
    const [data, setData]= useState({});

    useEffect(()=>{
        atSend({data});
    })
    const forms = [
        <UserData atSend={collectData} />,
        <PersonalData atSend={collectData} validateIdCard={validateIdCard} />,
        <AddressData atSend={collectData} />
    ]

    function collectData(newData) {
        setData({...data, ...newData});
        next();
    }

    function next() {
        setStep(step + 1);
    }

    return (
        <>
            {forms[step]}
        </>
    )
}

export default RegistrationForm;