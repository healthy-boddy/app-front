import {DELETE_BIO, DELETE_TOKEN, SET_USER_BIO, USER_TOKEN, SET_CLIENT_DATA, DELETE_CLIENT_DATA} from "../actions/user_token";
const initialState = {
    user_token: '',
    user_bio: '',
    client_data: ''
}

export default function reducer(state = initialState, action){
    switch (action.type){
        case USER_TOKEN:{
            const {user_token} = action.payload;
            return {
                ...state,
                user_token: user_token
            }
        }
        case DELETE_TOKEN:{
            return {
                ...state,
                user_token: ''
            }
        }
        case SET_USER_BIO:{
            const {user_bio} = action.payload;
            return {
                ...state,
                user_bio: user_bio
            }
        }
        case DELETE_BIO:{
            return {
                ...state,
                user_bio: ''
            }
        }
        case SET_CLIENT_DATA:{
            const {client_data} = action.payload;
            console.log(client_data, 'CLIENT DATA FROM REDUCER')
            return {
                ...state,
                client_data: client_data
            }
        }
        case DELETE_CLIENT_DATA:{
            return {
                ...state,
                client_data: ''
            }
        }
        default:{
            return state
        }
    }
}
