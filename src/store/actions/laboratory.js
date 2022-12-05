export const SET_LAB = 'SET_LAB'

export function setLab(lab) {
    return{
        type: SET_LAB,
        payload: {lab}
    }
}
