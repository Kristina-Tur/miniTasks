import React, {useState} from 'react';

export const UseState = () => {
    /*let a = 1*/
    let[a, setA] = useState(1)
    const OnclickHandler = () => {
        setA(++a)
        console.log(a)
    }
    const OnclickHandler0 = () => {
        setA(1)
        console.log(a)
    }

    return (
        <div>
            <h1>{a}</h1>
            <button onClick={OnclickHandler}>++</button>
            <button onClick={OnclickHandler0}>0</button>
        </div>
    );
};
