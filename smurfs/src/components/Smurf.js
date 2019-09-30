import React from 'react';

function Smurf(props) {

    return(
        <div>
            <div>
                <p>Name: {props.name}</p>
                <p>Age: {props.age}</p>
                <p>Height: {props.height}</p>
            </div>
        </div>

    )
}

export default Smurf;