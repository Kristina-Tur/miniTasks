import React, {useState} from 'react';

export const Filter = () => {
    const [money, setMoney] = useState([
        {banknote: "dollar", nominal: 100, number: "a123456789"},
        {banknote: "dollar", nominal: 50, number: "b123456789"},
        {banknote: "ruble", nominal: 100, number: "c123456789"},
        {banknote: "dollar", nominal: 100, number: "d123456789"},
        {banknote: "dollar", nominal: 50, number: "e123456789"},
        {banknote: "ruble", nominal: 100, number: "f123456789"},
        {banknote: "dollar", nominal: 50, number: "j123456789"},
        {banknote: "ruble", nominal: 50, number: "h123456789"}
    ])

    let currentMoney = money.filter(m => m.banknote === 'ruble')

    return (
        <ul>

            {currentMoney.map((objFromMoneyArr, index) => {

                return(

                    <li key={index}>
                        <div>
                            <span>{objFromMoneyArr.banknote}</span>
                            <span>{objFromMoneyArr.nominal}</span>
                            <span>{objFromMoneyArr.number}</span>
                        </div>
                    </li>
                )
            })}
        </ul>
);
};

