import user from './user';
import counter from './counter';
import {combineReducers} from 'redux';

const allReudcer = combineReducers({
    userTest: user, 
    counter
});

export default allReudcer;