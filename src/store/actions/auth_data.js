export const SET_FORM_DATA = 'SET_FORM_DATA';
export function setFormData(formData) {
    return{
        type: SET_FORM_DATA,
        payload:{
            formData
        }
    }
}

