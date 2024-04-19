import React from 'react';
import {Button} from './Button';


export const Buttons = () => {
    const ButtonFun = (value: string) => {
        console.log(value)
    }
 const ButtonFunOk = (value: string, age: number) => {
        console.log(value, age)
    }

    return (
        <div>
            <Button title={'Hello'} callBack={() => {ButtonFun('Hello')}}/>
            <Button title={'Buy'} callBack={() => {ButtonFun('Buy')}}/>
            <Button title={'Ok'} callBack={() => {
                ButtonFunOk('Ok', 1)
            }}/>

        </div>
    );
};
