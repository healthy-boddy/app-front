export const USER_TOKEN = 'USER_TOKEN'

export function setUserToken(user_token){
    return {
        type: USER_TOKEN,
        payload: {
            user_token
        }
    }
}

export const DELETE_TOKEN = 'DELETE_TOKEN'

export function deleteUserToken(){
    return {
        type: DELETE_TOKEN
    }
}

export const SET_USER_BIO = 'SET_USER_BIO'

export function setUserBio(user_bio){
    return {
        type: SET_USER_BIO,
        payload: {
            user_bio
        }
    }
}

export const DELETE_BIO = 'DELETE_BIO'

export function deleteUserBio(){
    return {
        type: DELETE_BIO
    }
}
export const SET_CLIENT_DATA = 'SET_CLIENT_DATA'

export function setClientData(client_data){
    return {
        type: SET_CLIENT_DATA,
        payload: {
            client_data
        }
    }
}

export const DELETE_CLIENT_DATA = 'DELETE_CLIENT_DATA'

export function deleteClientData(){
    return {
        type: DELETE_CLIENT_DATA
    }
}

