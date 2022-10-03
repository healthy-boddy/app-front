import {SET_FORM_DATA, SET_USER_ROLE} from "../actions/auth_data";

const initialState = {
    formData: [],
    userRole: ''
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
        default:{
            return state
        }
    }
}
