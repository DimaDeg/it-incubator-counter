import React from 'react';
import s from './Counter.module.css'
import {Buttons} from "../components/Buttons";
import {Display} from "../components/Display";
import {RangeType} from "./App";


type CounterType = {
    value: number
    inc: () => void
    range: RangeType
    reset: () => void
}


export const Counter: React.FC<CounterType> = ({value, inc, range, reset}) => {
    return (
        <div className={s.app}>
            <Display value={value} range={range}/>
            <div >
                <Buttons name={'inc'} disabled={value === range.max} callback={inc}/>
                <Buttons name={'reset'} disabled={value === range.min} callback={reset}/>
            </div>

        </div>

    );
};

