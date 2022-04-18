import React, {ChangeEvent} from "react";
import s from "./InputValue.module.css"

type InputValueType = {
    name: string
    value: number
    type: string
    callback: (e: ChangeEvent<HTMLInputElement>) => void
    className: string
}


export const InputValue: React.FC<InputValueType> = ({name, value, type, callback, ...children}) => {
    return (
        <div className={s.iv}>
            <span className={s.span}>{name}</span>
            <input value={value} {...children} type={type} onChange={callback}/>
        </div>
    );
};

