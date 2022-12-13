import {
    SET_COACH_PRESENTATION_AND_VIDEO_URLS,
    SET_FORM_DATA,
    SET_USER_ROLE,
    SET_USER_TUTORIAL_ARRAY
} from "../actions/auth_data";

const initialState = {
    formData: [],
    userRole: '',
    setTutorialsArray: [],
    setVideoEndPresentationArray: []
}

export default function reducer(state = initialState, action){
    switch (action.type){
        case SET_FORM_DATA:{
            const {formData} = action.payload;
            console.log(formData, ' form data ')
            return {
                ...state,
                formData: formData
            }
        }
        case SET_USER_ROLE:{
            const {userRole} = action.payload;
            console.log(userRole, ' SET_USER_ROLE ')
            return {
                ...state,
                userRole: userRole
            }
        }

        case SET_USER_TUTORIAL_ARRAY:{
            const {setTutorialsArray} = action.payload;
            // console.log(setTutorialsArray, ' SET_USER_TUTORIAL_ARRAY 1')
            return {
                ...state,
                setTutorialsArray: setTutorialsArray
            }
        }
        case SET_COACH_PRESENTATION_AND_VIDEO_URLS:{
            const {setVideoEndPresentationArray} = action.payload;
         //   console.log(setVideoEndPresentationArray, ' SET_COACH_PRESENTATION_AND_VIDEO_URLS')
            return {
                ...state,
                setVideoEndPresentationArray: setVideoEndPresentationArray
            }
        }
        default:{
            return state
        }
    }
}
