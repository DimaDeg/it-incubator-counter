import React from 'react';
import s from './Buttons.module.css'

type ButtonType = {
    name: string
    disabled?: boolean
    callback: () => void
}
export const Buttons:React.FC<ButtonType> = ({name, disabled, callback}) => {

    return (
        <button className={s.buttons}
                onClick={callback}
                disabled={disabled}>
            {name}
        </button>
    );
};



