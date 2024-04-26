import React from 'react';

type MyButtonPropsType = {
    callBack: () => void
}
export const MyButton = (props: MyButtonPropsType) => {
    const onClickButtonHandler = () => {
        props.callBack()
    }

    return (
        <button onClick={onClickButtonHandler}>+</button>
    );
};