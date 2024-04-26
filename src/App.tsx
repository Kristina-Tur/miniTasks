import React, {useState} from 'react';
import {Map} from './miniTasks/map/Map';
import {ButtonOnClick} from './miniTasks/button/ButtonOnClick';
import {Buttons} from './miniTasks/button/ButtonCallback/Buttons';
import {UseState} from './miniTasks/useState/useState';
import {Filter} from './miniTasks/filter/Filter';
import {FullInput} from './miniTasks/input/FullInput';
import {AppTest} from './miniTasks/input/AppTest';
import {MyInput} from './miniTasks/input/myInput/MyInput';
import {MyApp} from './miniTasks/input/myInput/MyApp';
import {AppTest2} from './miniTasks/input/MyInput2/AppTest2';

function App() {
    return (
        <div className="App">
            <AppTest2/>
        </div>
    );
}

export default App;