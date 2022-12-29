export const SET_PAID_QUIZE = 'SET_PAID_QUIZE'

export function setPaidQuize(quize) {
    return{
        type: SET_PAID_QUIZE,
        payload: {
            quize
        }
    }
}
export const SET_FREE_QUIZE = 'SET_FREE_QUIZE'

export function setFreeQuize(free_quize) {
    return{
        type: SET_FREE_QUIZE,
        payload: {
            free_quize
        }
    }
}
