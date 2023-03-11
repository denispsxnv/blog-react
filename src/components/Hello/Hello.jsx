import React from 'react';

const Hello = ({name, age}) => {
    // console.log(props)
    return (
        <>
        <p>
            Hello {name} 
        </p>
        <p>
             Возраст {age}
        </p>
        </>
    );
};

export default Hello;