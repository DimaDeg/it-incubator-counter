import {InputValue} from "../components/InputValue";
import {Buttons} from "../components/Buttons";
import React, {ChangeEvent, useState} from "react";
import s from '../components/InputValue.module.css';
import a from './ReduxCounter.module.css';
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../bll/store";
import {setRangeAC} from "../bll/reducers";



export const SetReduxCounter = () => {

    const min = useSelector<AppStateType, number>(state => state.counter.min);
    const max = useSelector<AppStateType, number>(state => state.counter.max);

    const dispatch = useDispatch()

    const [newMin, setNewMin] = useState(min)

    const ChangeNewMin = (e: ChangeEvent<HTMLInputElement>) => {
        setNewMin(+e.currentTarget.value)
    }

    const [newMax, setNewMax] = useState(max)

    const ChangeNewMax = (e: ChangeEvent<HTMLInputElement>) => {
        setNewMax(+e.currentTarget.value)
    }

    const setNewRange = () => {
        dispatch(setRangeAC(newMin, newMax))
    }

    return (
        <div className={a.app}>
            <InputValue name={'min'}
                        value={newMin}
                        type={'number'}
                        callback={ChangeNewMin}
                        className={newMin < 0 || newMin >= newMax ? s.error : ''}/>
            <InputValue name={'max'}
                        value={newMax}
                        type={'number'}
                        callback={ChangeNewMax}
                        className={newMax <= newMin ? s.error : ''}/>

            <div className={a.button}><NavLink to={'/counter'}>
                <Buttons name={'set'} disabled={newMin <= 0 || newMax <= newMin} callback={setNewRange}/>
            </NavLink></div>
        </div>
    )
}