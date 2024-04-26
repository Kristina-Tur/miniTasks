import {useState} from 'react';
import {MyInput2} from './MyInput2';
import {MyButton2} from './MyButton2';

export function AppTest2() {
    const [message, setMessage] = useState([
            {message: 'message1'},
            {message: 'message2'},
            {message: 'message3'},
            {message: 'message4'},
            {message: 'message5'}
        ]
    )
    let [title, setTitle] = useState('');

    const addMessage = (title: string) => {
        setMessage([{message: title}, ...message])
    }

    const callback = () => {
        addMessage(title)
        setTitle('')
    }
    return (
        <div className="App">
            <div>
                <MyInput2 title={title} setTitle={setTitle}/>
                <MyButton2 callBack={callback}/>
            </div>
            {message.map((el, index) => {
                return (
                    <div key={index}>{el.message}</div>
                )
            })}
        </div>
    );
}