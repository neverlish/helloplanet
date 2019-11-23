import { combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';
import {connectRouter} from "connected-react-router";

// @ts-ignore
const createRootReducer = (history: History<any>) => {
    return combineReducers({
        form: reduxFormReducer,
        router: connectRouter(history),
    });
};

export default createRootReducer;