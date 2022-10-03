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

