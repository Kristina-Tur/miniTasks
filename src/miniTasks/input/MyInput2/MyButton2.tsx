import React from 'react';

type MyButton2PropsType = {
    callBack: () => void
}
export const MyButton2 = (props: MyButton2PropsType) => {
    const onClickButtonHandler = () => {
        props.callBack()
    }

    return (
        <button onClick={onClickButtonHandler}>+</button>
    );
};