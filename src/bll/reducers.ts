const initialState = {
    min: 0,
    max: 5,
    value: 0
}

type InitialStateType = typeof initialState

type ActionType = changeValueType | setRangeType

export const Reducers = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case 'CHANGE-VALUE': {
            return {...state, value: action.value}
        }
        case 'SET-RANGE': {
            return {...state, min: action.min, max: action.max, value: action.min}
        }
        default: {
            return state
        }
    }
}

export const changeValueAC = (value: number) => ({type: 'CHANGE-VALUE', value} as const)
export const setRangeAC = (min: number, max: number) => ({type: 'SET-RANGE', min, max} as const)

export type changeValueType = ReturnType<typeof changeValueAC>
export type setRangeType = ReturnType<typeof setRangeAC>