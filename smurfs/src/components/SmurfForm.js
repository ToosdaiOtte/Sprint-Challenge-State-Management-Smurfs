import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addSmurf } from '../store/actions';

const SmurfForm = props => {
    const defaultState = {
        name: '',
        age: '',
        height: ''
    };

    const [smurf, setSmurf] = useState(defaultState)

    const handleSubmit = e => {
        e.preventDefault();
        props.addSmurf(smurf);
        // console.log(smurf);
 
      }

    const handleChange = e => {
        setSmurf({ 
            ...smurf,
            [e.target.name]: e.target.value
        });
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                name="name" 
                value={smurf.name}
                onChange={handleChange}
                placeholder='Name'
                // onChange={e => setSmurf(e.target.value)} 
            /><br />
             <input 
                type="text" 
                name="age" 
                value={smurf.age}
                onChange={handleChange}
                placeholder='Age' 
            /><br />
             <input 
                type="text" 
                name="height" 
                value={smurf.height}
                onChange={handleChange}
                placeholder='Height' 
            /><br />
            <button type="submit">Add a Smurf</button>
          </form>
        </div>
    )
}

export default connect( 
    null, 
    { addSmurf }
)(SmurfForm);