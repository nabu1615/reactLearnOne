import React from 'react';
import './User.css';


const userOutput = (props) => {
    return (
        <div className="User">
            <p className="User__title"> {props.children} </p>
            <p> {props.name} </p>
        </div>
    )
}

export default userOutput;