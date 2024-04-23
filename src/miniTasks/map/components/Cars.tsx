import React from 'react';
import {topCars} from '../data/DataCars';

type CarsPropsType = {
    manufacturer?: string,
    model?: string
}
export const Cars = (props: CarsPropsType) => {
    return (
        <table>
            {topCars.map((t, index) => {
                return (
                        <tr key={index}>
                            <td>{t.manufacturer}</td>
                            <td>{t.model}</td>
                        </tr>
                )
            })}
        </table>
    );
};
