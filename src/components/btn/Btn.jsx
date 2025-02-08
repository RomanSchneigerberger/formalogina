import React from 'react';
import './btn.scss'
const Btn = () => {

    const position = (e) => {
        console.log('Кнопа нажата по Кордионатом')
        console.log('позитция Y', e.pageY)
        console.log('позитция X', e.pageX)


    }

    return (
        <div>
            <button className='btn' onClick={position} >
                Where AmI
            </button>
        </div>
    );
};

export default Btn;