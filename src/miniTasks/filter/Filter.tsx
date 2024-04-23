import React, {useState} from 'react';
import {NewComponent} from './NewComponent';

export type FilterType = 'all' | 'dollar' | 'ruble';

export type ObjectFilterPropsType = {
    banknote: string
    nominal: number
    number: string
}

export const Filter = () => {
    const [money, setMoney] = useState([
        {banknote: 'dollar', nominal: 100, number: 'a123456789'},
        {banknote: 'dollar', nominal: 50, number: 'b123456789'},
        {banknote: 'ruble', nominal: 100, number: 'c123456789'},
        {banknote: 'dollar', nominal: 100, number: 'd123456789'},
        {banknote: 'dollar', nominal: 50, number: 'e123456789'},
        {banknote: 'ruble', nominal: 100, number: 'f123456789'},
        {banknote: 'dollar', nominal: 50, number: 'j123456789'},
        {banknote: 'ruble', nominal: 50, number: 'h123456789'}
    ])

    const [filter, setFilter] = useState<FilterType>('all');

    let currentMoney = money;

    if (filter === 'dollar') {
        currentMoney = money.filter(m => m.banknote === 'dollar');
    }
    if (filter === 'ruble') {
        currentMoney = money.filter(m => m.banknote === 'ruble');
    }
    const OnClickFilterHandler = (nameButton: FilterType) => {
        setFilter(nameButton)
    }

    return (
        <NewComponent currentMoney={currentMoney} callBack={OnClickFilterHandler}/>
    );
};

