import React from 'react';
import {FilterType, ObjectFilterPropsType} from './Filter';

type NewComponentPropsType = {
    currentMoney: Array<ObjectFilterPropsType>
    callBack: (nameButton: FilterType) => void
}

export const NewComponent = (props: NewComponentPropsType) => {
    return (
        <div>
            <ul>
                {props.currentMoney.map((objFromMoneyArr, index) => {
                    return (
                        <li key={index}>
                            <span>{objFromMoneyArr.banknote}</span>
                            <span>{objFromMoneyArr.nominal}</span>
                            <span>{objFromMoneyArr.number}</span>
                        </li>
                    )
                })}
            </ul>
            <button onClick={() => props.callBack('all')}>all</button>
            <button onClick={() => props.callBack('dollar')}>dollar</button>
            <button onClick={() => props.callBack('ruble')}>ruble</button>
        </div>
    );
};
