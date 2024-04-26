import React, {ChangeEvent, useState} from 'react';

type MyInput2PropsType = {
    title: string
    setTitle: (value:string) => void
}
export const MyInput2 = (props: MyInput2PropsType) => {

    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        props.setTitle(event.currentTarget.value)
    }

    return (
        <input onChange={onChangeInputHandler} value={props.title}/>
    );
};