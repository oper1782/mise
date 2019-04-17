import {combineReducers} from 'redux';
import MiseReducer from './miseReducer'

const rootReducer = combineReducers({
    mise: MiseReducer,
});

export default rootReducer;