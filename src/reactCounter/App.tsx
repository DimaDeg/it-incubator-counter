import React, {useEffect, useState} from 'react';
import './App.css';
import {Counter} from "./Counter";
import {SetCounter} from "./SetCounter";

export type RangeType = {
    min: number
    max: number
    status?: string
}

function App() {

    const [range, setRange] = useState<RangeType>({min: 0, max: 5, status: ''})

    let [value, setValue] = useState<number>(range.min)

    useEffect(() => {
            const newMin = localStorage.getItem('min')
            const newMax = localStorage.getItem('max')
            if (newMin && newMax) {
                const reloadMin = JSON.parse(newMin)
                const reloadMax = JSON.parse(newMax)
                setRange({...range, min: reloadMin, max: reloadMax})
                setValue(reloadMin)

            }
        },
        [])

    const changeRange = (min: number, max: number) => {
        localStorage.setItem('min', JSON.stringify(min))
        localStorage.setItem('max', JSON.stringify(max))
        setRange({...range, min, max, status: ''})
        setValue(min)
    }

    const changeStatus = (status: string) => {
        setRange({...range, status})
    }

    const inc = () => {
        if (value < range.max) {
            setValue(++value)
            setRange({...range,status:''})
        }
    }

    const reset = () => {
        setValue(range.min)
    }


    return (
        <div className="App">
            <Counter range={range}
                     value={value}
                     inc={inc}
                     reset={reset}/>
            <SetCounter changeRange={changeRange}
                        range={range}
                        changeStatus={changeStatus}
            />
        </div>
    );
}

export default App;
