import React, {useState} from 'react'

const Form = (props) => {
    const [newSmurf, setNewSmurf] =  useState({
        name: '',
        age: '',
        height: '',
        id: ''
    });
    
    const handleChanges = (event) => {
        console.log(newSmurf)
        setNewSmurf({...newSmurf, [event.target.name]: event.target.value})
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        props.updateSmurfData({...newSmurf});
        setTimeout(() => {
            props.getSmurfData();
        }, 3000)
        
    }

    return (
        <section>
            <h2>Add a Smurf Villager</h2>
            <p>Enter a name, height, and age below and hit the buttong to add your custom smurf to the village!</p>
            <form onSubmit={handleSubmit}>
                <label htmlFor='name'>Name:</label>
                <input id='name' name='name' type='text' value={newSmurf.name} onChange={handleChanges} />
                <label htmlFor='age'>Age:</label>
                <input id='age' name='age' type='text' value={newSmurf.age} onChange={handleChanges} />
                <label htmlFor='height'>Height:</label>
                <input id='height'  name='height' type='text' value={newSmurf.height} onChange={handleChanges} />
                <button>Add Smurf</button>
            </form>
        </section>
    )
}

export default Form;