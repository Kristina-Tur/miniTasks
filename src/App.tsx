import React, {useState} from 'react';
import {Map} from './miniTasks/map/Map';
import {ButtonOnClick} from './miniTasks/button/ButtonOnClick';
import {Buttons} from './miniTasks/button/ButtonCallback/Buttons';
import {UseState} from './miniTasks/useState/useState';
import {Filter} from './miniTasks/filter/Filter';
import {FullInput} from './miniTasks/input/FullInput';
import {AppTest} from './miniTasks/input/AppTest';

function App() {
    return (
        <div className="App">
            <AppTest/>
        </div>
    );
}

export default App;