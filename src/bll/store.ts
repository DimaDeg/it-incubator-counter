import {combineReducers, createStore} from "redux";
import {Reducers} from "./reducers";
import {loadState, saveState} from "../LocalStorageUtils/LocalStorageUtils";

const RootReducer = combineReducers({
    counter: Reducers
})

export const store = createStore(RootReducer,loadState());

store.subscribe(()=>{
    saveState({counter: store.getState().counter})
})

export type AppStateType = ReturnType<typeof RootReducer>