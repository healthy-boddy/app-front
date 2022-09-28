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

