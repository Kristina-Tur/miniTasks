import React, {useState} from 'react';
import {Map} from './miniTasks/map/Map';
import {ButtonOnClick} from './miniTasks/button/ButtonOnClick';
import {Buttons} from './miniTasks/button/ButtonCallback/Buttons';
import {UseState} from './miniTasks/useState/useState';
import {Filter} from './miniTasks/filter/Filter';
import {FullInput} from './miniTasks/input/FullInput';

function App() {
    const [message, setMessage] = useState([
            {message: 'message1'},
            {message: 'message2'},
            {message: 'message3'},
            {message: 'message4'},
            {message: 'message5'}
        ]
    )
    return (
        <div className="App">
            <FullInput/>
            {message.map((el, index) => {
                return (
                    <div key={index}>{el.message}</div>
                )
            })}
        </div>
    );
}

export default App;