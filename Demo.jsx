import React, {useState} from "react";

function Demo() {

    const [name, setName] = useState();

    const [age, setAge] = useState("0");

    const updateName = () => {
        setName("DumbaRogers"); 
    }

    const addAge = () => {
        setAge(age + 1); 
    }

    return(<div>
        <p>Name: {name}</p>
        <button onClick={updateName}>Set Name</button>
        
        <p>Age: {age}</p>
        <button onClick={addAge}>Add Age</button>
    </div>
    
    )
}

export default Demo