import {ReduxCounter} from "./ReduxCounter"
import {SetReduxCounter} from "./SetReduxCounter";
import {Routes, Route} from 'react-router-dom';


export const AppWithRedux = () => {

    return (
        <div>
            <Routes>
                <Route path={'/counter'} element={
                    <ReduxCounter/>
                }/>
                <Route path={'/*'} element={
                    <SetReduxCounter/>
                }/>
            </Routes>
        </div>
    )
}