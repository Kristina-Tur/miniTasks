import React from 'react';

export const Button = () => {
    /*const Hello = () => {
        console.log('Hello')
    }*/
    /*const Hello2 = () => {
        console.log('Hello2')
    }*/

    const onClickHandler = (name: string) => {
        console.log(name)
    }

    const OkHandler = () => {
        console.log('100')
    }
    const OkHandler2 = (value: number) => {
        console.log(value)
    }

    return (
        <div>
            <button onClick={(event) => {
                onClickHandler('Hello')
            }}>Click
            </button>

            <button onClick={(event) => {
                onClickHandler('Hello2')
            }}>Click2
            </button>



            <button onClick={OkHandler}>Good day</button>
            <button onClick={() => {OkHandler2(100)}}>Good day</button>
        </div>

    )
        ;
};
