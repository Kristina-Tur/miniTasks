import React, {ChangeEvent, useState} from 'react';

type MyInputPropsType = {
    setTitle: (title: string) => void
    title: string
}
export const MyInput = (props: MyInputPropsType) => {

    const inputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        props.setTitle(event.currentTarget.value)
    }
    return (
        <input onChange={inputHandler} value={props.title}/>
    );
};