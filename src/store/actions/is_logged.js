export const IS_LOGGED = 'IS_LOGGED'

export function isLogged(is_logged){
    return {
        type: IS_LOGGED,
        payload: {
            is_logged
        }
    }
}

