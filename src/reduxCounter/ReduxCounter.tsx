import {Display} from "../components/Display";
import React from "react";
import {Buttons} from "../components/Buttons";
import s from './ReduxCounter.module.css'
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../bll/store";
import {changeValueAC} from "../bll/reducers";


export const ReduxCounter = () => {

    const min = useSelector<AppStateType, number>(state => state.counter.min);
    const max = useSelector<AppStateType, number>(state => state.counter.max);
    let value = useSelector<AppStateType, number>(state => state.counter.value);

    const range = {min,max}

    const dispatch = useDispatch()

    const incHandler = () => {
        dispatch(changeValueAC(value+1))
    }

    const resetHandler = () => {
        dispatch(changeValueAC(value=min))
    }


    return (
        <div className={s.app}>
            <Display value={value} range={range}/>
            <Buttons name={'inc'} disabled={value === max} callback={incHandler}/>
            <Buttons name={'reset'} disabled={value === min} callback={resetHandler}/>
            <NavLink to={'/set'}><Buttons name={'set'} callback={()=>{}}/></NavLink>
        </div>
    )
}