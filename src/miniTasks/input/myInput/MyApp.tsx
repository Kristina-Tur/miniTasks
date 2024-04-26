import {useState} from 'react';
import {MyInput} from './MyInput';
import {MyButton} from './MyButton';

export function MyApp() {
    const [message, setMessage] = useState([
            {message: 'message1'},
            {message: 'message2'},
            {message: 'message3'},
            {message: 'message4'},
            {message: 'message5'}
        ]
    )
    let [title, setTitle] = useState('')
    const addMessage = (title: string) => {
        setMessage([{message: title}, ...message])
    }

    const callBack = () => {
        addMessage(title)
        setTitle('')
    }

    return (
        <div>
            <MyInput setTitle={setTitle} title={title}/>
            <MyButton callBack={callBack}/>
            {message.map((el, index) => {
                return (
                    <div key={index}>{el.message}</div>
                )
            })}
        </div>
    );
}