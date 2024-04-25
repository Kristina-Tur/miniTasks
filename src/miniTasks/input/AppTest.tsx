import React, {useState} from 'react';
import {FullInput} from './FullInput';
import {Input} from './Input';
import {Button} from './Button';

export const AppTest = () => {
    const [message, setMessage] = useState([
            {message: 'message1'},
            {message: 'message2'},
            {message: 'message3'},
            {message: 'message4'},
            {message: 'message5'}
        ]
    )

    let [title, setTitle] = useState('');

    const callBackButtonHandler = () => {
        addMessage(title)
        setTitle('')
    }
    const addMessage = (title: string) => {
        let newMessage = {message: title}
        setMessage([newMessage, ...message])
    }
    return (
        <div className="App">
           {/* <FullInput addMessage={addMessage}/>*/}

            <Input title={title} setTitle={setTitle}/>
            <Button callBack={callBackButtonHandler}/>
            {message.map((el, index) => {
                return (
                    <div key={index}>{el.message}</div>
                )
            })}
        </div>
    );
};