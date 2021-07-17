import user from './user';
import counter from './counter';
import {combineReducers} from 'redux';

const allReudcer = combineReducers({
    user, 
    counter
});

export default allReudcer;