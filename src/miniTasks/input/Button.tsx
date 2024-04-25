import React from 'react';

type ButtonPropsType = {
    callBack: () => void
}
export const Button = (props: ButtonPropsType) => {
    const onClickButtonHandler = () => {
        props.callBack();
    }
    return (
        <button onClick={onClickButtonHandler}>+</button>
    );
};