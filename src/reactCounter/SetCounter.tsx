import {Buttons} from "../components/Buttons";
import React, {ChangeEvent, useState} from "react";
import s from './Counter.module.css'
import j from '../components/InputValue.module.css'
import {RangeType} from "./App";
import {InputValue} from "../components/InputValue";

type setCounterType = {
    changeRange: (min: number, max: number) => void
    range: RangeType
    changeStatus: (status: string) => void
}

export const SetCounter: React.FC<setCounterType> = ({changeRange, range, changeStatus}) => {

    const [min, setMin] = useState(range.min)

    const newMin = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.currentTarget.valueAsNumber < 0) {
            changeStatus('ERROR')
        } else if (e.currentTarget.valueAsNumber >= max) {
            changeStatus('INCORRECT')
        } else {
            changeStatus('Enter min, max and press SET')
        }
        setMin(e.currentTarget.valueAsNumber)
    }

    const [max, setMax] = useState<number>(range.max)

    const newMax = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.currentTarget.valueAsNumber < 0) {
            changeStatus('ERROR')
        } else if (e.currentTarget.valueAsNumber <= min) {
            changeStatus('INCORRECT')
        } else {
            changeStatus('Enter min, max and press SET')
        }
        setMax(e.currentTarget.valueAsNumber)
    }

    const setRange = () => {
        changeRange(min, max)
    }


    return (
        <div className={s.app}>
            <InputValue className={range.status === 'ERROR' || range.status === 'INCORRECT' ? j.error : ''}
                        name={'min'}
                        value={min}
                        type={"number"}
                        callback={newMin}/>
            <InputValue className={range.status === 'ERROR' || range.status === 'INCORRECT' ? j.error : ''}
                        name={'max'}
                        value={max}
                        type={"number"}
                        callback={newMax}/>
            <Buttons name={'SET'} disabled={min > max || min < 0} callback={setRange}/>
        </div>
    )

}