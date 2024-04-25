import React, {ChangeEvent, useState} from 'react';
import {Simulate} from 'react-dom/test-utils';
import change = Simulate.change;
import {Input} from './Input';
import {Button} from './Button';

type FullInputPropsType = {
    addMessage: (title: string) => void
}

export const FullInput = (props: FullInputPropsType) => {



    return (
        <div>
            {/*<Input value={title} onChange={onChangeInputHandler}/>
            <Button onClick={onClickButtonHandler}/>*/}
        </div>
    );
};