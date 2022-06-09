import { useState } from "react";


function useError(validation){
    
    const initialState = setInitialState(validation);
    const [error, setError] = useState(initialState);

    function validateField(event) {
        const { name, value } = event.target;
        const newState = { ...error }
        newState[name] = validation[name](value);
        setError(newState);
    }

    function canSend() {
        for (let field in error) {
            if (!error[field].valid) {
                return false;
            }
        }
        return true;
    }

    return [error, validateField, canSend];

}

function setInitialState(validation){
    const initialState = {};
    for (let field in validation){
        initialState[field] = {valid: true, text: ""};
    }
    return initialState;
}

export default useError;

