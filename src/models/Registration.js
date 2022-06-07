function validateIdCard(idCard) {
    if (idCard.length !== 11) {
        return { valid: false, text: "ID Card must have 11 digits!" }
    } else {
        return { valid: true, text: "" }
    }

}

function validatePassword(password) {
    if (password.length < 4 || password.length > 16) {
        return { valid: false, text: "This field must have between 4 and 16 digits!" }
    } else {
        return { valid: true, text: "" }
    }

}

export {validateIdCard, validatePassword}