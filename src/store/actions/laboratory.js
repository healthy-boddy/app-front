export const SET_LAB = 'SET_LAB'

export function setLab(lab) {
    return{
        type: SET_LAB,
        payload: {lab}
    }
}
export const SET_SAVED_ANALYSE_ID = 'SET_SAVED_ANALYSE_ID'

export function setSavedAnalyseId(analyseId) {
    return{
        type: SET_SAVED_ANALYSE_ID,
        payload: {analyseId}
    }
}
