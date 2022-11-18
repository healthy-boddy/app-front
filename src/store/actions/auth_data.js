export const SET_FORM_DATA = 'SET_FORM_DATA';
export function setFormData(formData) {
    return{
        type: SET_FORM_DATA,
        payload:{
            formData
        }
    }
}

export const SET_USER_ROLE = 'SET_USER_ROLE';
export function setUserRole(userRole) {
    return{
        type: SET_USER_ROLE,
        payload:{
            userRole
        }
    }
}

export const SET_USER_TUTORIAL_ARRAY = 'SET_USER_TUTORIAL_ARRAY';
export function setCoachTutorialsArray(setTutorialsArray) {
    return{
        type: SET_USER_TUTORIAL_ARRAY,
        payload:{
            setTutorialsArray
        }
    }
}
export const SET_COACH_PRESENTATION_AND_VIDEO_URLS = 'SET_COACH_PRESENTATION_AND_VIDEO_URLS';
export function setVideoEndPresentation(setVideoEndPresentationArray) {
    return{
        type: SET_COACH_PRESENTATION_AND_VIDEO_URLS,
        payload:{
            setVideoEndPresentationArray
        }
    }
}

