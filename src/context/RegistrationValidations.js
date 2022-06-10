import React from 'react';

const RegistrationValidations = React.createContext({
    idCard: withoutValidation,
    password: withoutValidation,
    name: withoutValidation
});

function withoutValidation() {
    return { valid: true, text: "" }
}

export default RegistrationValidations;