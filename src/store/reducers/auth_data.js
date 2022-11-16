import {
    SET_FORM_DATA,
    SET_USER_ROLE,
    SET_USER_TUTORIAL_ARRAY
} from "../actions/auth_data";

const initialState = {
    formData: [],
    userRole: '',
    setTutorialsArray: []

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
            console.log(setTutorialsArray, ' SET_USER_TUTORIAL_ARRAY')
            return {
                ...state,
                setTutorialsArray: setTutorialsArray
            }
        }
        default:{
            return state
        }
    }
}
