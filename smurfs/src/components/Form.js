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
        props.getSmurfData();

        
    }

    return (
        <section>
            <h2>Add a Smurf Villager</h2>
            <p>Enter a name, age, and height below and hit the button to add your custom smurf to the village!</p>
            <form onSubmit={handleSubmit}>
                <label htmlFor='name'>Name:&nbsp;&nbsp;
                    <input id='name' name='name' type='text' value={newSmurf.name} onChange={handleChanges} />
                </label>
                
                <label htmlFor='age'>Age:&nbsp;&nbsp;
                    <input id='age' name='age' type='text' value={newSmurf.age} onChange={handleChanges} />
                </label>
                
                <label htmlFor='height'>Height:&nbsp;&nbsp;
                    <input id='height'  name='height' type='text' value={newSmurf.height} onChange={handleChanges} />
                </label>
               
                <button>Add Smurf</button>
            </form>
        </section>
    )
}

export default Form;