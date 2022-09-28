import {DELETE_USER_DATA, SET_USER_DATA} from "../actions/user_data";

const initialState = {
    user_data: [],
}

export default function reducer(state = initialState, action){
    switch (action.type){
        case SET_USER_DATA:{
            const {user_data} = action.payload;
            console.log(user_data, ' user data')
            return {
                ...state,
                user_data: user_data
            }
        }
        case DELETE_USER_DATA:{
            return {
                ...state,
                user_data: []
            }
        }
        default:{
            return state
        }
    }
}
