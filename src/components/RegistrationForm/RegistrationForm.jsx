import React from 'react';

function RegistrationForm(){
    return (
        <form>
            <label>Name</label>
            <input type="text"/>

            <label>Last name</label>
            <input type="text"/>

            <label>ID Card</label>
            <input type="text"/>

            <label>Promotions</label>
            <input type="checkbox"/>

            <label>Newslatter</label>
            <input type="checkbox"/>

            <button type='submit'>Submit</button>

        </form>
    )
}

export default RegistrationForm;