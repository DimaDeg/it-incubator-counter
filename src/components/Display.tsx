import React from 'react';
import s from "../reactCounter/Counter.module.css";
import {RangeType} from "../reactCounter/App";

type  DisplayType = {
    value: number
    range: RangeType
}

export const Display: React.FC<DisplayType> = ({value, range}) => {

    return (
        <div className={s.value}>
            <div className={value === range.max ? s.max : ''}>
                {range.status ? range.status : value}
            </div>
        </div>
    );
};
