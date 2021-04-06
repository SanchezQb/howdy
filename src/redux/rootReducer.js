import { combineReducers } from 'redux';
import groupsReducer from './groups/groupsReducer';

const rootReducer = combineReducers({
    groups: groupsReducer
})

export default rootReducer