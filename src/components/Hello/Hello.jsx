import React from 'react';

const Hello = (props) => {
    console.log(props)
    return (
        <p>
            Hello {props.name}
        </p>
    );
};

export default Hello;