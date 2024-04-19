import React from 'react';
import {Button} from './Button';


export const Buttons = () => {
    const ButtonFun = (value: string) => {
        console.log(value)
    }

    return (
        <div>
            <Button title={'Hello'} callBack={() => {ButtonFun('Hello')}}/>
            <Button title={'Buy'} callBack={() => {ButtonFun('Buy')}}/>

        </div>
    );
};
