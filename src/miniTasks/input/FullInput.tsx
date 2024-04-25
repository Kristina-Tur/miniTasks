import React, {ChangeEvent, useState} from 'react';
import {Simulate} from 'react-dom/test-utils';
import change = Simulate.change;

export const FullInput = () => {

    let [title, setTitle] = useState('');
const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
    title = event.currentTarget.value;
    console.log(title)
}

    return (
        <div>
            <input onChange={onChangeInputHandler}/>
            <button onClick={() => {}}>+</button>
        </div>
    );
};