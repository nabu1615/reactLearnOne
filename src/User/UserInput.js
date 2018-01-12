import React from 'react';

const userInput = (props) => {
    return (
        <input type="text" onChange={props.changed} value={props.name} style={props.style} />
    )
}

export default userInput;