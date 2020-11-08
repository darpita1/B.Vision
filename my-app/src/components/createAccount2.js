import React, { useState } from 'react';


function CreateAccount2() {

    const[userName, setName] = useState("John Doe");
    const[userPass, setPass] = useState("");

    const exportState = {
        name:{userName}
    }


    const changeName = () => {
        setName("x");
    }

    return (
        <div>
            <h1>{userName}</h1>
            <h1>{userPass}</h1>
            <button onClick={changeName}>change name</button>
        </div>

    );

}

export default CreateAccount2;