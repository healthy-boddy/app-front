import {combineReducers} from 'redux';
import auth_data from './auth_data';
import is_logged from './is_logged';
import user_data from './user_data'
import user_token from './user_token'

export default combineReducers({
    auth_data,
    is_logged,
    user_data,
    user_token
})
